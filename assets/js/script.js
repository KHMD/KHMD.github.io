/*
==================================================================
/  Crafted for KHMD by
/  AniMysore74 (https://github.com/AniMysore74)
/  Based on Design by Aabharan Hemanth
/ ==================================================================
*/
//Navbar Toggle
$(document).ready( function() {
    $(".toggle").click( function() {
        $(".navbar").toggleClass("open");
    });
    $(".navbar>ul>li>a").click( function() {
        $(".navbar").toggleClass("open");
    });
});

/*
  jQuery Smooth Scroll by Chris Coyier
  https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
