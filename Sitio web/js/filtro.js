document.addEventListener('DOMContentLoaded', () => {

    // Referencias a elementos
    const selectCategoria = document.getElementById('select-categoria');
    
    const chkGratis100 = document.getElementById('chk-gratis-100');
    const chkFreemium = document.getElementById('chk-freemium');
    const chkSinRegistro = document.getElementById('chk-sin-registro');
    const chkRegistro1Clic = document.getElementById('chk-registro-1clic');
    const chkSinTarjeta = document.getElementById('chk-sin-tarjeta');
    const chkPrivacidadAlta = document.getElementById('chk-privacidad-alta');

    const btnAplicar = document.getElementById('btn-aplicar');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const inputBusqueda = document.getElementById('input-busqueda');

    const cards = document.querySelectorAll('.card-tool');
    const contadorTexto = document.getElementById('contador-texto');

    function filtrarHerramientas() {
        const catSeleccionada = selectCategoria.value;
        const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
        let visibles = 0;

        cards.forEach(card => {
            const catCard = card.getAttribute('data-categoria');
            const gratuidadCard = card.getAttribute('data-gratuidad'); // '100gratis' o 'freemium'
            const accesoCard = card.getAttribute('data-acceso');       // 'sinregistro' o 'registro1clic'
            const sinTarjeta = card.getAttribute('data-sintarjeta') === 'true';
            const privacidadAlta = card.getAttribute('data-privacidad') === 'alta';

            const textoCard = card.innerText.toLowerCase();

            // Lógica de coincidencia por filtros
            const coincideCategoria = (catSeleccionada === 'todas' || catCard === catSeleccionada);
            
            // Filtro Nivel de Gratuidad (si se seleccionan ambos o ninguno, no descarta)
            let coincideGratuidad = true;
            if (chkGratis100.checked && !chkFreemium.checked) {
                coincideGratuidad = (gratuidadCard === '100gratis');
            } else if (!chkGratis100.checked && chkFreemium.checked) {
                coincideGratuidad = (gratuidadCard === 'freemium');
            }

            // Filtro Acceso Inmediato
            let coincideAcceso = true;
            if (chkSinRegistro.checked && !chkRegistro1Clic.checked) {
                coincideAcceso = (accesoCard === 'sinregistro');
            } else if (!chkSinRegistro.checked && chkRegistro1Clic.checked) {
                coincideAcceso = (accesoCard === 'registro1clic');
            }

            // Filtros de Garantía
            const coincideTarjeta = !chkSinTarjeta.checked || sinTarjeta;
            const coincidePrivacidad = !chkPrivacidadAlta.checked || privacidadAlta;

            // Buscador por texto
            const coincideTexto = textoCard.includes(textoBusqueda);

            if (coincideCategoria && coincideGratuidad && coincideAcceso && coincideTarjeta && coincidePrivacidad && coincideTexto) {
                card.style.display = 'block';
                visibles++;
            } else {
                card.style.display = 'none';
            }
        });

        // Actualizar contador
        contadorTexto.textContent = `${visibles} herramientas encontradas`;
    }

    // Eventos
    btnAplicar.addEventListener('click', filtrarHerramientas);

    btnLimpiar.addEventListener('click', () => {
        selectCategoria.value = 'todas';
        chkGratis100.checked = false;
        chkFreemium.checked = false;
        chkSinRegistro.checked = false;
        chkRegistro1Clic.checked = false;
        chkSinTarjeta.checked = false;
        chkPrivacidadAlta.checked = false;
        inputBusqueda.value = '';
        filtrarHerramientas();
    });

    inputBusqueda.addEventListener('keyup', filtrarHerramientas);

    // Filtrar al cargar
    filtrarHerramientas();
});