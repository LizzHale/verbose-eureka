$(document).ready(function(){
  var $gridItem = $('.grid-item');
  $gridItem.hide()

  var $grid = $('.grid');

  $grid.imagesLoaded()
    .done( function( instance ) {
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
