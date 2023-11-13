const colorSection = document.querySelector('#colors');

colorSection.addEventListener('click', function (e) {
  document.body.style.backgroundColor = e.target.dataset.hex;
});
