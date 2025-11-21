const texto = document.getElementById('texto');
const boton = document.getElementById('recargar');

document.addEventListener('mousemove', (e) => {
    // porcentajes para el gradiente
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    // actualizamos fondo dinámico
    document.body.style.setProperty('--x', `${xPercent}%`);
    document.body.style.setProperty('--y', `${yPercent}%`);

    // radio de la linterna
    const radius = 140;

    // mostrar texto dentro de la linterna
    texto.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;

    // mostrar botón dentro de la linterna
    boton.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;
});

// cuando el ratón sale de la pantalla → ocultar todo
document.addEventListener('mouseleave', () => {
    texto.style.clipPath = 'circle(0px at 50% 50%)';
    boton.style.clipPath = 'circle(0px at 50% 50%)';
});

// CLICK → apagar linterna y ocultar texto/botón
document.addEventListener("click", () => {
    // fondo sólido
    document.body.style.background = "#d41010ff";

    // ocultamos texto y botón
    texto.style.clipPath = "circle(0px at 50% 50%)";
    boton.style.clipPath = "circle(0px at 50% 50%)";
});

// BOTÓN DE RECARGA
boton.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que se active el click que apaga la linterna
    location.reload();
});

let ultimaParticula = 0; // para no crear demasiadas

document.addEventListener('mousemove', (e) => {
    // porcentajes para el gradiente
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    // actualizamos fondo dinámico
    document.body.style.setProperty('--x', `${xPercent}%`);
    document.body.style.setProperty('--y', `${yPercent}%`);

    // radio de la linterna
    const radius = 140;

    // mostrar texto dentro de la linterna
    texto.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;

    // mostrar botón dentro de la linterna
    boton.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;

    // ======= PARTÍCULAS DEL CURSOR =======
    const ahora = performance.now();
    if (ahora - ultimaParticula > 20) { // cada 20ms aprox
        crearParticula(e.clientX, e.clientY);
        ultimaParticula = ahora;
    }
});

// cuando el ratón sale de la pantalla → ocultar todo
document.addEventListener('mouseleave', () => {
    texto.style.clipPath = 'circle(0px at 50% 50%)';
    boton.style.clipPath = 'circle(0px at 50% 50%)';
});

// CLICK → apagar linterna y ocultar texto/botón
document.addEventListener("click", () => {
    // fondo sólido
    document.body.style.background = "#d41010ff";

    // ocultamos texto y botón
    texto.style.clipPath = "circle(0px at 50% 50%)";
    boton.style.clipPath = "circle(0px at 50% 50%)";
});

// BOTÓN DE RECARGA
boton.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que se active el click que apaga la linterna
    location.reload();
});

// =====================
// FUNCIÓN PARA PARTÍCULAS
// =====================
function crearParticula(x, y) {
    const p = document.createElement('span');
    p.className = 'particle';

    // tamaño aleatorio
    const size = 4 + Math.random() * 6;
    p.style.width = size + 'px';
    p.style.height = size + 'px';

    // posición inicial (en el cursor)
    p.style.left = x + 'px';
    p.style.top = y + 'px';

    // dirección y distancia aleatorias
    const angulo = Math.random() * Math.PI * 2;
    const distancia = 20 + Math.random() * 40;
    const dx = Math.cos(angulo) * distancia;
    const dy = Math.sin(angulo) * distancia;

    p.style.setProperty('--dx', dx + 'px');
    p.style.setProperty('--dy', dy + 'px');

    document.body.appendChild(p);

    // eliminar la partícula cuando acabe la animación
    setTimeout(() => {
        p.remove();
    }, 700);
}

