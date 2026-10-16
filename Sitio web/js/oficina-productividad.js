
document.addEventListener('DOMContentLoaded', () => {

    const catalogo = {

        curriculum: {

            titulo: 'Currículum y Empleo con IA',

            descripcion: 'Mejora tu presentación profesional con información real: currículum, carta de presentación y entrevistas.',

            prompts: [
                {
                    id: 'c1',
                    imagen: '../imagenes/prompts-oficina/cv-optimizar.png',
                    titulo: 'Optimizar mi currículum',
                    texto: 'Actúa como especialista en selección de personal y optimizador de currículum vitae con IA. Revisa este CV: [pega tu currículum sin datos sensibles]. Quiero postularme a [puesto]. Mejora claridad, estructura y verbos de acción, destaca habilidades pertinentes y propón una versión compatible con sistemas ATS. No inventes empleos, estudios, fechas ni resultados. Señala qué datos debo confirmar.',
                    vistaTitulo: 'Ejemplo de CV mejorado',
                    ejemplo: '<p><strong>Perfil profesional</strong></p><p>Estudiante de informática con experiencia académica en bases de datos y desarrollo web.</p><p><strong>Proyecto destacado:</strong> creación de una aplicación de inventario con interfaz y consultas SQL.</p><p><em>Solo se usan datos que el candidato confirme.</em></p>'
                },

                {
                    id: 'c2',
                    imagen: '../imagenes/prompts-oficina/cv-sin-experiencia.png',
                    titulo: 'CV sin experiencia',
                    texto: 'Crea una plantilla de prompt para mejorar mi currículum vitae sin experiencia laboral formal. Estudio [carrera], he desarrollado [proyectos académicos], conozco [herramientas] y busco [tipo de empleo]. Propón secciones de perfil, formación, proyectos, habilidades y actividades relevantes; redacta ejemplos claros y marca la información que debo completar. No inventes prácticas ni empleos.',
                    vistaTitulo: 'Ejemplo de CV sin experiencia',
                    ejemplo: '<p><strong>Currículum de primer empleo</strong></p><ul><li>Perfil y objetivo profesional</li><li>Formación académica</li><li>Proyectos realizados</li><li>Herramientas y habilidades</li><li>Idiomas y cursos verificables</li></ul>'
                },

                {
                    id: 'c3',
                    imagen: '../imagenes/prompts-oficina/carta-presentacion.png',
                    titulo: 'Carta de presentación',
                    texto: 'Ayúdame a redactar una carta de presentación laboral con ChatGPT para la vacante [puesto] en [empresa]. Estos son mis estudios y habilidades reales: [datos]. Explica por qué me interesa el puesto, conecta dos habilidades con sus requisitos y cierra solicitando una entrevista. Usa tono profesional y máximo 250 palabras. No inventes experiencia ni logros.',
                    vistaTitulo: 'Ejemplo de carta laboral',
                    ejemplo: '<p><strong>Asunto:</strong> Postulación a Asistente Administrativo</p><p>Estimado equipo de selección:</p><p>Me interesa la vacante publicada. Mi formación y mis proyectos académicos me han permitido desarrollar organización y manejo de herramientas digitales.</p><p>Agradezco su consideración y quedo disponible para una entrevista.</p>'
                },

                {
                    id: 'c4',
                    imagen: '../imagenes/prompts-oficina/adaptar-cv.png',
                    titulo: 'Adaptar CV a una vacante',
                    texto: 'Compara mi currículum [texto del CV] con esta oferta laboral [descripción de la vacante]. Identifica requisitos que sí cumplo, habilidades transferibles y aspectos que debo fortalecer. Sugiere mejoras específicas para mi CV y palabras relevantes del anuncio que pueda incorporar de forma natural, solo cuando sean verdaderas. No inventes competencias ni certificados.',
                    vistaTitulo: 'Ejemplo de adaptación',
                    ejemplo: '<p><strong>Vacante:</strong> Auxiliar de oficina</p><ul><li><strong>Coincide:</strong> manejo de hojas de cálculo.</li><li><strong>Destacar:</strong> organización de archivos.</li><li><strong>Por desarrollar:</strong> herramienta específica del puesto.</li></ul><p>Reescribir el perfil con habilidades verificables.</p>'
                },

                {
                    id: 'c5',
                    imagen: '../imagenes/prompts-oficina/perfil-profesional.png',
                    titulo: 'Perfil profesional atractivo',
                    texto: 'Redacta tres versiones de mi perfil profesional para currículum: breve, formal y orientada a resultados. Mis datos reales son [estudios], [habilidades], [proyectos o experiencia] y mi objetivo es [puesto]. Cada versión debe tener entre 40 y 65 palabras, ser concreta y evitar adjetivos vacíos o logros no demostrables.',
                    vistaTitulo: 'Ejemplo de perfil profesional',
                    ejemplo: '<p><strong>Versión breve:</strong></p><p>Estudiante de sistemas informáticos con conocimientos en programación, bases de datos y documentación técnica. Busco aportar organización y aprendizaje continuo a un equipo de soporte.</p>'
                },

                {
                    id: 'c6',
                    imagen: '../imagenes/prompts-oficina/entrevista-laboral.png',
                    titulo: 'Preparar entrevista laboral',
                    texto: 'Actúa como entrevistador para el puesto de [vacante]. Formula ocho preguntas habituales y tres situacionales. Hazlas una por una, espera mis respuestas y dame retroalimentación específica sobre claridad, ejemplos y pertinencia. Ayúdame a estructurar mis experiencias reales con el método STAR sin inventar resultados.',
                    vistaTitulo: 'Ejemplo de entrevista',
                    ejemplo: '<p><strong>Entrevistador:</strong> Cuéntame sobre un proyecto en equipo.</p><p><strong>Guía STAR:</strong></p><ol><li>Situación</li><li>Tarea</li><li>Acción personal</li><li>Resultado comprobable</li></ol>'
                }
            ]
        },

        correos: {

            titulo: 'Correos Laborales y Emergencias',

            descripcion: 'Plantillas de correos profesionales para solicitudes, imprevistos, seguimientos y comunicación clara.',

            prompts: [
                {
                    id: 'm1',
                    imagen: '../imagenes/prompts-oficina/aumento-salarial.png',
                    titulo: 'Solicitar aumento salarial',
                    texto: 'Actúa como asesor de comunicación profesional. Necesito saber cómo pedir un aumento de sueldo por correo con una plantilla de IA. Mi puesto es [puesto], llevo [tiempo] y mis aportes verificables son [ejemplos]. Redacta un correo respetuoso para solicitar una reunión sobre revisión salarial, sin exigir una cifra ni afirmar logros que no haya proporcionado. Incluye asunto y cierre.',
                    vistaTitulo: 'Ejemplo de solicitud de aumento',
                    ejemplo: '<p><strong>Asunto:</strong> Solicitud de reunión para revisión salarial</p><p>Buen día, [nombre]:</p><p>Me gustaría solicitar un espacio para conversar sobre mi desarrollo y compensación, considerando las responsabilidades que he asumido y los resultados documentados.</p><p>Gracias por su tiempo.</p>'
                },

                {
                    id: 'm2',
                    imagen: '../imagenes/prompts-oficina/correo-emergencia.png',
                    titulo: 'Correo por emergencia',
                    texto: 'Crea tres plantillas de correo de emergencias laborales para [situación: imprevisto familiar, problema de salud o incidente de transporte]. Necesito avisar a [destinatario] que [impacto en horario o entrega]. Redacta una versión muy breve, una formal y una con plan de continuidad. Protege mi privacidad: no incluyas detalles médicos o familiares innecesarios.',
                    vistaTitulo: 'Ejemplo de correo urgente',
                    ejemplo: '<p><strong>Asunto:</strong> Aviso de imprevisto y ajuste de horario</p><p>Buen día:</p><p>Por una situación personal imprevista no podré incorporarme a la hora habitual. Informaré cualquier cambio y coordinaré la atención de pendientes prioritarios.</p><p>Gracias por su comprensión.</p>'
                },

                {
                    id: 'm3',
                    imagen: '../imagenes/prompts-oficina/permiso-laboral.png',
                    titulo: 'Solicitar permiso laboral',
                    texto: 'Redacta un correo para solicitar permiso laboral el día [fecha] durante [horario] por [motivo general, sin detalles privados]. Mi destinatario es [jefatura o RR. HH.]. Mantén un tono cortés, explica cómo organizaré mis pendientes y solicita confirmación. Evita dar por aprobado el permiso.',
                    vistaTitulo: 'Ejemplo de solicitud de permiso',
                    ejemplo: '<p><strong>Asunto:</strong> Solicitud de permiso para [fecha]</p><p>Estimada [persona]:</p><p>Solicito autorización para ausentarme durante [horario] por un asunto personal. Dejaré organizadas las tareas prioritarias.</p><p>Quedo atento a su confirmación.</p>'
                },

                {
                    id: 'm4',
                    imagen: '../imagenes/prompts-oficina/retraso-entrega.png',
                    titulo: 'Avisar retraso de entrega',
                    texto: 'Ayúdame a redactar un correo profesional para informar que la entrega de [tarea o proyecto] tendrá un retraso. La causa comprobable es [motivo], el avance actual es [estado] y la nueva fecha propuesta es [fecha]. Explica el impacto y dos acciones para reducirlo, sin culpar a otras personas ni prometer plazos imposibles.',
                    vistaTitulo: 'Ejemplo de aviso de retraso',
                    ejemplo: '<p><strong>Asunto:</strong> Actualización sobre entrega de informe</p><p>Informo que el informe está al 80 %. Propongo entregar la versión revisada el viernes.</p><p>Mientras tanto, enviaré los apartados terminados para su revisión.</p>'
                },

                {
                    id: 'm5',
                    imagen: '../imagenes/prompts-oficina/seguimiento-solicitud.png',
                    titulo: 'Seguimiento de una solicitud',
                    texto: 'Escribe un correo breve de seguimiento sobre [solicitud o trámite] enviado el [fecha] a [destinatario]. Pregunta amablemente por su estado, recuerda el contexto en una oración y ofrece facilitar información adicional. Prepara dos tonos: cordial y formal. No hagas afirmaciones sobre plazos que no conozcas.',
                    vistaTitulo: 'Ejemplo de seguimiento',
                    ejemplo: '<p><strong>Asunto:</strong> Seguimiento a solicitud enviada</p><p>Buen día:</p><p>Le escribo para consultar si hay novedades respecto a la solicitud remitida el lunes. Quedo atento y con gusto puedo ampliar la información.</p><p>Saludos cordiales.</p>'
                },

                {
                    id: 'm6',
                    imagen: '../imagenes/prompts-oficina/resolver-malentendido.png',
                    titulo: 'Resolver un malentendido',
                    texto: 'Redacta un correo diplomático para aclarar un malentendido laboral sobre [situación]. Los hechos que puedo verificar son [hechos]. Expresa mi perspectiva sin acusaciones, reconoce posibles confusiones y propone una conversación o siguiente paso concreto. Incluye asunto, saludo, cuerpo y despedida.',
                    vistaTitulo: 'Ejemplo de aclaración',
                    ejemplo: '<p><strong>Asunto:</strong> Aclaración sobre asignación de tareas</p><p>Hola, [nombre]:</p><p>Quisiera confirmar que entendí correctamente los acuerdos del proyecto. Según mis notas, mi responsabilidad era preparar el borrador inicial.</p><p>¿Podemos revisar juntos el alcance?</p>'
                }
            ]
        },

        reuniones: {

            titulo: 'Reuniones y Botiquín Digital',

            descripcion: 'Organiza notas, crea minutas y encuentra apoyo práctico para imprevistos cotidianos de oficina.',

            prompts: [
                {
                    id: 'r1',
                    imagen: '../imagenes/prompts-oficina/notas-reunion.png',
                    titulo: 'Ordenar notas de reunión',
                    texto: 'Actúa como asistente de productividad. Necesito saber cómo resumir notas desordenadas de una reunión en puntos clave. Estas son mis notas: [pega las notas sin datos confidenciales]. Organízalas en temas tratados, decisiones confirmadas, dudas abiertas y próximos pasos. Mantén fielmente los hechos; no inventes asistentes, acuerdos, responsables ni fechas.',
                    vistaTitulo: 'Ejemplo de notas ordenadas',
                    ejemplo: '<p><strong>Reunión: seguimiento semanal</strong></p><ul><li><strong>Tema:</strong> avance del sitio web.</li><li><strong>Decisión:</strong> revisar las pantallas.</li><li><strong>Pendiente:</strong> confirmar fecha de publicación.</li></ul>'
                },

                {
                    id: 'r2',
                    imagen: '../imagenes/prompts-oficina/minuta-reunion.png',
                    titulo: 'Minuta automática',
                    texto: 'Genera una plantilla para minuta de reunión de trabajo automática usando estas notas: [contenido]. Organiza: fecha [si está disponible], objetivo, asistentes confirmados, puntos discutidos, acuerdos, responsables, fechas límite y pendientes. Usa una tabla para las tareas. Cuando falte un dato escribe "Por confirmar"; nunca lo inventes.',
                    vistaTitulo: 'Ejemplo de minuta de reunión',
                    ejemplo: '<p><strong>MINUTA DE REUNIÓN</strong></p><p>Objetivo: revisión de avances</p><p><strong>Acuerdos:</strong> validar diseño final.</p><p><strong>Responsable:</strong> Por confirmar</p><p><strong>Fecha límite:</strong> Por confirmar</p>'
                },

                {
                    id: 'r3',
                    imagen: '../imagenes/prompts-oficina/tareas-responsables.png',
                    titulo: 'Tareas y responsables',
                    texto: 'A partir de esta conversación o acta de reunión [texto], extrae todas las tareas acordadas. Preséntalas en una tabla con tarea, responsable, fecha límite, prioridad y estado. No asignes nombres o fechas no mencionados: usa "Sin definir". Añade tres preguntas de seguimiento para cerrar vacíos de información.',
                    vistaTitulo: 'Ejemplo de plan de acciones',
                    ejemplo: '<p><strong>Plan de acción</strong></p><ul><li>Revisar diseño — Ana — jueves</li><li>Validar contenido — Sin definir</li><li>Publicar cambios — fecha por confirmar</li></ul><p><strong>Pregunta:</strong> ¿Quién validará el contenido?</p>'
                },

                {
                    id: 'r4',
                    imagen: '../imagenes/prompts-oficina/correo-postreunion.png',
                    titulo: 'Correo después de reunión',
                    texto: 'Escribe un correo de seguimiento posterior a una reunión de [tema]. Estas fueron las decisiones y tareas confirmadas: [acuerdos]. Resume en cinco puntos lo tratado, enumera los compromisos con responsables y fechas cuando existan y solicita correcciones si alguien detecta una diferencia. No agregues acuerdos no mencionados.',
                    vistaTitulo: 'Ejemplo de correo posterior',
                    ejemplo: '<p><strong>Asunto:</strong> Acuerdos de reunión del equipo</p><p>Gracias por participar. Compartimos los puntos tratados:</p><ol><li>Revisión de entregables.</li><li>Validación de contenido.</li><li>Próxima reunión por confirmar.</li></ol>'
                },

                {
                    id: 'r5',
                    imagen: '../imagenes/prompts-oficina/botiquin-digital.png',
                    titulo: 'Botiquín digital de oficina',
                    texto: 'Actúa como mi botiquín digital de oficina para resolver un imprevisto cotidiano. El problema es [describe la situación sin información confidencial], tengo [tiempo disponible] y cuento con [herramientas]. Dame un diagnóstico inicial no técnico, tres acciones inmediatas ordenadas por prioridad, un mensaje breve para informar al equipo y un plan alternativo si no se resuelve. Indica cuándo debo pedir ayuda humana.',
                    vistaTitulo: 'Ejemplo de botiquín digital',
                    ejemplo: '<p><strong>Problema:</strong> no se abre el archivo de presentación.</p><ol><li>Comprobar nombre y formato.</li><li>Probar copia de respaldo.</li><li>Solicitar una versión PDF.</li></ol><p><strong>Mensaje:</strong> “Estoy verificando un problema con el archivo; compartiré una alternativa en breve”.</p>'
                },

                {
                    id: 'r6',
                    imagen: '../imagenes/prompts-oficina/auxilio-laboral.png',
                    titulo: 'Auxilio laboral gratis',
                    texto: 'Actúa como orientador general de comunicación y organización laboral. Tengo esta dificultad en el trabajo: [situación]. Ayúdame a separar hechos de opiniones, documentar lo ocurrido, identificar opciones de comunicación respetuosa y preparar preguntas para recursos humanos o una fuente oficial. Si puede involucrar derechos laborales, pregunta mi país y aclara que no sustituyes asesoría legal profesional; no cites leyes que no puedas verificar.',
                    vistaTitulo: 'Ejemplo de auxilio laboral',
                    ejemplo: '<p><strong>Situación:</strong> instrucciones contradictorias.</p><ol><li>Registrar fechas y mensajes.</li><li>Solicitar aclaración por escrito.</li><li>Consultar a RR. HH. si continúa.</li></ol><p><em>Orientación general; no sustituye asesoría legal.</em></p>'
                }
            ]
        }
    };

    const tabs = [...document.querySelectorAll('.oficina-tab')];

    const lista = document.getElementById('lista-prompts');

    const tituloModulo = document.getElementById('modulo-titulo');

    const descripcionModulo = document.getElementById('modulo-descripcion');

    const panel = document.getElementById('panel-prompts');

    const tituloVista = document.getElementById('vista-titulo');

    const iconoVista = document.getElementById('vista-icono');

    const resultadoVista = document.getElementById('vista-resultado');

    const mensajeCopia = document.getElementById('mensaje-copia');

    let moduloActual = 'curriculum';

    const seleccion = {
        curriculum: 'c1',
        correos: 'm1',
        reuniones: 'r1'
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

        if (!catalogo[clave]) {
            return;
        }

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

        const botonCopiar = evento.target.closest(
            'button[data-copiar]'
        );

        const botonSeleccionar = evento.target.closest(
            'button[data-seleccionar]'
        );

        const tarjeta = evento.target.closest('.prompt-card');

        if (!tarjeta) {
            return;
        }

        const id = tarjeta.dataset.id;

        if (!botonCopiar && !botonSeleccionar &&
            !tarjeta.contains(evento.target)) {
            return;
        }

        actualizarVista(id);

        if (!botonCopiar) {
            return;
        }

        const prompt = buscarPrompt(id);

        if (!prompt) {
            return;
        }

        try {

            await copiarTexto(prompt.texto);

            mensajeCopia.textContent =
                `Prompt copiado: ${prompt.titulo}`;

            botonCopiar.classList.add('copiado');

            botonCopiar.textContent = '✓ ¡Copiado!';

            setTimeout(() => {

                if (botonCopiar.isConnected) {

                    botonCopiar.classList.remove('copiado');

                    botonCopiar.textContent = 'Copiar';

                }

            }, 1800);

        } catch (error) {

            console.error('No se pudo copiar:', error);

            mensajeCopia.textContent =
                'No se pudo copiar automáticamente.';

            alert(
                'No se pudo copiar. Prueba con Live Server ' +
                '(localhost) o selecciona el texto manualmente.'
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

                    panel.scrollIntoView({
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

            if (!evento.target.closest('.search-bar-oficina')) {
                cerrarResultados();
            }

        });

    }

    mostrarModulo('curriculum');

});
