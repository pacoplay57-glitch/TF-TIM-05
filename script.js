function actualizarContador() {
    // Fecha de inicio: 5 de febrero de 2026
    const fechaInicio = new Date('2026-02-05T00:00:00').getTime();
    const ahora = new Date().getTime();
    
    const diferencia = ahora - fechaInicio;

    // Cálculos de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostramos el resultado (añadimos segundos para que se vea el movimiento)
    const contadorElemento = document.getElementById('contador');
    if (contadorElemento) {
        contadorElemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}

// Actualizar cada 1 segundo (1000 milisegundos)
setInterval(actualizarContador, 1000);

// Llamar una vez de inmediato para que no aparezca "Calculando..."
actualizarContador();

// Función para el botón que escapa
function moverBotonNo() {
    const btn = document.getElementById('noButton');
    const container = document.querySelector('.right-page');

    if (btn.style.position !== 'absolute') {
        btn.style.position = 'absolute';
    }

    const maxX = container.clientWidth - btn.clientWidth;
    const maxY = container.clientHeight - btn.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

function confirmar() {
    alert("¡Dijo que sí! ❤️ Ni la muerte nos podrá separar.");
}
