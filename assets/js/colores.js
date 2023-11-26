const colores = document.getElementsByClassName("colores");

const cambiaColor = (event) => (event.target.style.backgroundColor = "black");

colores[0].addEventListener("click", cambiaColor);
colores[1].addEventListener("click", cambiaColor);
colores[2].addEventListener("click", cambiaColor);
colores[3].addEventListener("click", cambiaColor);
