function toggleAllTodos() {
	const todos = document.querySelectorAll('li');

	for (let li of todos) {
		li.classList.toggle('completed');
	}
}

const h1 = document.querySelector('h1');

setInterval(function () {
	if (h1.classList.contains('big')) {
		h1.innerText = 'SAD';
		h1.classList.replace('big', 'small');
	} else {
		h1.innerText = 'HAPPY';
		h1.classList.replace('small', 'big');
	}
}, 1000);
