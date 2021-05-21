let hamburger = $('.hamburger');
$('body').toggleClass('active');

hamburger.click(function () {
  $(this).find('.lines').toggleClass('close');
  $('body').toggleClass('active');
});

var tooltips = document.querySelectorAll('.redes_sociales span');

window.onmousemove = function (e) {
  var x = e.clientX + 20 + 'px',
    y = e.clientY + 20 + 'px';
  for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].style.top = y;
    tooltips[i].style.left = x;
  }
};
