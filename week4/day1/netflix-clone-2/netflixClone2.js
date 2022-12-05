$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav-bar2");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });