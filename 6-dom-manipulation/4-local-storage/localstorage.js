const preferences = {
  fontSize: '18px',
  favColor: 'purple',
};

localStorage.setItem('preferences', JSON.stringify(preferences));

const { favColor } = JSON.parse(localStorage.preferences);
document.body.style.backgroundColor = favColor;
