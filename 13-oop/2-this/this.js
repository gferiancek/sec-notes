const blue = {
  name: 'Blue',
  breed: 'Scottish Fold',
  dance(style) {
    console.log(this);
    console.log(`Meow, I am ${this.name} and I like to ${style}.`);
  },
  play(...toys) {
    for (let toy of toys) {
      console.log(`${this.name} plays with ${toy}`);
    }
  },
  greet() {
    alert(`${this.name} says 'MEOW!'`);
  },
};

document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue));

const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');

function popUp(msg) {
  alert(`Secret message is: ${msg}`);
}

btnA.addEventListener('click', popUp.bind(null, 'Button A says hi!'));
btnB.addEventListener('click', popUp.bind(null, 'Button B says hi!'));
btnC.addEventListener('click', popUp.bind(null, 'Button C says hi!'));
// const blueDance = blue.dance;

// function whatIsThis() {
//   console.log('this = ', this);
// }

// const myObj = {
//   func: whatIsThis,
// };

// class Cat {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   dance(danceType) {
//     console.log('THIS IS: ', this);
//     console.log(`Meow, I am a ${this.breed} and I like to ${danceType}`);
//   }
// }

// const rocket = new Cat('rocket', 'tabby');
// const rocketDance = rocket.dance;

// const boundDance = blueDance.bind(rocket);
// const dog = {
//   name: 'Sammy',
//   breed: 'Husky',
//   dance: boundDance,
// };

const greeter = {
  msg: 'I like chickens',
  waitAndGreet(delay) {
    setTimeout(() => {
      alert(this.msg);
    }, delay);
  },
};
