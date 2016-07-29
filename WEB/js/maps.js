function init_map() {

    var styles = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#dbdbdb"
        }, {
            "visibility": "on"
        }]
    }];
    var myOptions = {
        zoom: 14,
        scrollwheel: false,
        //draggable: false,
        center: new google.maps.LatLng(20.7017957, -103.37866940000004),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(20.7017957, -103.37866940000004),
        icon: 'images/icono2.png'
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>Aori Headquarters</strong><br>Guadalajara,Jalisco<br>'
    });

    marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(20.679709, -103.381338),
        icon: 'images/icono2.png'
    });
    infowindow2 = new google.maps.InfoWindow({
        content: '<strong>Aori Oficinas Comerciales</strong><br>Guadalajara,Jalisco<br>'
    });   

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        //alert(marker.getPosition());
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map, marker2);
    });
    infowindow2.open(map, marker2);
}
google.maps.event.addDomListener(window, 'load', init_map);
function showInfo(something) {
    //alert(marker.getPosition());
}
