// Modo claro / oscuro de La papupagina.
// Se aplica antes de pintar la página para que no parpadee.
(function () {
  var raiz = document.documentElement;
  var guardado = null;

  try {
    guardado = localStorage.getItem("tema");
  } catch (e) {}

  var prefiereOscuro =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  raiz.setAttribute("data-theme", guardado || (prefiereOscuro ? "dark" : "light"));

  document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById("tema");
    if (!boton) return;

    boton.addEventListener("click", function () {
      var nuevo = raiz.getAttribute("data-theme") === "dark" ? "light" : "dark";
      raiz.setAttribute("data-theme", nuevo);
      try {
        localStorage.setItem("tema", nuevo);
      } catch (e) {}
    });
  });
})();
