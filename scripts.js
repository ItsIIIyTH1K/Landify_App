// Header
$(document).ready(function(){
  $('.fa-bars').click(function(){
    $("header").toggleClass("header_active");
  });
});

// Adaptive navbar
$(document).ready(function(){
  $('.header_more_btn').click(function(){
    $(".header_more_links").toggleClass("header_more_links_disable");
  });
});
