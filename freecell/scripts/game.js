import Card from './card.js';
import Cell from './cell.js';
import Foundation from './foundation.js';
import Pile from './pile.js';
import Grabbed from './grabbed.js';

import MenuBar from './menu-bar.js';
import StatusBar from './status-bar.js';

import { IMG_SRC, SUITS, RANKS } from './constants.js';
import CardWaterfall from './card-waterfall.js';

import Sona from './sona.js';

const IMAGES = {};
let loadedImageCount = 0;

const onImageLoad = () => {
  // TODO: display a progress bar or something
  loadedImageCount += 1;

  // this means we've got all our images in memory
  if (loadedImageCount === IMG_SRC.length) {
    // TODO: initialize the canvas before this, so a "loading" progress bar can be
    // displayed (or "Loading..." text)

    // also ensure
    document.fonts.ready.then(() => new FreeCell());
  }
};

// enumerate over image sources, and load them into memory
IMG_SRC.forEach(src => {
  // key is in format `suit_rank` -- probably a better way to do this
  let key = src.match(/(?<=images\/)\w+\/\w+/)[0].replace('/','_');

  IMAGES[key] = new Image();
  IMAGES[key].src = src;
  IMAGES[key].addEventListener('load', onImageLoad);
});

// load custom font
const font = new FontFace('Generic Mobile System', 'url(fonts/generic-mobile-system.woff2)');
document.fonts.add(font);
font.load();

// load sounds
const sfx = new Sona([
  'sounds/flip_1.mp3',
  'sounds/flip_2.mp3',
  'sounds/flip_3.mp3',
  'sounds/flip_4.mp3',
  'sounds/flip_5.mp3'
]);

await sfx.load();

// ----------------------------------------------

class FreeCell {
  undoStack = [];

  // var to hold reference to grabbed card(s)
  grabbed = new Grabbed();

  // used for custom double-click/tap implementation
  // this val is set in `onDown` function; if it is called again rapidly
  // (e.g. within 500ms) then the interaction counts as a double-click
  lastOnDownTimestamp = Date.now();

  // stores reference to falling cards animation
  waterfall = null;

  // initialize all places where a card can be placed - https://en.wikipedia.org/wiki/Glossary_of_patience_terms

  // 4 "cells"
  cells = [
    new Cell(IMAGES['backs_cell']),
    new Cell(IMAGES['backs_cell']),
    new Cell(IMAGES['backs_cell']),
    new Cell(IMAGES['backs_cell'])
  ];

  // 4 "foundations" - aligned vertically with talon/waste, on right side of tableau
  foundations = [
    new Foundation(IMAGES['backs_target']),
    new Foundation(IMAGES['backs_target']),
    new Foundation(IMAGES['backs_target']),
    new Foundation(IMAGES['backs_target'])
  ];

  // 8 "piles" - span the width of the tableau, under the talon/waste/foundations
  piles = [new Pile(), new Pile(), new Pile(), new Pile(), new Pile(), new Pile(), new Pile(), new Pile()];

  // stores a reference of all cards
  cards = [];

  constructor() {
    this.canvas = document.getElementById('game');
    this.context = this.canvas.getContext('2d');

    this.status = new StatusBar(this.canvas);
    this.menu = new MenuBar(this.canvas);

    // initialize list of cards
    SUITS.forEach(suit => {
      RANKS.forEach(rank => {
        this.cards.push(new Card(rank, suit, IMAGES));
      });
    });

    // various event listeners
    this.canvas.addEventListener('mousedown', e => this.onDown(e));
    this.canvas.addEventListener('mousemove', e => this.onMove(e));
    this.canvas.addEventListener('mouseup', e => this.onUp(e));

    this.canvas.addEventListener('touchstart', e => this.onDown(e));
    this.canvas.addEventListener('touchmove', e => this.onMove(e));
    this.canvas.addEventListener('touchend', e => this.onUp(e));

    window.addEventListener('resize', e => this.onResize(e));
    window.addEventListener('keydown', e => this.undo(e));

    // put cards in appropriate places
    this.deal();

    // initial draw/resize
    this.onResize();
  }

  // abstract getting x/y coords for user interactions for both
  // multitouch and traditional (e.g. mouse/trackpad)
  getCoords(event) {
    if (event.changedTouches && event.changedTouches.length > 0) {
      return {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
      };
    }

    return {
      x: event.x,
      y: event.y
    };
  }

