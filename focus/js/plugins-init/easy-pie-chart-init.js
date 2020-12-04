(function($) {
    "use strict"

    const EPChart = Array.prototype.slice.call($('.easy-pie-chart'));

    EPChart.forEach(chart => {
        $(chart).easyPieChart({
            barColor: function(parcent) {
                return parcent > 75 ? 'rgb(0, 171, 197)' : parcent > 50 ? 'rgb(117, 180, 50)' : parcent > 25 ? 'rgb(7, 135, 234)' : 'rgb(192, 10, 39)';
            }, 
            lineWidth: 2
        });
    })

})(jQuery);