
//Inicio Carrusel//

let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel img');
  const totalSlides = slides.length;

  function showSlide(index) {
    const offset = -index * 300; // Ancho de las imágenes
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  