  reset() {
    this.waterfall = null;
    this.status.reset();
    this.deal();
    this.draw();
  }

  deal() {
    const piles = this.piles;
    const cells = this.cells;
    const foundations = this.foundations;

    const deck = [];

    this.cards.forEach(card => {
      // ensure any link between cards is broken
      card.child = null;
      card.parent = null;
      card.faceUp = false;

      deck.push(card);
    });

    // reset all stacks
    cells.forEach(c => c.reset());
    piles.forEach(p => p.reset());
    foundations.forEach(f => f.reset());

    // shuffle deck
    let currentIndex = deck.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }

    // populate the playing piles
    // This is super janky -- there is probably a better way to do this
    // TODO: 100ms delay (or similar) between placing cards
    while (deck.length) {
      let card = deck.pop();
      card.faceUp = true;

      let pile = piles[deck.length % piles.length];
      let lastCard = pile.lastCard;

      lastCard.child = card;
      card.parent = lastCard;
    }
  }

  draw() {
    // clear previous contents
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw card piles
    this.cells.forEach(c => c.draw(this.context));
    this.foundations.forEach(f => f.draw(this.context));
    this.piles.forEach(p => p.draw(this.context));

    // draw any cards currently being moved by player
    this.grabbed.draw(this.context);

    this.menu.draw();
    this.status.draw();
  }

  checkWin() {
    // ensure that each foundation has 13 cards; we don't check for matching suit
    // or ascending rank because those checks are done when the card is played
    return this.foundations.every(f => {
      let count = 0;
      let parent = f;

      while (parent.child) {
        count += 1;
        parent = parent.child;
      }

      return count === 13;
    });
  }

  get openCells() {
    return this.cells.reduce((accumulator, cell) => {
      if (cell.hasCards) {
        accumulator -= 1;
      }

      return accumulator;
    }, this.cells.length);
  }

  get openCascades() {
    return this.piles.reduce((accumulator, pile) => {
      if (pile.hasCards) {
        accumulator -= 1;
      }

      return accumulator;
    }, this.piles.length);
  }

  attemptToPlayOnFoundation(card) {
    // loop is reversed so the foundation nearest the waste is checked first
    for (let i = this.foundations.length - 1; i >= 0; i -= 1) {
      let f = this.foundations[i];

      if (f.validPlay(card)) {
        let target = f.lastCard;

        this.undoStack.push({
          card,
          target,
          parent: card.parent
        });

        // remove card from previous parent
        card.parent.child = null;

        // add to foundation stack
        target.child = card;
        card.parent = target;

        // update tableau
        this.draw();

        this.cardSfx();

        this.status.updateCardsLeft(-1);

        // card was played, so no longer need to check
        // subsequent foundations
        break;
      }
    }

    // See if the most recent move was a winning one
    // TODO: move this elsewhar?
    if (this.checkWin()) {
      this.status.stopTimer();

      this.waterfall = new CardWaterfall(this.canvas, this.foundations, () => { this.reset(); });
    }
  }

  onDown(e) {
    e.preventDefault();

    if (this.waterfall) {
      this.waterfall.stop();
      this.waterfall = null;
      return;
    }

    const delta = Date.now() - this.lastOnDownTimestamp;
    const doubleClick = delta < 500;

    // reset the timestamp that stores the last time the player clicked
    // if the current click counts as "double", then set the timestamp way in the past
    // otherwise you get a "3 click double click" because the 2nd/3rd clicks are too close together
    this.lastOnDownTimestamp = doubleClick ? 0 : Date.now();

    // console.log(`Double-click? ${doubleClick ? 'Yes!' : 'No :('}; last "on down" timestamp: ${this.lastOnDownTimestamp}`);

    this.status.startTimer();

    const point = this.getCoords(e);

    const foundations = this.foundations;
    const cells = this.cells;
    const piles = this.piles;

    // TODO: merge the loops for cells and foundations
    cells.forEach(c => {
      if (c.touched(point) && c.hasCards) {
        let card = c.lastCard;

        if (doubleClick) {
          // try to play the card directly on to one of the foundations
          this.attemptToPlayOnFoundation(card);

          // no additional actions after a double-click
          return;
        }

        // remove card from "foundation" list
        card.parent.child = null;

        // add to stack which player is "holding"
        this.grabbed.child = card;

        this.grabbed.source = 'cell';

        // set offset at which the card is grabbed
        this.grabbed.setOffset(point);

        // move the grabbed stack to the cursor
        this.grabbed.move(point);
      }
    })

    // allow player to pick cards back up off the foundations if needed
    foundations.forEach(f => {
      if (f.touched(point) && f.hasCards) {
        this.canvas.style.cursor = 'grabbing';

        let card = f.lastCard;

        // remove card from "foundation" list
        card.parent.child = null;

        // add to stack which player is "holding"
        this.grabbed.child = card;

        this.grabbed.source = 'foundation';

        // set offset at which the card is grabbed
        this.grabbed.setOffset(point);

        // move the grabbed stack to the cursor
        this.grabbed.move(point);
      }
    });

    // check for picking up cards on play piles
    for (let i = 0; i < piles.length; i += 1) {
      const p = piles[i];

      // if the pile has no cards, go to the next one
      if (!p.hasCards) {
        continue;
      }

      const card = p.touchedStack(point);

      // if player touched a card
      if (card) {
        if (doubleClick && !card.child) {
          // only allow if card is the last in a pile
          // try to play the card directly on to one of the foundations
          this.attemptToPlayOnFoundation(card);

          // no additional actions after a double-click
          return;
        }

        // only allow alternating sequences of cards to be picked up
        if (!card.childrenInSequence) {
          return;
        }

        // TODO: rename "pile" to "cascade"

        // https://boardgames.stackexchange.com/questions/45155/freecell-how-many-cards-can-be-moved-at-once/45157#45157

        const max = Math.pow(2, this.openCascades) * (this.openCells + 1);
        if (card.childCount > max) {
          console.log(`Can't grab ${card.childCount} cards; max is ${max}`);
          return;
        }

        this.canvas.style.cursor = 'grabbing';

        // break the parent -> child connection so the card(s) are no longer drawn at the source
        // but keep the parent <- child connection until card(s) are dropped
        card.parent.child = null;

        // add to stack which player is "holding"
        this.grabbed.child = card;

        this.grabbed.source = 'pile';

        // set offset at which the card is grabbed
        this.grabbed.setOffset(point);

        // move the grabbed stack to the cursor
        this.grabbed.move(point);
      }
    }

    // update canvas
    this.draw();
  }

  onMove(e) {
    e.preventDefault();

    if (!this.grabbed.hasCards) {
      return;
    }

    let point = this.getCoords(e);

    // move the card along with the touch/cursor
    this.grabbed.move(point);

    this.draw();
  }

  onUp(e) {
    e.preventDefault();

    const grabbed = this.grabbed;
    const foundations = this.foundations;
    const cells = this.cells;
    const piles = this.piles;

    // if not holding a card, then there's nothing to do
    if (!grabbed.hasCards) {
      return;
    }

    // reset cursor style
    this.canvas.style.cursor = 'grab';

    // check if current position of card overlaps
    // any playable area; if so, move to that location

    let valid = false;

    // check to see if card can be played on foundations
    for (let i = 0; i < foundations.length; i += 1) {
      const f = foundations[i];

      if (grabbed.overlaps(f)) {
        let target = f.lastCard;
        let card = grabbed.child;

        valid = f.validPlay(card);

        if (valid) {
          this.undoStack.push({
            card,
            target,
            parent: card.parent
          });

          target.child = card;
          card.parent = target;

          this.status.updateCardsLeft(-1);

          this.cardSfx();

          // successfully placed card; break out of the `onUp` function
          // because card can overlap multiple valid play areas
          // and shouldn't be placed in more than one
          break;
        }
      }
    }

    // check to see if card can be played on cells
    for (let i = 0; i < cells.length; i += 1) {
      if (valid) {
        break;
      }

      const cell = cells[i];

      if (grabbed.overlaps(cell)) {
        let target = cell.lastCard;
        let card = grabbed.child;

        // can only play on a cell if it is empty
        valid = !cell.hasCards;

        if (valid) {
          this.undoStack.push({
            card,
            target,
            parent: card.parent
          });

          target.child = card;
          card.parent = target;

          this.cardSfx();

          // successfully placed card; break out of the `onUp` function
          // because card can overlap multiple valid play areas
          // and shouldn't be placed in more than one
          break;
        }
      }
    }

    // check to see if card can be played on piles
    for (let i = 0; i < piles.length; i += 1) {
      if (valid) {
        break;
      }

      const p = piles[i];

      if (grabbed.overlaps(p)) {
        let target = p.lastCard;
        let card = grabbed.child;

        valid = p.validPlay(card);

        if (valid) {
          this.undoStack.push({
            card,
            target,
            parent: card.parent
          });

          target.child = card;
          card.parent = target;

          // increment "cards left" counter if you play a card back down from the foundation
          if (grabbed.source === 'foundation') {
            this.status.updateCardsLeft(1);
          }

          this.cardSfx();

          // successfully placed card; break out of the `onUp` function
          // because card can overlap multiple valid play areas
          // and shouldn't be placed in more than one
          break;
        }
      }
    }

    if (!valid) {
      // if no valid play was made, put the card back where it was
      // we do this by re-establishing the link from the parent -> child,
      // so the parent object (waste, pile, etc.) will have a link to the child again
      let card = grabbed.child;

      card.parent.child = card;
    }

    // release reference to grabbed card(s)
    grabbed.child = null;
    grabbed.source = null;

    // update tableau
    this.draw();

    if (this.checkWin()) {
      this.status.stopTimer();

      this.waterfall = new CardWaterfall(this.canvas, this.foundations, () => { this.reset(); });
    }
  }

  cardSfx() {
    const sounds = Object.keys(sfx.buffers);
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    sfx.play(randomSound);
  }

  onResize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const aspectRatio = 4 / 3;
    const scale = window.devicePixelRatio;

    const canvas = this.canvas;
    const grabbed = this.grabbed;

    const cells = this.cells;
    const foundations = this.foundations;
    const piles = this.piles;
    const cards = this.cards;

    // canvas is as large as the window;
    // cards will be placed in a subset of this area
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowHeight}px`;

    // account for high DPI screens
    canvas.width = Math.floor(windowWidth * scale);
    canvas.height = Math.floor(windowHeight * scale);

    // normalize coordinate system
    canvas.getContext('2d').scale(scale, scale);

    // playable area, where cards will be drawn
    let tableauWidth;
    let tableauHeight;

    if (windowWidth / windowHeight > aspectRatio) {
      // wider than it is tall; use the window height to calculate tableau width
      tableauWidth = windowHeight * aspectRatio;
      tableauHeight = windowHeight;
    } else {
      // taller than it is wide; use window width to calculate tableau height
      tableauHeight = windowWidth / aspectRatio;
      tableauWidth = windowWidth;
    }

    let windowMargin = (windowWidth - tableauWidth) / 2;

    // TODO: adjust these such that 8 columns can be drawn

    // tweak these values as necessary
    let cardMargin = (5 / 605) * tableauWidth;
    let cardOffset = cardMargin * 4;

    // cards _should_ be 75x100
    let cardWidth = (70 / 605) * tableauWidth;
    let cardHeight = (93.333 / 454) * tableauHeight;

    // enumerate over all cards/stacks in order to set their width/height
    for (let group of [grabbed, cells, foundations, piles, cards]) {
      if (Array.isArray(group)) {
        for (let item of group) {
          item.width = cardWidth;
          item.height = cardHeight;
          item.cardOffset = cardOffset;
        }
      } else {
        group.width = cardWidth;
        group.height = cardHeight;
        group.cardOffset = cardOffset;
      }
    }

    this.menu.resize(tableauWidth);
    this.status.resize(tableauWidth);


    const top = cardMargin + this.menu.height;
    const left = windowMargin + cardMargin;

    // foundations on the left
    foundations.forEach((f, i) => {
      f.x = left + (cardWidth + cardMargin) * i;
      f.y = top;
    });

    // cells are on the right; the (i + 4) allows space for foundations
    cells.forEach((c, i) => {
      c.x = left + (cardWidth + cardMargin) * (i + 4);
      c.y = top;
    });

    piles.forEach((p, i) => {
      p.x = windowMargin + cardMargin + (cardWidth + cardMargin) * i;
      p.y = top + cardHeight + cardMargin; // allows space for cells/foundation
    });

    if (!this.interval) {
      // update screen if not displaying card waterfall
      this.draw();
    }
  }

  undo(e) {
    // return unless the keypress is meta/contrl + z (for undo)
    if (!(e.metaKey || e.ctrlKey) || e.key !== 'z') {
      return;
    }

    if (this.undoStack.length < 1) {
      console.log('No previously saved moves on the undo stack.');
      return;
    }

    // get card state _before_ the most recent move
    let {card, parent, target} = this.undoStack.pop();

    // remove destination
    target.child = null;

    // reset the original parent <-> child card link
    card.parent = parent;
    parent.child = card;

    // update the screen
    this.draw();
  }
} // end FreeCell

export default FreeCell;
