// Smooth scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Função para ativar o link de navegação atual
function handleNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Inicializar no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
  handleNavigation();
});

// Adicionar classe 'active' baseado no scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      navLinks.forEach(link => link.classList.remove('active'));
      
      const activeLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// Animação de fade-in para cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Função para toggle (mantida para compatibilidade)
function toggle(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('hidden');
  }
}

// Função para mostrar contato (mantida para compatibilidade)
function showContact() {
  const email = document.getElementById('email');
  if (email) {
    email.classList.toggle('hidden');
  }
}