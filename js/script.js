const texto = document.getElementById('texto');
const boton = document.getElementById('recargar');

/* Detecta si es “desktop real” (ratón + hover) */
const desktopMode = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (desktopMode) {
    // =====================
    // MODO DESKTOP (igual que antes)
    // =====================

    document.addEventListener('mousemove', (e) => {
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        document.body.style.setProperty('--x', `${xPercent}%`);
        document.body.style.setProperty('--y', `${yPercent}%`);

        const radius = 140;
        texto.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;
        boton.style.clipPath = `circle(${radius}px at ${xPercent}% ${yPercent}%)`;

        // Partículas
        const ahora = performance.now();
        if (ahora - ultimaParticula > 20) {
            crearParticula(e.clientX, e.clientY);
            ultimaParticula = ahora;
        }
    });

    document.addEventListener('mouseleave', () => {
        texto.style.clipPath = 'circle(0px at 50% 50%)';
        boton.style.clipPath = 'circle(0px at 50% 50%)';
    });

    document.addEventListener("click", () => {
        document.body.style.background = "#d41010ff";
        texto.style.clipPath = "circle(0px at 50% 50%)";
        boton.style.clipPath = "circle(0px at 50% 50%)";
    });

    let ultimaParticula = 0;

    function crearParticula(x, y) {
        const p = document.createElement('span');
        p.className = 'particle';

        const size = 4 + Math.random() * 6;
        p.style.width = size + 'px';
        p.style.height = size + 'px';

        p.style.left = x + 'px';
        p.style.top = y + 'px';

        const angulo = Math.random() * Math.PI * 2;
        const distancia = 20 + Math.random() * 40;
        const dx = Math.cos(angulo) * distancia;
        const dy = Math.sin(angulo) * distancia;

        p.style.setProperty('--dx', dx + 'px');
        p.style.setProperty('--dy', dy + 'px');

        document.body.appendChild(p);

        setTimeout(() => p.remove(), 700);
    }
}

/* Botón recargar funciona SIEMPRE (desktop + móvil/tablet) */
boton.addEventListener("click", (e) => {
    e.stopPropagation();
    location.reload();
});
