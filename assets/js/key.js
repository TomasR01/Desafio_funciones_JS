const key = document.getElementById("key");

const agregaDiv = (color) => {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = "color";
  nuevoDiv.style.border = "3px black";
  document.body.appendChild(nuevoDiv);
};

document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s" || event.key === "S") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d" || event.key === "D") {
    key.style.backgroundColor = "skyblue";
  } else if (event.key === "q" || event.key === "Q") {
    key.style.backgroundColor = "purple";
  } else if (event.key === "w" || event.key === "W") {
    key.style.backgroundColor = "gray";
  } else if (event.key === "e" || event.key === "E") {
    key.style.backgroundColor = "brown";
  }
});
