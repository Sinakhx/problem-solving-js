 class Shape {
   area(){
    // sth...
   }
 }
 
 class Rectangle extends Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
}

class Square extends Shape {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseShapeWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5); // we should be able to substitute this with a square without breaking the output

increaseShapeWidth(rectangle1);
increaseShapeWidth(rectangle2);

console.log(rectangle1.area()); //22
console.log(rectangle2.area()); //30

// now if we refactor rectangle2 into the following we get 36 instead of 30
const square = new Square(5, 5);
increaseShapeWidth(square);
console.log(square.area()); //36 which is false