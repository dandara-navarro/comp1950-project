$(document).ready(function($) {
    if ($(window).width() < 860) {
      $('#main-nav').hide();
    } else {
      $('.menu').hide();
    }
    $('.btn-toggle-nav').click(function() {
      $('.responsive').toggleClass('inactive')
    });
  });
  
  $(window).resize(function() {
    if ($(window).width() < 860) {
      $('#main-nav').hide();
      $('.menu').show();
    } else {
      $('.menu').hide();
      $('#main-nav').show();
    }
});