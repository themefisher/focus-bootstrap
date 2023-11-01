(function($) {
    "use strict"

    
    //API plug-in methods
    $.fn.dataTable.Api.register( 'column().data().sum()', function () {
        return this.reduce( function (a, b) {
            var x = parseFloat( a ) || 0;
            var y = parseFloat( b ) || 0;
            return x + y;
        } );
    } );
     
    /* Init the table and fire off a call to get the hidden nodes. */
    
    var table = $('#example-plugin-1').DataTable();
        
    $('<button class="btn btn-light mb-5">Click to sum age in all rows</button>')
        .prependTo( '#demo' )
        .on( 'click', function () {
            alert( 'Column sum is: '+ table.column( 3 ).data().sum() );
        } );
    
    $('<button class="btn btn-light mb-5 mr-4">Click to sum age of visible rows</button>')
        .prependTo( '#demo' )
        .on( 'click', function () {
            alert( 'Column sum is: '+ table.column( 3, {page:'current'} ).data().sum() );
        } );





    
    //Custom filtering - range search
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var min = parseInt( $('#min').val(), 10 );
            var max = parseInt( $('#max').val(), 10 );
            var age = parseFloat( data[3] ) || 0; // use data for the age column
        
            if ( ( isNaN( min ) && isNaN( max ) ) ||
                    ( isNaN( min ) && age <= max ) ||
                    ( min <= age   && isNaN( max ) ) ||
                    ( min <= age   && age <= max ) )
            {
                return true;
            }
            return false;
        }
    );
    
    var table = $('#example-plugin-2').DataTable();
        
    // Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').keyup( function() {
        table.draw();
    });
        


    //Live DOM ordering
    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
    {
        return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
            return $('input', td).val();
        } );
    }
    
    /* Create an array with the values of all the input boxes in a column, parsed as numbers */
    $.fn.dataTable.ext.order['dom-text-numeric'] = function  ( settings, col )
    {
        return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
            return $('input', td).val() * 1;
        } );
    }
    
    /* Create an array with the values of all the select options in a column */
    $.fn.dataTable.ext.order['dom-select'] = function  ( settings, col )
    {
        return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
            return $('select', td).val();
        } );
    }
    
    /* Create an array with the values of all the checkboxes in a column */
    $.fn.dataTable.ext.order['dom-checkbox'] = function  ( settings, col )
    {
        return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
            return $('input', td).prop('checked') ? '1' : '0';
        } );
    }
    
    /* Initialise the table with the required column ordering data types */
    $(document).ready(function() {
        $('#example-plugin-3').DataTable( {
            "columns": [
                null,
                { "orderDataType": "dom-text-numeric" },
                { "orderDataType": "dom-text", type: 'string' },
                { "orderDataType": "dom-select" }
            ]
        } );
    } );




})(jQuery);