const allH3s = document.querySelectorAll('h3');

for (let h3 of allH3s) {
	h3.style.color = 'pink';
}

const imgs = document.querySelectorAll('img');

for (let img of imgs) {
	img.style.width = '100px';
	img.style.border = '2px solid green';
}
