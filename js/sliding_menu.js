$(document).ready(function(){
  $('.navigation-menu-button').on('click touchstart', function(e){
    //$('.navigation-menu').toggleClass('is-visible');
    $('body').toggleClass('mobile-nav');
    e.preventDefault();
  });
});
