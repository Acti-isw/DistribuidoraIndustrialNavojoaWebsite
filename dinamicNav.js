    $(window).scroll(function(){
      if($(this).scrollTop()>0){
          $('nav').addClass('nav2')
          $('#logo').addClass('logo2')
          $('.nav__barrita').addClass('nav__barrita2')
          $('.nav__logo__p').addClass('nav__logo__p2')
          $('.nav__logo').addClass('nav__logo2')
      }else{
        $('nav').removeClass('nav2')
        $('#logo').removeClass('logo2')
        $('.nav__barrita').removeClass('nav__barrita2')
        $('.nav__logo__p').removeClass('nav__logo__p2')
        $('.nav__logo').removeClass('nav__logo2')
      }
    })

    let toggle = false;

    const abtn = $('.abtn')
    abtn.toArray().forEach(element => {
      element.addEventListener("click",toggleMenu);
    });
    const btn = document.getElementById("btn");
    btn.addEventListener("click",toggleMenu)

    function toggleMenu(){
      toggle = !toggle;
      if(toggle){
        $('#btn').addClass('menuMobile__btn2')
        $('.menuMobile__lista__item').addClass('menuMobile__lista__item__active')

      }else{
        $('#btn').removeClass('menuMobile__btn2')
        $('.menuMobile__lista__item').removeClass('menuMobile__lista__item__active')
      }
    }