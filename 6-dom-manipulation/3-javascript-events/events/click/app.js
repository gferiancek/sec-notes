// HTML inline
function makeBody(color) {
  document.body.style.backgroundColor = color;
}

// JS
const btn = document.querySelector('#teal');
btn.onclick = function () {
  makeBody('teal');
};

// eventListener
const violetBtn = document.querySelector('#violet');
violetBtn.addEventListener('click', function () {
  makeBody('violet');
});

const h1 = document.querySelector('h1');
violetBtn.addEventListener('click', function () {
  h1.style.color = 'cyan';
});
