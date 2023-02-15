// Custom JS *
function copiarTexto() {
    // Seleccionar el elemento h4 con id "text-to-copy"
    const texto = document.querySelector('.text-to-copy').innerText;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
      .then(() => {
        // Mostrar el mensaje de éxito
        const mensaje = document.querySelector('.mensaje-copiado');
        mensaje.style.display = 'block';
        setTimeout(() => {
          mensaje.style.display = 'none';
        }, 1300);
      })
      .catch(error => {
        // Mostrar un mensaje de error
        console.error('No se pudo copiar el texto: ', error);
      });
  }
function copiarTexto2() {
    // Seleccionar el elemento h4 con id "text-to-copy"
    const texto = document.querySelector('.text-to-copy2').innerText;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
      .then(() => {
        // Mostrar el mensaje de éxito
        const mensaje = document.querySelector('.mensaje-copiado2');
        mensaje.style.display = 'block';
        setTimeout(() => {
          mensaje.style.display = 'none';
        }, 1300);
      })
      .catch(error => {
        // Mostrar un mensaje de error
        console.error('No se pudo copiar el texto: ', error);
      });
}
// ### Scrollspy powered by ChatGPT ###
// Scrollspy function
function scrollSpy() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY + 80;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Smooth Scrolling function Powered by ChatGPT
function smoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      // -Control de posicion del scroll
      const targetPosition = document.querySelector(targetId).offsetTop - 47;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
       // -Control de velocidad del scroll
      const duration = 700;
      let start = null;

      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
    });
  });
}
// Easing function
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}
// Initialize functions
scrollSpy();
smoothScroll();

