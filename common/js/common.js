$(function(){
//men
$(".gnb>li").on("mouseover focus", function(){
 $(this).find(".sub").slideDown(300);     
});
    
$(".gnb>li").on("mouseleave blur", function(){
 $(this).find(".sub").slideUp(300);     
});
    
//gnb_back
 $(".gnb>li").on("mouseover",function(){
$(this).find(".subm").stop().slideDown();
$(".gnb_back").stop().slideDown(); 
$(".header").css("background","rgba(255,255,255,0.6)");      
});  
$(".gnb>li").on("mouseleave",function(){
$(this).find(".subm").stop().slideUp();
$(".gnb_back").stop().slideUp();
$(".header").css("background","transparent");    
}); 
    
    
//left_menu
$(".ic_menu").on("click",function(){
$(".left_menu").stop().animate({marginLeft:"300px"},400);    
});
$(".close").on("click",function(){
$(".left_menu").stop().animate({marginLeft:"0px"},400);
}) ; 
$(".gnb3>li").on("mouseover focus",function(){
 $(this).find(".subm").stop().slideDown();
});
$(".gnb3>li").on("mouseleave blur",function(){
 $(this).find(".subm").stop().slideUp();
});    
         

//left_menu .gnb3    
    
//user
$(".user").on("click",function(){
$(".user_box").slideToggle(300); 
});

    
$(".search").on("click",function(){
$(".search_box").slideToggle(300);     
});     
$(".close_btn").on("click",function(){
$(".search_box").slideToggle(300);     
});   
    
});   //function end

    
$(document).ready(function(){
  var snb = $('.snb ul').prev('a');
  var snb_nav = $('.snb li');

  snb.addClass('dep');
  snb_nav.each(function(){
      if($(this).hasClass('on')){
        $(this).children('ul').show();
      }
  });

  snb.on('click', function(){
      $(this).parent().addClass('on').children('ul').stop().slideDown(400);
      $(this).parent().siblings('li').removeClass('on').children('ul').stop().slideUp(200);
      return false;
  });
});
