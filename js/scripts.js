// SECCION BANNER

document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    slides[0].style.display = "block";
  
    function showSlide(n) {
      slides[currentSlide].style.display = "none";
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = "block";
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    setInterval(nextSlide, 5000); // Cambia cada 5 segundos

  })


//     SECCION PRODUCTOS

// document.addEventListener("DOMContentLoaded", function() {

//     let tarjetas = document.querySelectorAll(".tarjetaProducto");
//     let currentTarjeta= 0;
      
//     function showTarjeta(n) {
//       tarjetas[currentTarjeta].style.display = "none";
//       currentTarjeta = (n + tarjetas.length) % tarjetas.length;
//       tarjetas[currentTarjeta].style.display = "block";
//     }
  
//     function nextTarjeta() {
//       showTarjeta(currentTarjeta + 1);
//     }
  
//     setInterval(nextTarjeta, 5000); // Cambia cada 5 segundos
//   })