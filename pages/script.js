window.onscroll = function() {mostrarBotaoFlutuante()};

function mostrarBotaoFlutuante() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back").style.display = "block";
  } else {
    document.getElementById("back").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
