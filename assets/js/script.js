// Mobile Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Navegação Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Fechar menu mobile se estiver aberto
    if (nav.classList.contains('nav-active')) {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    }
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Destacar link ativo no menu
function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const scroll = window.pageYOffset;
    
    if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
      const currentId = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Scroll Animation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
    nav.style.backdropFilter = 'blur(10px)';
  } else {
    nav.style.background = 'var(--white)';
    nav.style.backdropFilter = 'none';
  }
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = contactForm.querySelector('button');
    button.textContent = 'Enviando...';
    button.style.backgroundColor = 'var(--secondary-color)';
    
    setTimeout(() => {
      button.textContent = 'Mensagem Enviada!';
      button.style.backgroundColor = '#27ae60';
      contactForm.reset();
      
      setTimeout(() => {
        button.textContent = 'Enviar Mensagem';
        button.style.backgroundColor = 'var(--primary-color)';
      }, 3000);
    }, 1500);
  });
}

// Product Card Animation
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Carrossel da Galeria
function initGallery() {
  const gallerySlider = document.querySelector('.gallery-slider');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const prevButton = document.querySelector('.gallery-prev');
  const nextButton = document.querySelector('.gallery-next');
  const dotsContainer = document.querySelector('.gallery-dots');

  if (!gallerySlider || !galleryCards.length) return;

  let currentPosition = 0;
  const cardWidth = galleryCards[0].offsetWidth + 16; // width + gap
  const totalCards = galleryCards.length;
  let cardsPerView = 4; // Aumentamos para 4 cards por visualização

  // Ajustar cards por view baseado no tamanho da tela
  if (window.innerWidth < 768) {
    cardsPerView = 1;
  } else if (window.innerWidth < 1024) {
    cardsPerView = 2;
  } else if (window.innerWidth < 1440) {
    cardsPerView = 3;
  }

  const maxPosition = Math.max(0, (totalCards - cardsPerView) * cardWidth);

  // Criar dots de navegação
  dotsContainer.innerHTML = '';
  for (let i = 0; i < Math.ceil(totalCards / cardsPerView); i++) {
    const dot = document.createElement('div');
    dot.classList.add('gallery-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(i * cardsPerView * cardWidth);
      animateDot(dot);
    });
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.gallery-dot');

  function animateDot(dot) {
    dot.style.transform = 'scale(1.3)';
    dot.style.backgroundColor = 'var(--primary-color)';
    
    setTimeout(() => {
      dot.style.transform = 'scale(1)';
    }, 300);
  }

  function updateGallery() {
    gallerySlider.style.transform = `translateX(-${currentPosition}px)`;
    
    // Atualizar dots com animação
    const currentIndex = Math.floor(currentPosition / (cardsPerView * cardWidth));
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
      if (index === currentIndex) {
        animateDot(dot);
      }
    });
    
    // Atualizar estado dos botões com fade
    prevButton.style.opacity = currentPosition === 0 ? '0.5' : '1';
    nextButton.style.opacity = currentPosition >= maxPosition ? '0.5' : '1';

    // Animar cards
    galleryCards.forEach((card, index) => {
      const cardPosition = index * cardWidth;
      const isVisible = cardPosition >= currentPosition && 
                       cardPosition < currentPosition + (cardWidth * cardsPerView);
      
      if (isVisible) {
        card.style.transform = 'scale(1)';
        card.style.opacity = '1';
      } else {
        card.style.transform = 'scale(0.9)';
        card.style.opacity = '0.5';
      }
    });
  }

  function nextSlide() {
    if (currentPosition < maxPosition) {
      currentPosition = Math.min(currentPosition + cardWidth * cardsPerView, maxPosition);
      updateGallery();
    } else {
      // Voltar ao início com animação suave
      currentPosition = 0;
      gallerySlider.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      updateGallery();
      setTimeout(() => {
        gallerySlider.style.transition = 'transform 0.5s ease';
      }, 800);
    }
  }

  function prevSlide() {
    if (currentPosition > 0) {
      currentPosition = Math.max(currentPosition - cardWidth * cardsPerView, 0);
      updateGallery();
    } else {
      // Ir para o final com animação suave
      currentPosition = maxPosition;
      gallerySlider.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      updateGallery();
      setTimeout(() => {
        gallerySlider.style.transition = 'transform 0.5s ease';
      }, 800);
    }
  }

  function goToSlide(position) {
    currentPosition = Math.max(0, Math.min(position, maxPosition));
    gallerySlider.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    updateGallery();
    setTimeout(() => {
      gallerySlider.style.transition = 'transform 0.5s ease';
    }, 800);
  }

  // Event Listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Touch events para mobile
  let touchStartX = 0;
  let touchEndX = 0;

  gallerySlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
  });

  gallerySlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // Auto slide com intervalo variável
  let autoSlideInterval;

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  // Iniciar auto slide
  startAutoSlide();

  // Pausar auto slide no hover
  gallerySlider.addEventListener('mouseenter', stopAutoSlide);
  gallerySlider.addEventListener('mouseleave', startAutoSlide);

  // Atualizar em caso de redimensionamento
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      initGallery();
    }, 250);
  });

  // Configuração inicial
  updateGallery();
  gallerySlider.style.transition = 'transform 0.5s ease';
}

