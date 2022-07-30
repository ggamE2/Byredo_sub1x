
$(function(){

});//function end 

$(document).ready(function(){
  var snb = $('.rnb ul').prev('a');
  var snb_nav = $('.rnb li');

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


$(document).ready(function(){
  var tab = $('.tab li');

  tab.on('click', function(){
    var idx = $(this).index();
    var tab_con = $(this).parents('.tab_group').children('.tab_content').eq(idx);

    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.addClass('on');
    tab_con.siblings('.tab_content').removeClass('on');
  });
      });


