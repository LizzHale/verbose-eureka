$(document).ready(function(){
  $('#lightgallery').lightGallery({
    hideBarsDelay: 600,
  });
});

$(window).load(function(){ $('.grid').masonry({
    itemSelector: '.grid-item'
  });
});

// $('.grid').imagesLoaded().progress( function() {
//   $('.grid').masonry('layout');
// });
