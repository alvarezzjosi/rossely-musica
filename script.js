const boton = document.getElementById("botonMusica");
const imagen = document.getElementById("imagenBoton");
const musica = document.getElementById("musica");

let reproduciendo = false;


// Volumen inicial
musica.volume = 0.8;


boton.addEventListener("click", async () => {

    if (!reproduciendo) {

        try {

            // Reproducir canción
            await musica.play();

            // Cambiar diseño
            imagen.src = "assets/pause.webp";
            imagen.alt = "Pausar canción";

            // Accesibilidad
            boton.setAttribute(
                "aria-label",
                "Pausar música"
            );

            boton.setAttribute(
                "aria-pressed",
                "true"
            );

            reproduciendo = true;

        } catch (error) {

            console.error(
                "No se pudo reproducir la música:",
                error
            );

        }

    } else {

        // Pausar canción
        musica.pause();

        // Volver al botón original
        imagen.src = "assets/play.webp";
        imagen.alt = "Dale Play";

        boton.setAttribute(
            "aria-label",
            "Reproducir música"
        );

        boton.setAttribute(
            "aria-pressed",
            "false"
        );

        reproduciendo = false;
    }

});


// Si termina la canción,
// vuelve automáticamente a Dale Play

musica.addEventListener("ended", () => {

    imagen.src = "assets/play.webp";
    imagen.alt = "Dale Play";

    boton.setAttribute(
        "aria-label",
        "Reproducir música"
    );

    boton.setAttribute(
        "aria-pressed",
        "false"
    );

    reproduciendo = false;
});