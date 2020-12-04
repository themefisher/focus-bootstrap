


// Return with commas in between
var numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


var helpers = Chart.helpers;


Chart.HeatMapPlugin = Chart.PluginBase.extend({
    beforeInit: function (chart) {
        if (chart.config.type === 'heatmap') {
            // Keep the y-axis in sync with the datasets
            chart.data.yLabels = chart.data.datasets.map(function (ds) {
                return ds.label;
            });
        }
    },

    beforeUpdate: function (chart) {
        if (chart.config.type === 'heatmap') {
            // Keep the y-axis in sync with the datasets
            chart.data.yLabels = chart.data.datasets.map(function (ds) {
                return ds.label;
            });
        }
    },
});

Chart.plugins.register(new Chart.HeatMapPlugin());
Chart.defaults.heatmap = {
    radiusScale: 0,
    paddingScale: 0,
    colorFunction: function (value, minVal, maxVal, colorScheme) {
        return getColorForPercentage(value, minVal, maxVal, colorScheme);
    },
    colorGradiant: 'YellowToRed',
    hover: {
        mode: 'single'
    },

    legend: {
        display: false,
        displayCustom: true,
        position: 'right',
    },
    scales: {
        xAxes: [{
            type: 'category',
            position: 'bottom',
            gridLines: {
                display: false,
                offsetGridLines: true,
                drawBorder: false,
                drawTicks: false
            }
        }],
        yAxes: [{
            type: 'category',
            position: 'left',
            gridLines: {
                display: false,
                offsetGridLines: true,
                drawBorder: false,
                drawTicks: false
            }
        }]
    }
};


Chart.controllers.heatmap = Chart.DatasetController.extend({
    dataElementType: Chart.elements.Rectangle,
    minDataSetValue: function (){
        var returnValue = 0;
        var tmpValue = 0;
        var dataset = this.chart.data.datasets;
        for (var xx = 0; xx < dataset.length; xx++){
            if(xx == 0){
                returnValue = Math.min.apply(Math, dataset[xx].data);
            }
            else{
                tmpValue = Math.min.apply(Math, dataset[xx].data);
                if (tmpValue < returnValue) {
                    returnValue = tmpValue;
                }
            }
        }
        return returnValue;
    },
    maxDataSetValue: function () {
        var returnValue = 0;
        var tmpValue = 0;
        var dataset = this.chart.data.datasets;
        for (var xx = 0; xx < dataset.length; xx++) {
            if (xx == 0) {
                returnValue = Math.max.apply(Math, dataset[xx].data);
            }
            else {
                tmpValue = Math.max.apply(Math, dataset[xx].data);
                if (tmpValue > returnValue) {
                    returnValue = tmpValue;
                }
            }
        }
        return returnValue;
    },

    update: function (reset) {
        var me = this;
        var meta = me.getMeta();
        var boxes = meta.data;

        // Update Boxes
        helpers.each(boxes, function (box, index) {
            me.updateElement(box, index, reset);
        });
    },

    updateElement: function (box, index) {
        var me = this;
        var meta = me.getMeta();
        var xScale = me.getScaleForId(meta.xAxisID);
        var yScale = me.getScaleForId(meta.yAxisID);
        var dataset = me.getDataset();
        var data = dataset.data[index];
        var datasetIndex = me.index;
        var radiusScale = me.chart.options.radiusScale;
        var paddingScale = me.chart.options.paddingScale;

        var x = xScale.getPixelForValue(data, index, datasetIndex);
        var y = yScale.getPixelForValue(data, datasetIndex, datasetIndex);

        var boxWidth = 0;
        if (dataset.data.length > 1) {
            var x0 = xScale.getPixelForValue(dataset.data[0], 0, datasetIndex);
            var x1 = xScale.getPixelForValue(dataset.data[1], 1, datasetIndex);
            boxWidth = x1 - x0;
        } else {
            boxWidth = xScale.width;
        }

        var boxHeight = 0;
        if (me.chart.data.datasets.length > 1) {
            // We only support 'category' scales on the y-axis for now
            boxHeight = yScale.getPixelForValue(null, 1, 1) - yScale.getPixelForValue(null, 0, 0);
        } else {
            boxHeight = yScale.height;
        }

        // Apply padding
        var horizontalPadding = paddingScale * boxWidth;
        var verticalPadding = paddingScale * boxHeight;
        boxWidth = boxWidth - horizontalPadding;
        boxHeight = boxHeight - verticalPadding;
        y = y + verticalPadding / 2;
        x = x + horizontalPadding / 2;


        var color = me.chart.options.colorFunction(data, me.minDataSetValue(), me.maxDataSetValue(), me.chart.options.colorGradiant);
        var cornerRadius = boxWidth * radiusScale;

        helpers.extend(box, {
            // Utility
            _xScale: xScale,
            _yScale: yScale,
            _datasetIndex: datasetIndex,
            _index: index,
            _data: data,

            // Desired view properties
            _model: {
                // Position
                x: x + boxWidth / 2,
                y: y,

                // Appearance
                base: y + boxHeight,
                height: boxHeight,
                width: boxWidth,
                backgroundColor: color,
                cornerRadius: cornerRadius,

                // Tooltip
                label: me.chart.data.labels[index],
                datasetLabel: dataset.label,
            },

            // Override to draw rounded rectangles without any borders
            draw: function () {
                var ctx = this._chart.ctx;
                var vm = this._view;

                var leftX = vm.x - (vm.width) / 2;

                ctx.fillStyle = vm.backgroundColor;
                helpers.drawRoundedRectangle(ctx, leftX, vm.y, vm.width, vm.height, vm.cornerRadius);

                ctx.fill();
            },

            // Override to position the tooltip in the center of the box
            tooltipPosition: function () {
                var vm = this._view;
                return {
                    x: vm.x,
                    y: vm.y + vm.height / 2
                };
            }
        });

        box.pivot();
    },

    setHoverStyle: function () {
        // TODO: Implement this
    },

    removeHoverStyle: function () {
        // TODO: Implement this
    }
});




function getYellowToRedColor(colorSelectionCount, value) {
    var incroment = 100 / colorSelectionCount;
    var colorIncroment = 255 / colorSelectionCount;
    for (var ii = 1; ii <= colorSelectionCount; ii++) {
        if ((ii * incroment) >= value) {
            return "rgb(255, " + Math.ceil(255 - (ii * colorIncroment)) + ", 0)";
        }
    }
    return "rgb(255, 255, 0)";
}

function getGreenToBlueColor(colorSelectionCount, value) {
    var incroment = 100 / colorSelectionCount;
    var colorIncroment = 255 / colorSelectionCount;
    for (var ii = 1; ii <= colorSelectionCount; ii++) {
        if ((ii * incroment) >= value) {
            return "rgb(0, " + Math.ceil(255 - (ii * colorIncroment)) + ", 255)";
        }
    }
    return "rgb(0, 255, 255)";
}


//sets the chart background to white
Chart.plugins.register({
    beforeDraw: function (chartInstance) {
        var ctx = chartInstance.chart.ctx;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
    }
});


