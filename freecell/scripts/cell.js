import Stack from './stack.js';

export default class Cell extends Stack {
  constructor(targetImage) {
    super('cell');

    this.image = targetImage;
  }

  draw(context) {
    // TODO: cells are only allowed to store one card
    if (!this.hasCards) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);

      return;
    }

    let card = this.child;

    // ensure card has correct coordinates
    card.x = this.x;
    card.y = this.y;

    context.drawImage(card.image, card.x, card.y, card.width, card.height);
  }

  get size() {
    let height = this.height;
    let width = this.width;

    return { width, height };
  }
}
