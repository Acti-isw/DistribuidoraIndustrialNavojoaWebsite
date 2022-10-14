    $(window).scroll(function(){
      if($(this).scrollTop()>0){
          $('nav').addClass('nav2')
          $('#logo').addClass('logo2')
      }else{
        $('nav').removeClass('nav2')
      }
    })