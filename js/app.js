

(function () {
  'use strict';

  // Detectamos los elementos que van apareciendo conforme hacemos scroll por la página.
  const elementosParaAparecer = document.querySelectorAll('.desvanecer-entrada');

  if ('IntersectionObserver' in window) {
    const observadorDeSecciones = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        
        const elementoActual = entrada.target;
        elementoActual.classList.add('ya-visible');
        observador.unobserve(elementoActual);
        setTimeout(() => {
          elementoActual.classList.remove('desvanecer-entrada', 'ya-visible');
        }, 1200);
      });
    }, { 
      threshold: 0.12, 
      rootMargin: '0px 0px -40px 0px' 
    });

    elementosParaAparecer.forEach(el => observadorDeSecciones.observe(el));
  } else {

    elementosParaAparecer.forEach(el => el.classList.remove('desvanecer-entrada'));
  }

})();