document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next"); 
  
    let currentIndex = 0;
  
    function showSlide(n) {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transform = `translateX(-${n * 100}%)`; /* Añadido para mover las diapositivas */
        }
      }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    showSlide(currentIndex);
    setInterval(nextSlide, 5000);
});