// Inicializar galeria quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initGallery);

// Reinicializar galeria quando todas as imagens estiverem carregadas
window.addEventListener('load', initGallery);

// Animações de Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Efeito de Digitação
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
};

// Aplicar efeito de digitação no título principal
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  typeWriter(heroTitle, text, 150);
}

// Animações de Hover nos Cards
const cards = document.querySelectorAll('.product-card, .gallery-card, .team-member');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.02)';
    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = 'var(--shadow)';
  });
});

// Efeito de Parallax Aprimorado
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  parallaxElements.forEach(element => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    element.style.transform = `translateY(${rate}px)`;
  });
});

// Hero Background Slideshow
const heroBackgrounds = [
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1920&auto=format&fit=crop', // Pão artesanal rústico
  'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1920&auto=format&fit=crop', // Variedade de pães
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1920&auto=format&fit=crop', // Pão francês
  'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1920&auto=format&fit=crop', // Pães na vitrine
  'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1920&auto=format&fit=crop'  // Pão integral
];

function initHeroSlideshow() {
  const hero = document.querySelector('.hero');
  let currentBgIndex = 0;

  // Pré-carregar imagens
  heroBackgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Função para trocar o background com fade
  function changeBackground() {
    hero.style.opacity = '0';
    
    setTimeout(() => {
      hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackgrounds[currentBgIndex]})`;
      hero.style.opacity = '1';
      
      currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
    }, 1000);
  }

  // Configurar o background inicial
  hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackgrounds[0]})`;
  hero.style.transition = 'opacity 1s ease-in-out';
  hero.style.backgroundSize = 'cover';
  hero.style.backgroundPosition = 'center';

  // Iniciar slideshow
  setInterval(changeBackground, 5000);
}

// Iniciar slideshow quando a página carregar
document.addEventListener('DOMContentLoaded', initHeroSlideshow);

// Unificar todos os handlers de scroll
function handleScroll() {
  const scrollY = window.pageYOffset;
  
  // Navbar background
  const nav = document.querySelector('.navbar');
  nav.style.background = scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'var(--white)';
  nav.style.backdropFilter = scrollY > 50 ? 'blur(10px)' : 'none';
  
  // Parallax effect
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = -(scrollY * 0.5) + 'px';
  }
  
  // Reveal elements
  document.querySelectorAll('.reveal').forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 100) {
      element.classList.add('active');
    }
  });
  
  // Update active menu link
  updateActiveLink();
}

// Unificar inicialização
function init() {
  // Event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', debounce(initGallery, 250));
  
  // Initialize components
  initGallery();
  initMobileMenu();
  
  // Loading screen
  const loading = document.querySelector('.loading-content');
  if (loading) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => loading.remove(), 500);
      }, 1000);
    });
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', init); 