window.addEventListener('load', () => {
  document.querySelectorAll('.animate-onload').forEach(el => {
    el.classList.add('active');
  });
});
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    preloader.classList.add('slide-up');

    preloader.addEventListener('transitionend', () => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    });
  }, 2000); 
});