

$(document).ready(function() {
  $(".contact-dropdown-services dt a").on('click', function() {
  $(".contact-dropdown-services dd ul").slideToggle('fast');
});

$(".contact-dropdown-services dd ul li a").on('click', function() {
  $(".contact-dropdown-services dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}


});
