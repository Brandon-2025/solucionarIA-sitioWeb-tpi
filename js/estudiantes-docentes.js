
document.addEventListener('DOMContentLoaded', () => {

    const catalogo = {

        resumen: {
            titulo: 'Resúmenes con IA',
            descripcion: 'Selecciona un prompt para resumir, comprender y estudiar información de manera más eficiente.',
            prompts: [
                {
                    id: 'r1',
                    imagen: '../../imagenes/prompts-estudios/resumen-general.png',
                    titulo: 'Resumen general',
                    texto: 'Actúa como tutor de [asignatura]. Resume el siguiente texto o PDF para un estudiante de [nivel]. Incluye idea central, cinco conceptos clave y una conclusión breve. Usa solo el contenido proporcionado y señala cualquier dato que falte.',
                    vistaTitulo: 'Ejemplo de resumen general',
                    ejemplo: '<p><strong>Tema:</strong> La fotosíntesis</p><p>Las plantas convierten la energía de la luz solar en energía química para producir glucosa.</p><p><strong>Conceptos clave:</strong> luz, agua, CO₂, clorofila y glucosa.</p><p><strong>Conclusión:</strong> este proceso permite que las plantas fabriquen su alimento.</p>'
                },
                {
                    id: 'r2',
                    imagen: '../../imagenes/prompts-estudios/puntos-clave.png',
                    titulo: 'Puntos clave',
                    texto: 'Analiza [texto o documento] y extrae las ocho ideas más importantes. Ordénalas por relevancia, explica cada una en una frase y menciona la sección o página cuando sea posible. No repitas ideas ni agregues información externa.',
                    vistaTitulo: 'Ejemplo de puntos clave',
                    ejemplo: '<p><strong>Tema:</strong> La fotosíntesis</p><ol><li>Necesita energía luminosa.</li><li>Utiliza agua y CO₂.</li><li>Produce glucosa.</li><li>Libera oxígeno.</li></ol><p>El resultado final puede incluir ocho puntos.</p>'
                },
                {
                    id: 'r3',
                    imagen: '../../imagenes/prompts-estudios/mapa-conceptual.png',
                    titulo: 'Mapa conceptual',
                    texto: 'A partir de [tema o texto], construye un mapa conceptual en formato de árbol: concepto central, cuatro ramas principales, subconceptos y palabras de enlace. Explica las relaciones entre ideas y evita agregar conceptos que no aparezcan en el material.',
                    vistaTitulo: 'Ejemplo de mapa conceptual',
                    ejemplo: '<p><strong>Fotosíntesis</strong></p><ul><li>Requiere → luz, agua y CO₂</li><li>Ocurre en → cloroplastos</li><li>Produce → glucosa y oxígeno</li><li>Permite → nutrición de las plantas</li></ul>'
                },
                {
                    id: 'r4',
                    imagen: '../../imagenes/prompts-estudios/explicacion-sencilla.png',
                    titulo: 'Explicación sencilla',
                    texto: 'Explícame [concepto] como si fuera estudiante de [nivel]. Usa palabras sencillas, una analogía cotidiana, dos ejemplos y tres preguntas cortas para comprobar si comprendí. Aclara cualquier simplificación importante.',
                    vistaTitulo: 'Ejemplo de explicación sencilla',
                    ejemplo: '<p><strong>¿Qué es la fotosíntesis?</strong></p><p>Imagina que una planta tiene una pequeña cocina: utiliza luz, agua y aire para preparar su alimento.</p><p><strong>Pregunta:</strong> ¿Qué aporta el Sol?</p><p><strong>Respuesta:</strong> energía.</p>'
                },
                {
                    id: 'r5',
                    imagen: '../../imagenes/prompts-estudios/resumen-por-secciones.png',
                    titulo: 'Resumen por secciones',
                    texto: 'Divide [documento] según sus títulos y subtítulos. Para cada sección, escribe un resumen de tres oraciones, dos términos importantes y una posible pregunta de examen. Conserva el orden original y no inventes apartados.',
                    vistaTitulo: 'Ejemplo de resumen por secciones',
                    ejemplo: '<p><strong>1. Introducción:</strong> definición de fotosíntesis.</p><p><strong>2. Proceso:</strong> absorción de luz y transformación de sustancias.</p><p><strong>3. Importancia:</strong> producción de materia orgánica y oxígeno.</p>'
                },
                {
                    id: 'r6',
                    imagen: '../../imagenes/prompts-estudios/preguntas-repaso.png',
                    titulo: 'Preguntas de repaso',
                    texto: 'Usa únicamente [texto o apuntes] para crear diez preguntas de repaso: cuatro fáciles, cuatro intermedias y dos difíciles. Coloca las respuestas al final e indica de qué parte del material se obtuvo cada respuesta.',
                    vistaTitulo: 'Ejemplo de repaso',
                    ejemplo: '<p><strong>Pregunta 1:</strong> ¿Qué gas absorben las plantas durante la fotosíntesis?</p><p><strong>Pregunta 2:</strong> ¿Por qué es importante la luz?</p><p><strong>Respuestas:</strong> 1) CO₂. 2) Aporta energía al proceso.</p>'
                }
            ]
        },

        examenes: {
            titulo: 'Cuestionarios y Exámenes',
            descripcion: 'Practica con preguntas, simulacros y ejercicios adaptados a tus temas de estudio.',
            prompts: [
                {
                    id: 'e1',
                    imagen: '../../imagenes/prompts-estudios/opcion-multiple.png',
                    titulo: 'Opción múltiple',
                    texto: 'Actúa como docente de [asignatura]. Crea diez preguntas de opción múltiple sobre [tema], con cuatro opciones y una sola correcta. Combina dificultad básica e intermedia. Al final, entrega la clave y una explicación breve de cada respuesta.',
                    vistaTitulo: 'Ejemplo de cuestionario',
                    ejemplo: '<p><strong>Pregunta:</strong> ¿Qué necesitan las plantas para realizar la fotosíntesis?</p><p>A) Luz solar<br>B) Petróleo<br>C) Arena<br>D) Plástico</p><p><strong>Correcta:</strong> A. La luz aporta energía.</p>'
                },
                {
                    id: 'e2',
                    imagen: '../../imagenes/prompts-estudios/simulacro-examen.png',
                    titulo: 'Simulacro de examen',
                    texto: 'Prepara un simulacro de examen de [asignatura] sobre [temas] para [nivel], con duración estimada de [minutos]. Incluye cinco preguntas de selección, cuatro de respuesta corta y un caso práctico. Presenta la solución en una sección separada.',
                    vistaTitulo: 'Ejemplo de simulacro',
                    ejemplo: '<p><strong>Simulacro: Ciencias</strong></p><p>Duración: 40 minutos</p><ul><li>Parte A: 5 preguntas de selección</li><li>Parte B: 4 respuestas cortas</li><li>Parte C: 1 caso práctico</li></ul>'
                },
                {
                    id: 'e3',
                    imagen: '../../imagenes/prompts-estudios/tarjetas-memoria.png',
                    titulo: 'Tarjetas de memoria',
                    texto: 'Convierte [apuntes] en doce tarjetas de estudio. En el frente coloca una pregunta concreta; en el reverso, una respuesta de máximo dos oraciones. Prioriza definiciones, diferencias y conceptos que suelen confundirse.',
                    vistaTitulo: 'Ejemplo de tarjetas',
                    ejemplo: '<p><strong>Tarjeta 1</strong></p><p>Frente: ¿Qué es la clorofila?</p><p>Reverso: Pigmento que absorbe luz para la fotosíntesis.</p><p><strong>Tarjeta 2</strong></p><p>Frente: ¿Qué gas se libera?</p><p>Reverso: Oxígeno.</p>'
                },
                {
                    id: 'e4',
                    imagen: '../../imagenes/prompts-estudios/ejercicios-guiados.png',
                    titulo: 'Ejercicios guiados',
                    texto: 'Sé mi tutor de [matemáticas u otra materia]. Propón tres ejercicios de [tema] de dificultad creciente. Dame una pista por vez y espera mi intento antes de mostrar el siguiente paso. Corrige mis errores sin dar toda la respuesta al inicio.',
                    vistaTitulo: 'Ejemplo de ejercicio guiado',
                    ejemplo: '<p><strong>Ejercicio:</strong> Resuelve 2x + 3 = 11.</p><p><strong>Pista 1:</strong> ¿Qué operación permite eliminar el +3?</p><p><strong>Pista 2:</strong> Después, divide ambos lados entre 2.</p><p><strong>Solución:</strong> x = 4.</p>'
                },
                {
                    id: 'e5',
                    imagen: '../../imagenes/prompts-estudios/revisar-respuestas.png',
                    titulo: 'Revisar respuestas',
                    texto: 'Revisa mi respuesta a [pregunta] usando estos criterios: exactitud, claridad y justificación. Mi respuesta es: [respuesta]. Señala aciertos y errores, explica cómo mejorarla y ofrece una versión corregida sin cambiar mi intención.',
                    vistaTitulo: 'Ejemplo de retroalimentación',
                    ejemplo: '<p><strong>Respuesta:</strong> “Las plantas comen luz”.</p><p><strong>Acierto:</strong> reconoce la importancia de la luz.</p><p><strong>Mejora:</strong> la luz es energía, no alimento.</p><p><strong>Corrección:</strong> las plantas usan luz para producir glucosa.</p>'
                },
                {
                    id: 'e6',
                    imagen: '../../imagenes/prompts-estudios/plan-repaso.png',
                    titulo: 'Plan de repaso',
                    texto: 'Diseña un plan de repaso de [número] días para mi examen de [materia]. Dispongo de [minutos] diarios y debo estudiar [temas]. Prioriza mis temas difíciles, incluye práctica de recuperación y pequeños descansos, y reserva el último día para un simulacro.',
                    vistaTitulo: 'Ejemplo de plan de repaso',
                    ejemplo: '<p><strong>Plan de 4 días</strong></p><ol><li>Conceptos básicos y tarjetas.</li><li>Ejercicios intermedios.</li><li>Preguntas difíciles.</li><li>Simulacro y revisión de errores.</li></ol>'
                }
            ]
        },

        docentes: {
            titulo: 'Planificación Docente',
            descripcion: 'Organiza clases, actividades y evaluaciones con prompts que puedes adaptar a tu grupo.',
            prompts: [
                {
                    id: 'd1',
                    imagen: '../../imagenes/prompts-estudios/plan-clase.png',
                    titulo: 'Plan de clase',
                    texto: 'Actúa como asesor pedagógico. Diseña una clase de [duración] para [grado] sobre [tema]. Incluye objetivo medible, conocimientos previos, inicio, desarrollo, cierre, recursos, tiempos y una evaluación breve. Considera [necesidades del grupo].',
                    vistaTitulo: 'Ejemplo de plan de clase',
                    ejemplo: '<p><strong>Asignatura:</strong> Ciencias</p><p><strong>Tema:</strong> Fotosíntesis</p><ul><li>Inicio: 10 min, lluvia de ideas.</li><li>Desarrollo: 25 min, esquema grupal.</li><li>Cierre: 10 min, preguntas rápidas.</li></ul>'
                },
                {
                    id: 'd2',
                    imagen: '../../imagenes/prompts-estudios/rubrica-evaluacion.png',
                    titulo: 'Rúbrica de evaluación',
                    texto: 'Crea una rúbrica para evaluar [actividad] en [grado]. Usa cuatro criterios observables, cuatro niveles de desempeño y descriptores concretos para cada nivel. Incluye puntaje total de 100 y explica cómo se calcula.',
                    vistaTitulo: 'Ejemplo de rúbrica',
                    ejemplo: '<p><strong>Actividad:</strong> exposición</p><ul><li>Dominio del tema: 30 puntos</li><li>Organización: 25 puntos</li><li>Claridad: 25 puntos</li><li>Uso de recursos: 20 puntos</li></ul><p>Total: 100 puntos.</p>'
                },
                {
                    id: 'd3',
                    imagen: '../../imagenes/prompts-estudios/actividades-participativas.png',
                    titulo: 'Actividades participativas',
                    texto: 'Propón cinco actividades participativas para enseñar [tema] a [grado] con [cantidad] estudiantes. Para cada una, indica objetivo, materiales económicos, instrucciones, duración y una alternativa para estudiantes con distintas necesidades.',
                    vistaTitulo: 'Ejemplo de actividad grupal',
                    ejemplo: '<p><strong>Actividad:</strong> Construye el ciclo.</p><p><strong>Materiales:</strong> tarjetas y marcadores.</p><p><strong>Dinámica:</strong> equipos ordenan las etapas de la fotosíntesis y explican sus conexiones.</p>'
                },
                {
                    id: 'd4',
                    imagen: '../../imagenes/prompts-estudios/evaluacion-diagnostica.png',
                    titulo: 'Evaluación diagnóstica',
                    texto: 'Elabora una evaluación diagnóstica de ocho preguntas sobre [tema] para [grado]. Mezcla selección y respuestas cortas. Incluye respuestas esperadas y una guía para interpretar resultados y decidir qué contenidos reforzar.',
                    vistaTitulo: 'Ejemplo de diagnóstico',
                    ejemplo: '<p><strong>Antes de la clase</strong></p><p>1. ¿Qué necesitan las plantas para crecer?</p><p>2. ¿Qué función cumple la luz?</p><p><strong>Interpretación:</strong> revisar ideas previas antes de explicar el proceso.</p>'
                },
                {
                    id: 'd5',
                    imagen: '../../imagenes/prompts-estudios/adaptacion-niveles.png',
                    titulo: 'Adaptación por niveles',
                    texto: 'Adapta una actividad sobre [tema] para tres niveles: inicial, intermedio y avanzado. Mantén el mismo objetivo general, pero cambia instrucciones, apoyos y dificultad. Sugiere una manera justa de comprobar el aprendizaje en cada nivel.',
                    vistaTitulo: 'Ejemplo de adaptación',
                    ejemplo: '<p><strong>Tema:</strong> Fotosíntesis</p><ul><li>Inicial: ordenar imágenes.</li><li>Intermedio: completar un esquema.</li><li>Avanzado: explicar relaciones entre variables.</li></ul>'
                },
                {
                    id: 'd6',
                    imagen: '../../imagenes/prompts-estudios/guion-presentacion.png',
                    titulo: 'Guion de presentación',
                    texto: 'Crea el guion de seis diapositivas para una clase de [tema] dirigida a [grado]. Por diapositiva indica título, tres ideas esenciales, una sugerencia visual y notas breves para el docente. Termina con una pregunta de reflexión.',
                    vistaTitulo: 'Ejemplo de presentación',
                    ejemplo: '<p><strong>Presentación: Fotosíntesis</strong></p><ol><li>¿Qué es?</li><li>Elementos necesarios</li><li>Proceso</li><li>Productos</li><li>Importancia</li><li>Pregunta final</li></ol>'
                }
            ]
        }
    };

    const tabs = [...document.querySelectorAll('.estudios-tab')];
    const lista = document.getElementById('lista-prompts');
    const tituloModulo = document.getElementById('modulo-titulo');
    const descripcionModulo = document.getElementById('modulo-descripcion');
    const panel = document.getElementById('panel-prompts');
    const tituloVista = document.getElementById('vista-titulo');
    const iconoVista = document.getElementById('vista-icono');
    const resultadoVista = document.getElementById('vista-resultado');
    const mensajeCopia = document.getElementById('mensaje-copia');

    let moduloActual = 'resumen';

    const seleccion = {
        resumen: 'r1',
        examenes: 'e1',
        docentes: 'd1'
    };

    function buscarPrompt(id) {
        return catalogo[moduloActual].prompts.find(
            prompt => prompt.id === id
        );
    }

    function actualizarVista(id) {
        const prompt = buscarPrompt(id);

        if (!prompt) {
            return;
        }

        seleccion[moduloActual] = id;
        tituloVista.textContent = prompt.vistaTitulo;

        const imagenVista = document.createElement('img');
        imagenVista.src = prompt.imagen;
        imagenVista.alt = '';
        imagenVista.width = 44;
        imagenVista.height = 44;
        imagenVista.style.width = '44px';
        imagenVista.style.height = '44px';
        imagenVista.style.objectFit = 'contain';

        iconoVista.replaceChildren(imagenVista);
        resultadoVista.innerHTML = prompt.ejemplo;

        lista.querySelectorAll('.prompt-card').forEach(tarjeta => {
            const activo = tarjeta.dataset.id === id;

            tarjeta.classList.toggle('seleccionada', activo);

            tarjeta.querySelector('.prompt-seleccionar')
                .setAttribute('aria-pressed', String(activo));
        });
    }

    function mostrarModulo(clave) {
        moduloActual = clave;

        const modulo = catalogo[clave];

        tituloModulo.textContent = modulo.titulo;
        descripcionModulo.textContent = modulo.descripcion;

        tabs.forEach(tab => {
            const activo = tab.dataset.modulo === clave;

            tab.classList.toggle('activo', activo);
            tab.setAttribute('aria-selected', String(activo));
            tab.tabIndex = activo ? 0 : -1;

            if (activo) {
                panel.setAttribute('aria-labelledby', tab.id);
            }
        });

        lista.replaceChildren();

        modulo.prompts.forEach(prompt => {
            const tarjeta = document.createElement('article');
            tarjeta.className = 'prompt-card';
            tarjeta.dataset.id = prompt.id;

            const seleccionar = document.createElement('button');
            seleccionar.type = 'button';
            seleccionar.className = 'prompt-seleccionar';
            seleccionar.dataset.seleccionar = prompt.id;
            seleccionar.setAttribute(
                'aria-label',
                `Ver ejemplo de: ${prompt.titulo}`
            );
            seleccionar.setAttribute('aria-pressed', 'false');

            const cabecera = document.createElement('div');
            cabecera.className = 'prompt-cabecera';

            const icono = document.createElement('span');
            icono.className = 'prompt-icono';
            icono.setAttribute('aria-hidden', 'true');

            const imagenIcono = document.createElement('img');
            imagenIcono.src = prompt.imagen;
            imagenIcono.alt = '';
            imagenIcono.width = 26;
            imagenIcono.height = 26;
            imagenIcono.style.width = '26px';
            imagenIcono.style.height = '26px';
            imagenIcono.style.objectFit = 'contain';

            icono.append(imagenIcono);

            const nombre = document.createElement('h3');
            nombre.textContent = prompt.titulo;

            cabecera.append(icono, nombre);

            const texto = document.createElement('p');
            texto.className = 'prompt-texto';
            texto.textContent = prompt.texto;

            seleccionar.append(cabecera, texto);

            const acciones = document.createElement('div');
            acciones.className = 'prompt-acciones';

            const copiar = document.createElement('button');
            copiar.type = 'button';
            copiar.className = 'btn-copiar';
            copiar.dataset.copiar = prompt.id;
            copiar.textContent = 'Copiar';
            copiar.setAttribute(
                'aria-label',
                `Copiar prompt: ${prompt.titulo}`
            );

            acciones.append(copiar);
            tarjeta.append(seleccionar, acciones);
            lista.append(tarjeta);
        });

        actualizarVista(seleccion[clave]);
    }

    async function copiarTexto(texto) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(texto);
            return;
        }

        const area = document.createElement('textarea');
        area.value = texto;
        area.style.position = 'fixed';
        area.style.opacity = '0';

        document.body.append(area);
        area.select();

        const copiado = document.execCommand('copy');
        area.remove();

        if (!copiado) {
            throw new Error('El navegador no permitió copiar.');
        }
    }

    tabs.forEach((tab, indice) => {
        tab.addEventListener('click', () => {
            mostrarModulo(tab.dataset.modulo);
        });

        tab.addEventListener('keydown', evento => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End']
                .includes(evento.key)) {
                return;
            }

            evento.preventDefault();

            let siguiente = indice;

            if (evento.key === 'ArrowRight') {
                siguiente = (indice + 1) % tabs.length;
            }

            if (evento.key === 'ArrowLeft') {
                siguiente = (indice - 1 + tabs.length) % tabs.length;
            }

            if (evento.key === 'Home') {
                siguiente = 0;
            }

            if (evento.key === 'End') {
                siguiente = tabs.length - 1;
            }

            tabs[siguiente].focus();
            mostrarModulo(tabs[siguiente].dataset.modulo);
        });
    });

    lista.addEventListener('click', async evento => {
        const botonSeleccionar = evento.target.closest(
            '[data-seleccionar]'
        );

        if (botonSeleccionar) {
            actualizarVista(botonSeleccionar.dataset.seleccionar);
            return;
        }

        const botonCopiar = evento.target.closest(
            '[data-copiar]'
        );

        if (!botonCopiar) {
            const tarjeta = evento.target.closest('.prompt-card');

            if (tarjeta) {
                actualizarVista(tarjeta.dataset.id);
            }

            return;
        }

        const id = botonCopiar.dataset.copiar;
        const prompt = buscarPrompt(id);

        if (!prompt) {
            return;
        }

        actualizarVista(id);

        try {
            await copiarTexto(prompt.texto);

            botonCopiar.textContent = '✓ ¡Copiado!';
            botonCopiar.classList.add('copiado');

            mensajeCopia.textContent =
                `Se copió el prompt ${prompt.titulo}.`;

            setTimeout(() => {
                if (botonCopiar.isConnected) {
                    botonCopiar.textContent = 'Copiar';
                    botonCopiar.classList.remove('copiado');
                }
            }, 1800);

        } catch (error) {
            console.error('No se pudo copiar:', error);

            mensajeCopia.textContent =
                'No se pudo copiar. Selecciona el texto manualmente.';

            alert(
                'No se pudo copiar automáticamente. ' +
                'Abre la página con Live Server (localhost) ' +
                'o copia el texto manualmente.'
            );
        }
    });

    const inputBusqueda = document.getElementById(
        'input-busqueda'
    );

    const contenedorResultados = document.getElementById(
        'resultados-busqueda'
    );

    if (inputBusqueda && contenedorResultados) {

        function normalizarBusqueda(texto) {
            return texto
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
        }

        const todosLosPrompts = Object.entries(catalogo)
            .flatMap(([clave, modulo]) => {
                return modulo.prompts.map(prompt => {
                    return {
                        ...prompt,
                        modulo: clave,
                        categoria: modulo.titulo
                    };
                });
            });

        function cerrarResultados() {
            contenedorResultados.hidden = true;

            inputBusqueda.setAttribute(
                'aria-expanded',
                'false'
            );
        }

        function mostrarResultados() {
            const busqueda = normalizarBusqueda(
                inputBusqueda.value.trim()
            );

            contenedorResultados.replaceChildren();

            if (!busqueda) {
                cerrarResultados();
                return;
            }

            const palabras = busqueda
                .split(/\s+/)
                .filter(Boolean);

            const encontrados = todosLosPrompts.filter(prompt => {
                const contenido = normalizarBusqueda(
                    `${prompt.titulo} ${prompt.texto} ${prompt.categoria}`
                );

                return palabras.every(palabra =>
                    contenido.includes(palabra)
                );
            });

            contenedorResultados.hidden = false;

            inputBusqueda.setAttribute(
                'aria-expanded',
                'true'
            );

            if (encontrados.length === 0) {
                const aviso = document.createElement('p');
                aviso.className = 'busqueda-vacia';
                aviso.textContent =
                    'No se encontraron prompts. Prueba con otra palabra.';

                contenedorResultados.append(aviso);
                return;
            }

            const contador = document.createElement('p');
            contador.className = 'busqueda-contador';

            contador.textContent =
                `${encontrados.length} ` +
                `${encontrados.length === 1 ? 'resultado' : 'resultados'}`;

            contenedorResultados.append(contador);

            encontrados.forEach(prompt => {
                const resultado = document.createElement('button');
                resultado.type = 'button';
                resultado.className = 'resultado-prompt';

                const nombre = document.createElement('strong');
                nombre.textContent = prompt.titulo;

                const categoria = document.createElement('small');
                categoria.textContent = prompt.categoria;

                resultado.append(nombre, categoria);

                resultado.addEventListener('click', () => {
                    mostrarModulo(prompt.modulo);
                    actualizarVista(prompt.id);

                    inputBusqueda.value = '';
                    cerrarResultados();

                    document.getElementById('panel-prompts')
                        .scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                });

                contenedorResultados.append(resultado);
            });
        }

        inputBusqueda.addEventListener(
            'input',
            mostrarResultados
        );

        inputBusqueda.addEventListener('focus', () => {
            if (inputBusqueda.value.trim()) {
                mostrarResultados();
            }
        });

        inputBusqueda.addEventListener('keydown', evento => {
            if (evento.key === 'Escape') {
                inputBusqueda.value = '';
                cerrarResultados();
            }

            if (evento.key === 'Enter') {
                evento.preventDefault();

                const primerResultado =
                    contenedorResultados.querySelector(
                        '.resultado-prompt'
                    );

                if (primerResultado) {
                    primerResultado.click();
                }
            }
        });

        document.addEventListener('click', evento => {
            if (!evento.target.closest('.search-bar-estudios')) {
                cerrarResultados();
            }
        });
    }

    mostrarModulo('resumen');

});
