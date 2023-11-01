(function($) {
    "use strict"

    $('.example-style').DataTable();
    //example 1
    var table = $('#example').DataTable({
        createdRow: function ( row, data, index ) {
           $(row).addClass('selected')
        } 
    });

})(jQuery);