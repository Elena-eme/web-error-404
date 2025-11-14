document.addEventListener("mousemove", (e) => {

    // Gradiente del fondo siguiendo el cursor
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;

    document.body.style.setProperty("--x", x + "%");
    document.body.style.setProperty("--y", y + "%");

    // Linterna en el centro del degradado, NO en el cursor
    const texto = document.getElementById("texto");

    texto.style.clipPath = `circle(40px at ${e.clientX}px ${e.clientY}px)`;
});
