// PSBP Law Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Animated counters
  const counters = document.querySelectorAll('.stat-number');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target.replace(/[^0-9]/g, ''));
    const suffix = el.dataset.target.replace(/[0-9]/g, '');
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      }
    }, 20);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));

  // Simple testimonial auto-scroll hint (optional manual for now)
  const track = document.querySelector('.testimonial-track');
  if (track) {
    // Users can scroll; add subtle snap
  }
});
