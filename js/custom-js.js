$(document).ready(function(){
  var $gridItem = $('.grid-item');
  $gridItem.hide()

  var $grid = $('.grid');

  $grid.imagesLoaded( function() {
    $gridItem.show();
    $grid.masonry({
      itemSelector: '.grid-item'
    });
  });

  $('#lightgallery').lightGallery({
    hideBarsDelay: 600,
    showThumbByDefault: false,
  });
});
