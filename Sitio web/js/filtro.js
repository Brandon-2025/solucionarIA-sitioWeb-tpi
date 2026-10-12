document.addEventListener('DOMContentLoaded', () => {

    // Captura de elementos DOM
    const selectCategoria = document.getElementById('select-categoria');
    const chkGratis = document.getElementById('chk-gratis');
    const chkTarjeta = document.getElementById('chk-tarjeta');
    const chkRegistro = document.getElementById('chk-registro');
    const chkPrivacidad = document.getElementById('chk-privacidad');
    const chkDatos = document.getElementById('chk-datos');
    
    const btnAplicar = document.getElementById('btn-aplicar');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const inputBusqueda = document.getElementById('input-busqueda');
    
    const cards = document.querySelectorAll('.card-tool');
    const contadorTexto = document.getElementById('contador-texto');

    // Función principal para filtrar
    function filtrarHerramientas() {
        const catSeleccionada = selectCategoria.value;
        const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
        let visibles = 0;

        cards.forEach(card => {
            const catCard = card.getAttribute('data-categoria');
            const esGratis = card.getAttribute('data-gratis') === 'true';
            const sinTarjeta = card.getAttribute('data-tarjeta') === 'true';
            const sinRegistro = card.getAttribute('data-registro') === 'true';
            const respetaPrivacidad = card.getAttribute('data-privacidad') === 'true';
            const noVendeDatos = card.getAttribute('data-datos') === 'true';
            
            const tituloYDesc = card.innerText.toLowerCase();

            // Lógica de coincidencia
            const coincideCategoria = (catSeleccionada === 'todas' || catCard === catSeleccionada);
            const coincideGratis = !chkGratis.checked || esGratis;
            const coincideTarjeta = !chkTarjeta.checked || sinTarjeta;
            const coincideRegistro = !chkRegistro.checked || sinRegistro;
            const coincidePrivacidad = !chkPrivacidad.checked || respetaPrivacidad;
            const coincideDatos = !chkDatos.checked || noVendeDatos;
            const coincideBusqueda = tituloYDesc.includes(textoBusqueda);

            if (coincideCategoria && coincideGratis && coincideTarjeta && coincideRegistro && coincidePrivacidad && coincideDatos && coincideBusqueda) {
                card.style.display = 'block';
                visibles++;
            } else {
                card.style.display = 'none';
            }
        });

        // Actualizar contador
        contadorTexto.textContent = `${visibles} herramientas encontradas`;
    }

    // Eventos de botones
    btnAplicar.addEventListener('click', filtrarHerramientas);

    btnLimpiar.addEventListener('click', () => {
        selectCategoria.value = 'todas';
        chkGratis.checked = false;
        chkTarjeta.checked = false;
        chkRegistro.checked = false;
        chkPrivacidad.checked = false;
        chkDatos.checked = false;
        inputBusqueda.value = '';
        filtrarHerramientas();
    });

    // Búsqueda en tiempo real
    inputBusqueda.addEventListener('keyup', filtrarHerramientas);

    // Filtrar inicialmente
    filtrarHerramientas();
});