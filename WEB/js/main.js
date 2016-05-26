/*Variables*/
var aspect_ratio = 0.56;
var title_aspect_ratio = 0.2;
var $hero_video = $(".hero");
var $window = $(window);
var $servicios_flag = 0;
var seccion_aspect_ratio = .43;

/*
  Cosas a cargar cuando la pagina esta lista
  para elementos que no se necesitan cargar antes de llamar la función.
*/
$(document).ready(function() {
    $hero_video.height($hero_video.width() * aspect_ratio);
    $(".vertical").height(($(".clientes_img img").height())*0.90);
    // if ($(window).width() < 1150) {
    //     $(".title-container").height($(".title-container").width() * title_aspect_ratio);
    // } else {
    //     $(".title-container").height(227);
    // }
    //Incluir navbar
    $(function() {
        $("#navbar").load("navbar.html");
    });
    // $(function() {
    //     $("#servicios").load("testservicios.html");
    // });
    loadPage();
    /*
     **SERVICIOS**
     */
    /*Click dentro de franquicia que tiene un infografico*/
    $('#Franquicia .modelos').click(function() {
        if ($('.infographic').is(':visible')) {
            $('.infographic').hide();
        } else {
            $('.infographic').show();
        }
    });

    var widthTmp = 0;
    $('.modelos').click(function() {
        var anchor, elem;
        if ($(this).children('.servicio_desc').is(':visible')) {
            $('.modelos').show();
            $('.modelos button').html('Leer Más');
            $(this).children('.servicio_desc').slideUp('slow');
            /*$('.modelos').width(widthTmp);*/
            anchor = $(this).parent().attr('name').replace("_", "");
            elem = $("a[name='" + anchor + "']");
            $('html, body').animate({
                scrollTop: elem.offset().top-100
            }, 'slow');
        } else {

           widthTmp = $(this).width();
            $('.modelos').not(this).hide();
            $('.modelos button').html('Cerrar');
           /* $(this).width('98%');
            $(this).attr("margin","1%");*/
            elem = $(this);
            $('html, body').animate({
                scrollTop: elem.offset().top-100
            }, 'slow');
            $(this).children('.servicio_desc').slideDown('slow');
        }
    });
    /*
    |-----------------------
    |Seccion Banner
    |-----------------------
    */
      $('.seccion_img').height($(".seccion_img").width() * seccion_aspect_ratio);

});

/*
  Cosas a cargar cuando la pagina hacer Load
  para elementos que necesitan cargar antes de llamar eventos o funciones.
*/
window.onload = function() {
    $page_elements = $('.subtemas').children("div");
    $page_elements.each(function() {
        $("#" + $(this).attr('class') + "_" + $(this).attr('id')).load($(this).parent().attr('name') + ".html " + "." + $(this).attr('id'));
    });
    $animation_elements = $("*[class^='prueba']");
    $window.on('scroll', check_if_in_view);
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    $('.something').click(function() {
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

$(window).resize(function() {
    $hero_video.height($hero_video.width() * aspect_ratio);
    $(".vertical").height(($(".clientes_img img").height())*0.90);
    // if ($(this).width() < 1150) {
    //     $(".title-container").height($(".title-container").width() * title_aspect_ratio);
    // } else {
    //     $(".title-container").height(227);
    // }

    /*
    |-----------------------
    |Seccion Banner
    |-----------------------
    */
      $('.seccion_img').height($(".seccion_img").width() * seccion_aspect_ratio);
});

function loadPage() {
    var url = window.location.href;
    var hayAncla = url.indexOf("#");
    if (hayAncla != -1) {
        var hash = url.substring(url.indexOf("#") + 1);
        window.location.hash = hash;
    }
}

// function slide_Servicios(servicio) {
//     if ($('#' + servicio).is(':visible')) {
//         $("#" + servicio).slideUp("fast");
//     } else {
//         $(".servicio_desc").not(servicio).slideUp("fast");
//         $("#" + servicio).slideToggle("fast");
//     }
// }

function slide_Subservicios(servicio) {
    if ($('#' + servicio).is(':visible')) {
        $("#" + servicio).slideUp("fast");
    } else {
        slide_Check();
        $(".subtemas").not(servicio).slideUp("fast");
        $("#" + servicio).slideDown("fast");
    }
}

function slide_Check() {
    $('.servicio_desc').each(function() {
        $(this).slideUp();
        $('.modelos').show();
    });
}
