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

menuToggle.addEventListener('click', function (e) {
  e.preventDefault(); // Mencegah default action (mencegah link kembali ke home)
  menu.classList.toggle('open');
  menuToggle.classList.toggle('active');

  // Ubah ikon menjadi X ketika menu dibuka dan kembali ke hamburger saat ditutup
  if (menuToggle.classList.contains('active')) {
    menuIcon.innerHTML = `
      <path d="M3 3l18 18M3 21l18-18"/>
    `;
  } else {
    menuIcon.innerHTML = `
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
    `;
  }
});




