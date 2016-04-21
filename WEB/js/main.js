  window.onload = function() {
      //alert ($('.animated').attr('id'));
      $page_elements = $('.svg');
      $page_elements.each(function() {
          $("." + $(this).attr('id')).load($(this).attr('id') + ".html");
      });

     /* $('#phone').click(function(event) {
        //  $(".servicio_desc").not($(event.target).attr('id')).slideUp("fast");
         // $("." + $(event.target).attr('id')).slideToggle("fast");
		 alert($(event.target).attr('name'));
		 $(".servicio_desc").not($(event.target).attr('name')).slideUp("fast");
          $("." + $(event.target).attr('name')).slideToggle("fast");
          return false;
      });*/

      $window = $(window);
      $animation_elements = $("*[class^='prueba']");
      //$("div[class^='apple-']")
      //$animation_elements = $('.prueba');
      $window.on('scroll', check_if_in_view);
      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll');
      //document.getElementById('MyDIV').setAttribute("style", "width:" + $('#graph').width() + "px" + "height:" + $('#graph').height() + "px");

      //alert("Entre a funcion");
      $('.something').click(function() {
          //alert($(this).attr("name"));
          //alert($(this).attr("name"));
          if ($(this).attr("name") == "headquarters") {
              map.setZoom(16);
              map.setCenter(new google.maps.LatLng(20.7018007, -103.3808581));
          }
          if ($(this).attr("name") == "comerciales") {

              map.setZoom(16);
              map.setCenter(new google.maps.LatLng(20.6814282, -103.3821035));
          }
          if ($(this).attr("name") == "zacatecas") {
              //alert($(this).attr("name"));
              map.setZoom(8);
              map.setCenter(new google.maps.LatLng(23.095497, -103.6113519));
          }

      });
      init_map();
  };

  var aspect_ratio = 0.56;
  var title_aspect_ratio = 0.2;
  var $hero_video = $(".hero");
  $(document).ready(function() {
      $hero_video.height($hero_video.width() * aspect_ratio);
      if ($(window).width() < 1150) {
          $(".title-container").height($(".title-container").width() * title_aspect_ratio);
      }else{
        $(".title-container").height(227);
      }

      //Incluir navbar
      $(function() {
          $("#navbar").load("navbar.html");
      });
      loadPage();
  });
  $(window).resize(function() {
      $hero_video.height($hero_video.width() * aspect_ratio);
      if ($(this).width() < 1150) {
        $(".title-container").height($(".title-container").width() * title_aspect_ratio);
      }else{
        $(".title-container").height(227);
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
  
  function slide_Servicios(servicio)
  {
	  $(".servicio_desc").not(servicio).slideUp("fast");
       $("." + servicio).slideToggle("fast");
  }
