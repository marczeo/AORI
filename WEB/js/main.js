  var aspect_ratio = 0.56;
  var $hero_video = $(".hero");
  $(document).ready(function() {

      if ($(window).width() < 1100) {
          $hero_video.height($hero_video.width() * aspect_ratio);

      } else {
          $hero_video.height(620);
      }
      //Incluir navbar
      $(function() {
          $("#navbar").load("navbar.html");
      });
      loadPage();
  });
  jQuery(window).resize(function() {
      if ($(this).width() < 1100) {
          $hero_video.height($hero_video.width() * aspect_ratio);
      } else {
          $hero_video.height(620);
      }
  });

  function loadPage() {
      var url = window.location.href;
      var hayAncla = url.indexOf("#");

      if (hayAncla != -1) {
          var hash = url.substring(url.indexOf("#") + 1);
          window.location.hash = hash;
      }

  }
