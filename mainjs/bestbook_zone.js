// JavaScript Document
$(function(){
 
   /* 베스트북 슬라이더4 */
  var mySlider4=$(".c1_m ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn4").on("click",function(){
  mySlider4.goToPrevSlide();
  return false;
  });

  $(".next_btn4").on("click",function(){
  mySlider4.goToNextSlide();
  return false;
  }); 
  

  
 });    //function end
 
 
 
 
 
 
 