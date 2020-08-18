(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space






document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.fixed-action-btn').floatingActionButton();
});





document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.carousel').carousel();
});






document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.collapsible').collapsible();
});





document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.modal').modal();
});




M.toast({
  html: 'Hola!'
})




document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.datepicker').datepicker();
});



document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.timepicker').timepicker();
});