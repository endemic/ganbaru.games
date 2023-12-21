export default class Card {
  faceUp = false;
  backImg = null;
  frontImg = null;
  suit = null;
  rank = null;

  parent = null;
  child = null;

  // position/size values are set externally by
  // a method that inspects viewport dimensions
  x = null;
  y = null;
  width = null;
  height = null;

  allRanks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

  constructor(rank, suit, images) {
    this.rank = rank;
    this.suit = suit;

    this.backImg = images['backs_one'];
    this.frontImg = images[`${this.suit}_${this.rank}`];
  }

  get image() {
    if (this.faceUp) {
      return this.frontImg;
    }

    return this.backImg;
  }

  toString() {
    return `${this.rank} ${this.suit}`;
  }

  get color() {
    if (this.suit === 'hearts' || this.suit === 'diamonds') {
      return 'red';
    }

    return 'black';
  }

  // returns this - b; e.g. 5 - 2 = 3
  // used to ensure sequential card placement
  diff(b) {
    return this.allRanks.indexOf(this.rank) - this.allRanks.indexOf(b.rank);
  }

  get childCount() {
    let card = this;
    let count = 1;

    while (card.child) {
      count += 1;
      card = card.child;
    }

    return count;
  }

  get childrenInSequence() {
    // if no children, there's a sequence by default
    if (!this.child) {
      return true;
    }

    let card = this.child;

    // go thru each child, and if it's the same color as the parent, OR the value difference
    // is greater than -1, then it's not an alternating sequence, and we can return (false) early
    while (card) {
      if (card.parent.color === card.color || card.diff(card.parent) !== -1) {
        return false;
      }

      card = card.child;
    }

    return true;
  }
}
