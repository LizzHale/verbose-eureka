$(document).ready(function(){
  $('#lightgallery').lightGallery({
    hideBarsDelay: 600,
    showThumbByDefault: false,
  });

  var $grid = $('.grid');
  $grid.imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item'
    });
  });
});
