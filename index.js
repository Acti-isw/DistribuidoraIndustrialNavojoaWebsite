var swiper = new Swiper(".MainmySwiper", {
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
  


// class Person {
//   /**
//    * 
//    * @param {number} age 
//    * @param {string} name 
//    */
//   constructor(age, name) {
//     this.age = age;
//     this.name = name;
//   }
// }

// class Soldier extends Person {

// }

// /**
//  * Este metodo sirve como prueba
//  * @param {Person[]} a 
//  * @param {Soldier} b 
//  */
// const myMethod = (a, b) => {
//   const arrayOfAges = a.map(v => v.age);
  

// }

// const asd = document.getElementById('nav');

// /**
//  * 
//  * @param {HTMLInputElement} param1 
//  */
// function a(param1) {
//   param1.
// }

// const c = myMethod()