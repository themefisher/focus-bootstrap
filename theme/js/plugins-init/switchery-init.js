(function($) {
  "use strict"
  
  //circular switch
  var elem1 = Array.prototype.slice.call($('.js-switch-1'));
  elem1.forEach(html => {
    new Switchery(html, {
      color: '#00abc5', 
      secondaryColor: '#00abc5'
    });
  });

  //square switch
  var elem2 = Array.prototype.slice.call($('.js-switch-2'));
  elem2.forEach(html => {
    new Switchery(html, {
      color: '#c00a27', 
      secondaryColor: '#c00a27'
    });
  });
    

})(jQuery);