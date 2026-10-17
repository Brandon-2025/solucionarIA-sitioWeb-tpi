document.addEventListener('DOMContentLoaded', () => {

    // Plantillas de prompt de cada atajo (se rellenan con lo que escribe el usuario)
    const plantillas = {
        recetas: (d) =>
`Actúa como un cocinero práctico de casa en El Salvador.
Tengo estos ingredientes en la refri y la alacena: ${d.ingredientes || '[escribe aquí tus ingredientes]'}.
Somos ${d.personas || '[número]'} personas y tengo ${d.tiempo} para cocinar.

Dame 3 recetas que pueda hacer SOLO con esos ingredientes (puedo usar sal, aceite y especias básicas).
Para cada receta indica:
1. Nombre del platillo.
2. Ingredientes con cantidades para ${d.personas || '[número]'} personas.
3. Pasos numerados y cortos.
4. Tiempo total.
Si me falta algo importante, dime con qué lo puedo sustituir.`,

        compras: (d) =>
`Actúa como un asesor de compras del hogar que ayuda a ahorrar.
Necesito una lista del súper para ${d.personas || '[número]'} personas que nos dure ${d.dias}.
Mi presupuesto máximo es de $${d.presupuesto || '[monto]'} (dólares).${d.preferencias ? '\nToma en cuenta esto: ' + d.preferencias + '.' : ''}

Haz lo siguiente:
1. Organiza la lista por pasillo (granos y básicos, frutas y verduras, carnes y lácteos, limpieza).
2. Pon la cantidad y un precio aproximado por producto.
3. Suma el total y verifica que no pase de $${d.presupuesto || '[monto]'}.
4. Sugiere 3 cambios por marcas o productos más baratos.
5. Dame un menú sencillo para esos días usando solo lo de la lista.`,

        presupuesto: (d) =>
`Actúa como un asesor de finanzas personales, explicando en lenguaje sencillo.
Recibo $${d.ingreso || '[monto]'} cada quincena.
Mis gastos fijos de la quincena son: ${d.gastos || '[escribe tus gastos, por ejemplo: alquiler $150, luz $20, transporte $25]'}.
Quiero ahorrar $${d.ahorro || '[monto]'} por quincena.

Haz lo siguiente:
1. Arma una tabla con: categoría, monto asignado y porcentaje del ingreso.
2. Separa necesidades, gustos y ahorro (puedes guiarte por la regla 50/30/20 si aplica).
3. Dime cuánto me queda para gastos variables por día.
4. Si mi meta de ahorro no alcanza, propón dónde recortar.
5. Dame 3 consejos prácticos para no salirme del presupuesto.`
    };

    // Generador de prompt (páginas de atajo)
    const form = document.getElementById('form-atajo');
    const salida = document.getElementById('prompt-generado');

    if (form && salida) {
        const plantilla = plantillas[form.dataset.atajo];

        function generarPrompt() {
            const datos = {};
            new FormData(form).forEach((valor, clave) => {
                datos[clave] = valor.toString().trim();
            });
            salida.textContent = plantilla(datos);
        }

        form.addEventListener('input', generarPrompt);
        form.addEventListener('submit', (e) => e.preventDefault());
        generarPrompt();
    }

    // Botón "Copiar"
    const btnCopiar = document.getElementById('btn-copiar');
    const avisoCopiado = document.getElementById('aviso-copiado');

    if (btnCopiar && salida) {
        btnCopiar.addEventListener('click', async () => {
            const texto = salida.textContent;
            try {
                await navigator.clipboard.writeText(texto);
            } catch (error) {
                // Respaldo para navegadores sin acceso al portapapeles
                const temporal = document.createElement('textarea');
                temporal.value = texto;
                document.body.appendChild(temporal);
                temporal.select();
                document.execCommand('copy');
                temporal.remove();
            }
            avisoCopiado.textContent = '¡Copiado! Ahora pégalo en tu IA favorita.';
            setTimeout(() => { avisoCopiado.textContent = ''; }, 3000);
        });
    }

    // Botones para compartir con la dirección de la página actual
    const urlActual = encodeURIComponent(window.location.href);
    const tituloActual = encodeURIComponent(document.title);
    const enlacesCompartir = {
        'compartir-facebook': `https://www.facebook.com/sharer/sharer.php?u=${urlActual}`,
        'compartir-x': `https://twitter.com/intent/tweet?url=${urlActual}&text=${tituloActual}`,
        'compartir-whatsapp': `https://wa.me/?text=${tituloActual}%20${urlActual}`
    };

    Object.entries(enlacesCompartir).forEach(([id, enlace]) => {
        const boton = document.getElementById(id);
        if (boton) boton.href = enlace;
    });

    // Buscador del encabezado: filtra las tarjetas en la portada;
    // en las páginas de atajo, Enter lleva a la portada con la búsqueda
    const inputBusqueda = document.getElementById('input-busqueda');
    const tarjetas = document.querySelectorAll('.card-atajo');

    if (inputBusqueda) {
        function filtrarTarjetas() {
            const texto = inputBusqueda.value.toLowerCase().trim();
            tarjetas.forEach(tarjeta => {
                const coincide = tarjeta.innerText.toLowerCase().includes(texto);
                tarjeta.style.display = coincide ? '' : 'none';
            });
        }

        if (tarjetas.length > 0) {
            const busquedaInicial = new URLSearchParams(window.location.search).get('q');
            if (busquedaInicial) {
                inputBusqueda.value = busquedaInicial;
                filtrarTarjetas();
            }
            inputBusqueda.addEventListener('keyup', filtrarTarjetas);
        } else {
            inputBusqueda.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    window.location.href = 'hogar-finanzas.html?q=' + encodeURIComponent(inputBusqueda.value);
                }
            });
        }
    }

});
