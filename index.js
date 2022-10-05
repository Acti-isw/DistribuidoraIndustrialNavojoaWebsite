var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    slidesPerView: "auto",
    // mousewheel: true,
    loop: true,
    coverflowEffect: {
      rotate: 10,
      stretch: -50,
      depth: 200,
    //   modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  