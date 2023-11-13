const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!";
newTodo.classList.add('todo');
newTodo.append(boldText);

const secondTodo = document.createElement('li');
secondTodo.textContent = 'Order more la croix';
secondTodo.className = 'todo';

ul.append(newTodo, secondTodo);

const thirdTodo = document.createElement('li');
thirdTodo.textContent = 'Feed Cats';
thirdTodo.classList.add('todo');

ul.prepend(thirdTodo);

const newImg = document.createElement('img');
newImg.classList.add('thumbnail');
newImg.setAttribute(
	'src',
	'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'
);

document.body.prepend(newImg);

const removeMe = document.querySelector('#remove-me');
removeMe.remove();

const h1 = document.querySelector('h1');
h1.remove();
