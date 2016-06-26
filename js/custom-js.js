$(document).ready(function(){
  $('#lightgallery').lightGallery({
    hideBarsDelay: 600,
    showThumbByDefault: false,
  });

  var $gridItem = $('.grid-item');
  $gridItem.hide()

  var $grid = $('.grid');

  $grid.imagesLoaded( function() {
    $gridItem.show();
    $grid.masonry({
      itemSelector: '.grid-item'
    });
  });
});
