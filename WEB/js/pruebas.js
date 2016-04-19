alert("fuera a la funcion");
var $window = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch = Modernizr.touch;
$window.on('scroll', revealOnScroll);
alert("fuera aasdasdcion");
$(function() {
    alert("fuera entro a la funcion dcion");
    var $window = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch = Modernizr.touch;

    if (isTouch) {
        $('.revealOnScroll').addClass('prueba');
    }

    $window.on('scroll', revealOnScroll);
    alert("fuera aasdasdcion");

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        // Showed...
        $(".revealOnScroll:not(prueba)").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            alert("fuera aasdasdcion");
            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function() {
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
        // Hidden...
        $(".revealOnScroll.animated").each(function(index) {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
                $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
            }
        });
    }

    revealOnScroll();
});
