var swiper = new Swiper(".mySwiperTornillo", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 2500,
      // delay: 100000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });