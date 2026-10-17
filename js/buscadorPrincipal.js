document.addEventListener('DOMContentLoaded', () => {

    const inputBusqueda = document.getElementById('input-busqueda');
    const btnBusqueda = document.getElementById('btn-busqueda');
    const filasTabla = document.querySelectorAll('#tabla-cuerpo tr');
    const seccionHerramientas = document.getElementById('herramientas');

    // Función para filtrar filas según el texto introducido
    function ejecutarBusqueda() {
        const texto = inputBusqueda.value.toLowerCase().trim();

        filasTabla.forEach(fila => {
            const contenidoFila = fila.innerText.toLowerCase();
            if (contenidoFila.includes(texto)) {
                fila.style.display = ''; // Muestra la fila
            } else {
                fila.style.display = 'none'; // Oculta la fila que no coincide
            }
        });
    }

    // Filtrar en tiempo real conforme el usuario escribe
    inputBusqueda.addEventListener('keyup', ejecutarBusqueda);

    // Al hacer clic en el botón Buscar, filtra y desplaza hacia la tabla
    btnBusqueda.addEventListener('click', () => {
        ejecutarBusqueda();
        seccionHerramientas.scrollIntoView({ behavior: 'smooth' });
    });

});