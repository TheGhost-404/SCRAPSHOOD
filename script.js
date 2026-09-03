document.addEventListener('DOMContentLoaded', () => {
  const supplyEl = document.querySelector('[data-target="1000000000"]');

  if (supplyEl) {
    const target = 1000000000;
    let current = 0;
    const duration = 1600;
    const stepTime = 20;
    const step = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        supplyEl.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        supplyEl.textContent = Math.floor(current).toLocaleString();
      }
    }, stepTime);
  }

  const revealSections = document.querySelectorAll('.story, .gallery, .tokenomics, .roadmap, .feature-band');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealSections.forEach((section) => revealObserver.observe(section));

  document.querySelectorAll('.gallery-card img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.03)';
      img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});
