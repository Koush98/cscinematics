var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


gsap.from("h1",{
    scale:1.2,
    duration:3,
    delay:1,
    color:"blue",
})



function toggleMenu() {
  const menu = document.querySelector('.full');
  menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
}






