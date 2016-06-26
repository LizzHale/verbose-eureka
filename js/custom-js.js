$(document).ready(function(){
  $('#lightgallery').lightGallery({
    hideBarsDelay: 600,
    showThumbByDefault: false,
  });
});

$(window).load(function(){ $('.grid').masonry({
    itemSelector: '.grid-item'
  });
});
