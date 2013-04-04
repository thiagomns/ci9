$(function(){
   $(".menu a").mouseover(function(){
      var menu = $(this).parent().children('.subMenu');
      var submenu =  $(this).parent().parent();
       
      if(menu.length > 0 && menu.is(':hidden')){
         $(".menu a").removeClass('ativo');
         $(this).addClass('ativo');
         $('.subMenu').slideUp();
         menu.slideDown();
      }
      if(!submenu.hasClass('subMenu') && menu.length == 0){
         $(".menu a").removeClass('ativo');
         $(this).addClass('ativo');
 
         $('.submenu').slideUp();
      }
       
   });
});