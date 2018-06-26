(function() { 
  Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.configure({
      transition: 'fade',
      imageCrop: true,
      height: 600,
      width: 800,
      lightbox: true
    });
  Galleria.run('.galleria');
}());