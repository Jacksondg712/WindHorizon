
  anime({
  targets: '#wind',
  strokeDashoffset: [anime.setDashoffset, 0],  // Dibujado progresivo
  duration: 1500,
  easing: 'easeOutSine',
  loop: true,
  direction: 'alternate'         // Ida y vuelta
});

function wrapLetters() {
            const title = document.getElementById('animatedTitle');
            const text = title.textContent;
            let newHTML = '';
            
            for (let i = 0; i < text.length; i++) {
                if (text[i] === ' ') {
                    newHTML += '<span>&nbsp;</span>';
                } else {
                    newHTML += '<span>' + text[i] + '</span>';
                }
            }
            
            title.innerHTML = newHTML;
        }
        
        // Ejecutar cuando se carga la página
        window.onload = wrapLetters;

 const windSVG = `<svg viewBox="0 -1 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>wind</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-468.000000, -832.000000)" fill="#000000"> <path d="M490,846 L469,846 C468.447,846 468,846.447 468,847 C468,847.553 468.447,848 469,848 L488.833,848 C491.687,848 494,849.791 494,852 C494,854.209 492.291,856 488,856 L488,858 L490,858 C493.313,858 496,855.313 496,852 C496,848.687 493.313,846 490,846 L490,846 Z M482.002,850 L474,850 C473.447,850 473,850.448 473,851 C473,851.553 473.447,852 474,852 L482,852 C483.104,852 484,852.896 484,854 C484,855.104 483.104,856 482,856 L482,858 C484.209,858 486,856.209 486,854 C486,851.792 484.21,850.002 482.002,850 L482.002,850 Z M477,840 L489,840 C489.553,840 490,839.553 490,839 C490,838.448 489.553,838 489,838 L477,838 C476.447,838 476,838.448 476,839 C476,839.553 476.447,840 477,840 L477,840 Z M472,844 L490,844 C493.313,844 496,841.313 496,838 C496,834.687 493.313,832 490,832 L490,834 C492.822,834.531 494,835.791 494,838 C494,840.209 491.687,842 488.833,842 L472,842 C471.447,842 471,842.448 471,843 C471,843.553 471.447,844 472,844 L472,844 Z" id="wind" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`;

    // Colores para los iconos de viento
    const windColors = ['#3498db', '#2980b9', '#1abc9c', '#16a085', '#2c3e50'];
    
    // Tamaños para los iconos
    const windSizes = ['small', 'medium', 'large'];
    
    // Función para generar un número aleatorio entre min y max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Función para crear iconos de viento
    function createWindIcons() {
        // Crear iconos para cada fila
        for (let i = 1; i <= 5; i++) {
            const windRow = document.querySelector(`.wind-row-${i}`);
            const iconsCount = getRandomInt(3, 6); // Número aleatorio de iconos por fila
            
            for (let j = 0; j < iconsCount; j++) {
                // Crear un elemento div para contener el SVG
                const windIcon = document.createElement('div');
                windIcon.className = `wind-icon ${windSizes[getRandomInt(0, 2)]}`;
                
                // Insertar el SVG y aplicar estilos
                windIcon.innerHTML = windSVG;
                  
                  // Establecer color aleatorio para el SVG
                  const color = windColors[getRandomInt(0, windColors.length - 1)];
                  const svgPath = windIcon.querySelector('path');
                  if (svgPath) {
                      svgPath.setAttribute('fill', color);
                  }
                  
                  // Aplicar retraso aleatorio a cada icono para que no aparezcan todos a la vez
                  const delay = getRandomInt(0, 8);
                  windIcon.style.animationDelay = `${delay}s`;
                  
                  // Añadir a la fila
                  windRow.appendChild(windIcon);
              }
          }
      }


      // Iniciar la animación cuando la página se carga
      window.onload = createWindIcons;

const btnAbrirModal = document.getElementById('abrirModal');
const btnAbrirModal1 = document.getElementById('abrirModal1');
const btnAbrirModal2 = document.getElementById('abrirModal2');
const btnAbrirModal3 = document.getElementById('abrirModal3');


    const modalOverlay = document.getElementById('modalOverlay');
    const modalOverlay1 = document.getElementById('modalOverlay1');
    const modalOverlay2 = document.getElementById('modalOverlay2');
    const modalOverlay3 = document.getElementById('modalOverlay3');

    const btnCerrarModal = document.getElementById('cerrarModal');
    const btnCerrarModal1 = document.getElementById('cerrarModal1');
    const btnCerrarModal2 = document.getElementById('cerrarModal2');
    const btnCerrarModal3 = document.getElementById('cerrarModal3');

    const btnCerrarX = document.getElementById('cerrarX');
    const btnCerrarX1 = document.getElementById('cerrarX1');
    const btnCerrarX2 = document.getElementById('cerrarX2');
    const btnCerrarX3 = document.getElementById('cerrarX3');

    
    // Función para abrir el modal
    function abrirModal() {
      modalOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
    }
    
    // Función para cerrar el modal
    function cerrarModal() {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura scroll en el fondo
    }
    
    // Eventos para abrir y cerrar el modal
    btnAbrirModal.addEventListener('click', abrirModal);
    btnCerrarModal.addEventListener('click', cerrarModal);
    btnCerrarX.addEventListener('click', cerrarModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        cerrarModal();
      }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
        cerrarModal();
      }
    });



     // Función para abrir el modal
    function abrirModal1() {
      modalOverlay1.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
    }
    
    // Función para cerrar el modal
    function cerrarModal1() {
      modalOverlay1.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura scroll en el fondo
    }
    
    // Eventos para abrir y cerrar el modal
    btnAbrirModal1.addEventListener('click', abrirModal1);
    btnCerrarModal1.addEventListener('click', cerrarModal1);
    btnCerrarX1.addEventListener('click', cerrarModal1);
    
    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay1.addEventListener('click', function(e) {
      if (e.target === modalOverlay1) {
        cerrarModal1();
      }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay1.style.display === 'flex') {
        cerrarModal1();
      }
    });



     // Función para abrir el modal
    function abrirModal2() {
      modalOverlay2.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
    }
    
    // Función para cerrar el modal
    function cerrarModal2() {
      modalOverlay2.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura scroll en el fondo
    }
    
    // Eventos para abrir y cerrar el modal
    btnAbrirModal2.addEventListener('click', abrirModal2);
    btnCerrarModal2.addEventListener('click', cerrarModal2);
    btnCerrarX2.addEventListener('click', cerrarModal2);
    
    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay2.addEventListener('click', function(e) {
      if (e.target === modalOverlay2) {
        cerrarModal2();
      }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay2.style.display === 'flex') {
        cerrarModal2();
      }
    });


     // Función para abrir el modal
    function abrirModal3() {
      modalOverlay3.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
    }
    
    // Función para cerrar el modal
    function cerrarModal3() {
      modalOverlay3.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura scroll en el fondo
    }
    
    // Eventos para abrir y cerrar el modal
    btnAbrirModal3.addEventListener('click', abrirModal3);
    btnCerrarModal3.addEventListener('click', cerrarModal3);
    btnCerrarX3.addEventListener('click', cerrarModal3);
    
    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay3.addEventListener('click', function(e) {
      if (e.target === modalOverlay3) {
        cerrarModal3();
      }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay3.style.display === 'flex') {
        cerrarModal3();
      }
    });

