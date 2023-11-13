function calculateColor(posx, posy) {
  const r = Math.round(255 * (posx / window.innerWidth));
  const g = Math.round(255 * (posy / window.innerHeight));
  const b = Math.round(255 * ((posx + posy) / (window.innerWidth + window.innerHeight)));
  const color = `rgb(${r},${g},${b})`;
  console.log(color);
  return color;
}

document.addEventListener('mousemove', function (e) {
  document.body.style.backgroundColor = calculateColor(e.pageX, e.pageY);
});
