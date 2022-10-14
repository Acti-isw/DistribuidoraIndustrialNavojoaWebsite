$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop()>0){
          $('nav').addClass('nav2')
      }else{
        $('nav').removeClass('nav2')
      }
    })
  
  })