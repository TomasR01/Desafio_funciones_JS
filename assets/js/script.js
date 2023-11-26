const ele = document.getElementById("ele1");
ele.style.background = "green";

function pintar(element, color) {
  ele.style.backgroundColor = color;
}

ele.addEventListener("click", () => pintar(ele, "yellow"));
