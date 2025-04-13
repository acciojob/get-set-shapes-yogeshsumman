class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call parent constructor with equal width and height
    super(side, side);
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;