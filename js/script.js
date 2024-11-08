const navLinks = document.querySelectorAll('.link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Menghapus kelas 'active' dari semua link
    navLinks.forEach(item => item.classList.remove('active'));
    
    // Menambahkan kelas 'active' pada link yang diklik
    this.classList.add('active');
  });
});
