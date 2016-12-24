(function() {
  var parallax = document.querySelectorAll('.parallax')
  var speed = 0.5;

  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i){
      var windowYOffset = window.pageYOffset
      var setBackgroundPos = '50% ' + (windowYOffset * speed) + 'px';

      el.style.backgroundPosition = setBackgroundPos
    });
  }
})();
