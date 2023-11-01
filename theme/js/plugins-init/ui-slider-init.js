(function ($) {
    "use strict"




/*******************
NOUI Slider
*******************/

    //basic slider
    let basicSlide = document.getElementById('basic-slider');
    noUiSlider.create(basicSlide, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        step: 20, 
        pips: {
            mode: 'steps',
            density: 10,
            format: wNumb({
                decimals: 0,
                prefix: '$'
            })
        }
    });
    //basic slider ^


    //slider behaviour snap
    var snapSlider2 = document.getElementById('snap');
    noUiSlider.create(snapSlider2, {
        start: 40,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': 20,
            'max': 80
        }
    });
    //slider behaviour snap ^


    //slider behaviour hover
    var hoverSlider = document.getElementById('hover');
    var field = document.getElementById('hover-val');

    noUiSlider.create(hoverSlider, {
        start: 20,
        behaviour: 'hover-snap',
        range: {
            'min': 0,
            'max': 100
        },
        format: wNumb({
            decimals: 0
        })
    });

    hoverSlider.noUiSlider.on('hover', function (value) {
        field.innerHTML = value;
    });
    //slider behaviour hover ^


    //slider tooltips
    var tooltipSlider = document.getElementById('slider-tooltips');
    noUiSlider.create(tooltipSlider, {
        start: [80, 120],
        tooltips: [wNumb({decimals: 1}), true],
        range: {
            'min': 0,
            'max': 200
        }
    });
    //slider tooltips ^


    //stepping and snapping the values
    var stepSlider = document.getElementById('slider-step');
    noUiSlider.create(stepSlider, {
        start: [4000],
        step: 1000,
        range: {
            'min': [2000],
            'max': [10000]
        }
    });

    var stepSliderValueElement = document.getElementById('slider-step-value');
    stepSlider.noUiSlider.on('update', function (values, handle) {
        stepSliderValueElement.innerHTML = values[handle];
    });
    //stepping and snapping the values ^


    //slider behaviour fixed dragging
    var dragFixedSlider = document.getElementById('drag-fixed');

    noUiSlider.create(dragFixedSlider, {
        start: [40, 60],
        behaviour: 'drag-fixed',
        connect: true,
        range: {
            'min': 20,
            'max': 80
        }
    });
    //slider behaviour fixed dragging ^


    //Number formatting
    var sliderFormat = document.getElementById('slider-format');
    noUiSlider.create(sliderFormat, {
        start: [20000],
        step: 1000,
        range: {
            'min': [20000],
            'max': [80000]
        },
        ariaFormat: wNumb({
            decimals: 0
        }),
        format: wNumb({
            decimals: 3,
            thousand: '.',
            suffix: ' (US $)'
        })
    });

    var inputFormat = document.getElementById('input-format');
    sliderFormat.noUiSlider.on('update', function (values, handle) {
        inputFormat.value = values[handle];
    });

    inputFormat.addEventListener('change', function () {
        sliderFormat.noUiSlider.set(this.value);
    });
    //Number formatting ^


    //working with date
    // Create a new date from a string, return as a timestamp.
    function timestamp(str) {
        return new Date(str).getTime();
    }

    var dateSlider = document.getElementById('slider-date');

    noUiSlider.create(dateSlider, {
    // Create two timestamps to define a range.
        range: {
            min: timestamp('2010'),
            max: timestamp('2016')
        },

    // Steps of one week
        step: 7 * 24 * 60 * 60 * 1000,

    // Two more timestamps indicate the handle starting positions.
        start: [timestamp('2011'), timestamp('2015')],

    // No decimals
        format: wNumb({
            decimals: 0
        })
    });

    var dateValues = [
        document.getElementById('event-start'),
        document.getElementById('event-end')
    ];

    // Create a list of day and month names.
    var weekdays = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"
    ];

    var months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    
    
    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });

    // Append a suffix to dates.
    // Example: 23 => 23rd, 1 => 1st.
    function nth(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

    // Create a string representation of the date.
    function formatDate(date) {
        return weekdays[date.getDay()] + ", " +
            date.getDate() + nth(date.getDate()) + " " +
            months[date.getMonth()] + " " +
            date.getFullYear();
    }
    //working with date ^





})(jQuery);