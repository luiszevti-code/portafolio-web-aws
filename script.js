// Año actual en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Resalta en el menú la sección que se está viendo
const links = document.querySelectorAll('.nav a[href^="#"]:not(.brand)');
const sections = [...links]
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)
      );
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}
