(function($) {
    "use strict";




    /*
    -------------------
    Ticker
    -------------------*/
    if ($('#webticker-dark-icons').length) {
        
        $("#webticker-dark-icons").webTicker({
            height: 'auto',
            duplicate: true,
            startEmpty: false,
            rssfrequency: 4,
            // startEmpty: true
        });
    };


    /*
    -------------------
    Ticker
    -------------------*/
    if ($('#webticker-wout-icons').length) {

        $("#webticker-wout-icons").webTicker({
                height: 'auto',
                duplicate: true,
                startEmpty: false,
                rssfrequency: 5,
                // startEmpty: true
            });
    };


    /*
    -------------------
    Ticker
    -------------------*/
    if ($('#webticker-big').length) {

        $("#webticker-big").webTicker({
                height: 'auto',
                duplicate: true,
                startEmpty: false,
                rssfrequency: 5,
                // startEmpty: true
            });
    };





})(jQuery);