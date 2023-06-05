const elemento = document.getElementById("meu-elemento");


elemento.addEventListener("wheel", function(event) {
  event.preventDefault();
  elemento.scrollLeft += event.deltaY;
});


