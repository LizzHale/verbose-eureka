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
    data-download-url: false,
    hideBarsDelay: 600,
    showThumbByDefault: false,
  });
});
