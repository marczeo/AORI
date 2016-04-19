window.onload = function() {
    $page_elements = $('.svg');
    $page_elements.each(function() {
        $("." + $(this).attr('id')).load($(this).attr('id') + ".html");
    });
    $('.svg').click(function() {
        $("." + $(this).attr('id')).slideToggle();
        return 0;
    });
};
