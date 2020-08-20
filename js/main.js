
$(function(){
	'use strict';


  $(document).ready(function(){
	
    $(".loading-overly .spinner").fadeOut(2000,function(){
      $('body').css("overflow","auto");
      $(this).parent().fadeOut(1000,function(){
        $(this).remove();
      });
    });
  });
$(function () {
    $('[data-toggle="popover"]').popover()
  })

  window.scrollBy(0,1);
  var x=$(window).scrollTop();
  $(window).scroll(function(){
  if($(this).scrollTop()>200)
  {
    
    $(".collapse").css("padding",0);
    $(".header-social").css("padding",0);
    $("nav").css("background-color","#fff");
    $("nav a").css("color","#333","!important");
    $(".nav-img").attr("src","img/logo-dark.png");
    
    $(".navbar").css("border","none");
    var nav=document.getElementById("nav");
    nav.classList.remove("navbar-dark");
    nav.classList.add("navbar-light");

    
  }
  else
  {
    $(".collapse").css("padding",10,0);
    $(".header-social").css("padding",10,0);
    $("nav").css("background-color","transparent","!important");
    $("nav a").css("color","#fff ","!important");
    $(".nav-img").attr("src","img/logo-light.png");
    
    
    $(".navbar").css("border-bottom","1px solid gray");
    var nav=document.getElementById("nav");
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");

    


  }
});
});