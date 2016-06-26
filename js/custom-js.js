$(document).ready(function(){
  var $gallery = $('.gallery');
  $gallery.hide()

  var $grid = $('.grid');

  $grid.imagesLoaded( function() {
    $gallery.show();

    $grid.masonry({
      itemSelector: '.grid-item'
    });
  });

  $('#lightgallery').lightGallery({
    hideBarsDelay: 600,
    showThumbByDefault: false,
  });
});
