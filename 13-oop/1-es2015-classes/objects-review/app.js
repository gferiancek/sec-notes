// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// // const myMath = {};
// // myMath.add = add;
// // myMath.mult = mult;

// const myMath = { add, mult, square, power };

const myMath = {
  add(x, y) {
    return x + y;
  },
  mult(x, y) {
    return x * y;
  },
  square(x) {
    return x * x;
  },
  pow(x, y) {
    return x ** y;
  },
};

// let side1 = 3;
// let side2 = 4;
// let side3 = getHypotenuse(a, b);
// function getHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// function getArea(a, b) {
//   return (a * b) / 2;
// }

function Triangle(a, b) {
  this.a = a;
  this.b = b;
  this.getArea = function () {
    return (this.a * this.b) / 2;
  };
  this.getHypotenuse = function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  };
}
const myTriangle = new Triangle(9, 12);
const tinyTriangle = new Triangle(3, 4);

const set = new Set('Hello');
