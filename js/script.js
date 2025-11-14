const texto = document.getElementById('texto');

document.addEventListener('mousemove', (e) => {
  // porcentajes para el gradiente (coincidirán con el clip-path porque #texto ocupa 100% del viewport)
  const xPercent = (e.clientX / window.innerWidth) * 100;
  const yPercent = (e.clientY / window.innerHeight) * 100;

  // actualizamos variables CSS del body (ahí está el gradiente)
  document.body.style.setProperty('--x', `${xPercent}%`);
  document.body.style.setProperty('--y', `${yPercent}%`);

  // radio de la linterna (puedes usar px, vw, etc). Ajusta según quieras más/menos foco.
  const radius = 140; // px

  // usamos las mismas coordenadas en % para el clip-path del texto (porque #texto ocupa el viewport)
  texto.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;
});

// opcional: cuando el ratón salga de la ventana, ocultar la linterna
document.addEventListener('mouseleave', () => {
  texto.style.clipPath = 'circle(0px at 50% 50%)';
});

//  AL HACER CLICK: se apaga la linterna
document.addEventListener("click", () => {
    linternaActiva = false;

    // Desaparece el degradado (queda fondo sólido oscuro)
    document.body.style.background = "#d41010ff";

    // Ocultar el texto por completo
    texto.style.clipPath = "circle(0px at 50% 50%)";
    });