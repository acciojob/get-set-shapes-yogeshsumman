class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call parent constructor with equal width and height
    super(side, side);
  }

  // Override getPerimeter for more efficient calculation
  getPerimeter() {
    return 4 * this.width; // or 4 * this.height since they're equal
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;