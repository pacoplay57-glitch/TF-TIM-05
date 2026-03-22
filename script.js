/* --- Reemplaza todo tu script.js por este --- */

function reproducirMusica() {
    const musica = document.getElementById('musica');
    // Intentar reproducir solo si no está sonando ya
    if (musica.paused) {
        musica.play().catch(error => console.log("Esperando interacción..."));
        musica.volume = 0.5; // Volumen al 50% para que sea romántico
    }
}

function confirmar() {
    reproducirMusica();
    alert("¡TI AMOOOOOOOOOOOOOO 🖤🖤🫀🫀");
}

function moverBotonNo() {
    // Al intentar tocar el "No", también se activa la música
    reproducirMusica();

    const btn = document.getElementById('noButton');
    const container = document.querySelector('.right-page');

    if (btn.style.position !== 'absolute') {
        btn.style.position = 'absolute';
        btn.style.zIndex = '100'; 
    }

    // Calcula límites para que no se salga de la página derecha
    const maxX = container.clientWidth - btn.clientWidth;
    const maxY = container.clientHeight - btn.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}