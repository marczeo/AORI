  var aspect_ratio = 0.56;
  var $hero_video = $(".hero");
  var $circulo_principal = $(".quienes .circulo");
  $(document).ready(function() {
    if ($(window).width() < 1100) {
      $hero_video.height($hero_video.width() * aspect_ratio);
    } else {
      $hero_video.height(620);
    }
    if ($(this).width() > 768) {
      $(".quienes .circulo").height($(".imagen").height());
    }else {
      $(".quienes .circulo").height("auto");
    }
  });
  jQuery(window).resize(function() {
    if ($(this).width() < 1100) {
      $hero_video.height($hero_video.width() * aspect_ratio);
    } else {
      $hero_video.height(620);
    }
    if ($(this).width() > 768) {
      $(".quienes .circulo").height($(".imagen").height());
    }else {
      $(".quienes .circulo").height("auto");
    }
  });
