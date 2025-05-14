// Video Play/Pause Overlay
const video = document.getElementById('promoVideo');
const overlay = document.getElementById('playOverlay');
if (video && overlay) {
  // Set video to have a black background initially
  video.style.backgroundColor = '#000';
  
  function togglePlay() {
    if (video.paused) {
      video.play();
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 300);
    } else {
      video.pause();
      overlay.style.display = 'flex';
      setTimeout(() => {
        overlay.style.opacity = '1';
      }, 10);
    }
    
    // For visual feedback - toggle a class
    overlay.classList.toggle('clicked');
    
    // Remove the class after animation time
    setTimeout(() => {
      overlay.classList.remove('clicked');
    }, 300);
  }
  
  video.addEventListener('click', togglePlay);
  overlay.addEventListener('click', togglePlay);
  
  video.addEventListener('pause', () => {
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 10);
  });
  
  video.addEventListener('play', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  });
  
  // Show overlay initially
  overlay.style.display = 'flex';
  overlay.style.opacity = '1';
}

// Modal for Contact Form
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const contactForm = document.getElementById('contactForm');
if (contactForm && modal && closeBtn) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic HTML5 validation is already present
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
  // Close modal on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Testimonial Carousel
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');
let currentSlide = 0;
let carouselInterval;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
}

if (slides.length && dots.length) {
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      stopCarousel();
      startCarousel();
    });
  });
  showSlide(0);
  startCarousel();
}
