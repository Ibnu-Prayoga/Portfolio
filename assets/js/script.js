const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navbar.contains(e.target)) {
    menuToggle.classList.remove('active');
    navbar.classList.remove('active');
  }
});

const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navbar.classList.remove('active');
  });
});
