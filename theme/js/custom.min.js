jQuery(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');

    // if($('body').attr('data-sidebar-position') === "fixed") {
    //     $('.quixnav-scroll').slimscroll({
    //         position: "right",
    //         size: "5px",
    //         height: "100%",
    //         color: "transparent"
    //     });
    // }
});

(function($) {
    "use strict";

    $("#menu").metisMenu();

    // $(function() {
    //     AOS.init({
    //         duration: 1500,
    //         easing: 'ease-in-out',
    //     });
    // });

    $("#checkAll").change(function() {
        $("td input:checkbox").prop('checked', $(this).prop("checked"));
    });





    // $('.sidebar-right-inner').slimscroll({
    //     // position: "left",
    //     size: "5px",
    //     height: "100%",
    //     color: "#c6c8c9"
    // });

    $(".nav-control").on('click', function() {

        $('#main-wrapper').toggleClass("menu-toggle");

        $(".hamburger").toggleClass("is-active");
    });

    //to keep the current page active
    $(function() {
        for (var nk = window.location,
                o = $("ul#menu a").filter(function() {
                    return this.href == nk;
                })
                .addClass("mm-active")
                .parent()
                .addClass("mm-active");;) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("mm-show")
                .parent()
                .addClass("mm-active");
        }




        $("ul#menu>li").on('click', function() {
            const sidebarStyle = $('body').attr('data-sidebar-style');
            if (sidebarStyle === 'mini') {
                console.log($(this).find('ul'))
                $(this).find('ul').stop()
            }
        })
    });

    $(function() {
        // var win_w = window.outerWidth;
        var win_h = window.outerHeight;
        var win_h = window.outerHeight;
        if (win_h > 0 ? win_h : screen.height) {
            $(".content-body").css("min-height", (win_h + 60) + "px");
        };
    });


    $('a[data-action="collapse"]').on("click", function(i) {
        i.preventDefault(),
            $(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),
            $(this).closest(".card").children(".card-body").collapse("toggle");
    });

    $('a[data-action="expand"]').on("click", function(i) {
        i.preventDefault(),
            $(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),
            $(this).closest(".card").toggleClass("card-fullscreen");
    });



    $('[data-action="close"]').on("click", function() {
        $(this).closest(".card").removeClass().slideUp("fast");
    });

    $('[data-action="reload"]').on("click", function() {
        var e = $(this);
        e.parents(".card").addClass("card-load"),
            e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
            setTimeout(function() {
                e.parents(".card").children(".card-loader").remove(),
                    e.parents(".card").removeClass("card-load")
            }, 2000)
    });

    const headerHight = $('.header').innerHeight();

    $(window).scroll(function() {
        if ($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
            $(this.window).scrollTop() >= headerHight ? $('.quixnav').addClass('fixed') : $('.quixnav').removeClass('fixed')
    });

    // $('.sidebar-right-trigger').on('click', function() {
    //     $('.sidebar-right').toggleClass('show');
    // });

})(jQuery);

const qs = new PerfectScrollbar('.quixnav-scroll');
// const sr = new PerfectScrollbar('.sidebar-right-inner');


//plugin bootstrap minus and plus
$('.btn-number').on('click', function(e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus')
            input.val(currentVal - 1);
        else if (type == 'plus')
            input.val(currentVal + 1);
    } else {
        input.val(0);
    }
});