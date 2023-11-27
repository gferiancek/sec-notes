// class Triangle {
//   greet() {
//     console.log('Hello from Triangle!!');
//   }

//   display() {
//     console.log(`Triangle with the sides of ${this.a} and ${this.b}`);
//   }
// }

// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

class Triangle {
  constructor(a, b, c) {
    for (let side of [a, b, c]) {
      if (!Number.isFinite(side) || side <= 0) {
        throw new Error(`Invalid Side of ${side}.`);
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }
  display() {
    return `Triangle with the sides of ${this.a}, ${this.b}, and ${this.c}`;
  }
  getArea() {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isBig() {
    return this.getArea() > 50;
  }
}

const myTriangle = new Triangle(3, 4, 5);
const largeTriangle = new Triangle(30, 40, 50);

class RightTriangle extends Triangle {
  constructor(a, b, c) {
    if (a ** 2 + b ** 2 !== c ** 2) {
      throw new Error('Invalid Hypotenuse!');
    }
    super(a, b, c);
  }

  display() {
    return `Right ${super.display()}`;
  }
}
const rightTriangle = new RightTriangle(3, 4, 5);
