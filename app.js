const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  'main > section, .theme-grid article, .model-grid article, .experiment-grid article, .next-grid article, .method-grid article, .notes-list article, .product-cards article'
);

if (!prefersReducedMotion && revealTargets.length && 'IntersectionObserver' in window) {
  revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => observer.observe(el));
}

// Products page: category tab filtering
const productTabs = document.querySelector('.product-tabs');
const productCards = document.querySelectorAll('.product-cards > article');

productTabs?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;

  productTabs.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');

  const filter = button.dataset.filter;
  productCards.forEach((card) => {
    const matches = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !matches);
  });
});
