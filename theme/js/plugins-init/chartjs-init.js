(function($) {
    "use strict"

    //basic bar chart

    const barChart_1 = document.getElementById("barChart_1").getContext('2d');
    
    barChart_1.height = 100;

    new Chart(barChart_1, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(26, 51, 213, 1)',
                    borderWidth: "0",
                    backgroundColor: 'rgba(26, 51, 213, 1)'
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.5
                }]
            }
        }
    });



//gradient bar chart
    const barChart_2 = document.getElementById("barChart_2").getContext('2d');
    //generate gradient
    const barChart_2gradientStroke = barChart_2.createLinearGradient(0, 0, 0, 250);
    barChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
    barChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

    barChart_2.height = 100;

    new Chart(barChart_2, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: barChart_2gradientStroke,
                    borderWidth: "0",
                    backgroundColor: barChart_2gradientStroke, 
                    hoverBackgroundColor: barChart_2gradientStroke
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.5
                }]
            }
        }
    });



//stalked bar chart
    const barChart_3 = document.getElementById("barChart_3").getContext('2d');
    //generate gradient
    const barChart_3gradientStroke = barChart_3.createLinearGradient(50, 100, 50, 50);
    barChart_3gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
    barChart_3gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

    const barChart_3gradientStroke2 = barChart_3.createLinearGradient(50, 100, 50, 50);
    barChart_3gradientStroke2.addColorStop(0, "rgba(56, 164, 248, 1)");
    barChart_3gradientStroke2.addColorStop(1, "rgba(56, 164, 248, 1)");

    const barChart_3gradientStroke3 = barChart_3.createLinearGradient(50, 100, 50, 50);
    barChart_3gradientStroke3.addColorStop(0, "rgba(40, 199, 111, 1)");
    barChart_3gradientStroke3.addColorStop(1, "rgba(40, 199, 111, 1)");
    
    barChart_3.height = 100;

    let barChartData = {
        defaultFontFamily: 'Poppins',
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Red',
            backgroundColor: barChart_3gradientStroke,
            hoverBackgroundColor: barChart_3gradientStroke, 
            data: [
                '12',
                '12',
                '12',
                '12',
                '12',
                '12',
                '12'
            ]
        }, {
            label: 'Green',
            backgroundColor: barChart_3gradientStroke2,
            hoverBackgroundColor: barChart_3gradientStroke2, 
            data: [
                '12',
                '12',
                '12',
                '12',
                '12',
                '12',
                '12'
            ]
        }, {
            label: 'Blue',
            backgroundColor: barChart_3gradientStroke3,
            hoverBackgroundColor: barChart_3gradientStroke3, 
            data: [
                '12',
                '12',
                '12',
                '12',
                '12',
                '12',
                '12'
            ]
        }]

    };

    new Chart(barChart_3, {
        type: 'bar',
        data: barChartData,
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });




let draw = Chart.controllers.line.__super__.draw; //draw shadow

//basic line chart
    const lineChart_1 = document.getElementById("lineChart_1").getContext('2d');

    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let nk = this.chart.chart.ctx;
            let _stroke = nk.stroke;
            nk.stroke = function () {
                nk.save();
                nk.shadowColor = 'rgba(255, 0, 0, .2)';
                nk.shadowBlur = 10;
                nk.shadowOffsetX = 0;
                nk.shadowOffsetY = 10;
                _stroke.apply(this, arguments)
                nk.restore();
            }
        }
    });
    
    lineChart_1.height = 100;

    new Chart(lineChart_1, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: 'rgba(56, 164, 248, 1)',
                    borderWidth: "2",
                    backgroundColor: 'transparent',  
                    pointBackgroundColor: 'rgba(56, 164, 248, 1)'
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }
    });
    


//gradient line chart
    const lineChart_2 = document.getElementById("lineChart_2").getContext('2d');
    //generate gradient
    const lineChart_2gradientStroke = lineChart_2.createLinearGradient(500, 0, 100, 0);
    lineChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
    lineChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let nk = this.chart.chart.ctx;
            let _stroke = nk.stroke;
            nk.stroke = function () {
                nk.save();
                nk.shadowColor = 'rgba(0, 0, 128, .2)';
                nk.shadowBlur = 10;
                nk.shadowOffsetX = 0;
                nk.shadowOffsetY = 10;
                _stroke.apply(this, arguments)
                nk.restore();
            }
        }
    });
        
    lineChart_2.height = 100;

    new Chart(lineChart_2, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: lineChart_2gradientStroke,
                    borderWidth: "2",
                    backgroundColor: 'transparent', 
                    pointBackgroundColor: 'rgba(26, 51, 213, 0.5)'
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }
    });


//dual line chart
    const lineChart_3 = document.getElementById("lineChart_3").getContext('2d');
    //generate gradient
    const lineChart_3gradientStroke1 = lineChart_3.createLinearGradient(500, 0, 100, 0);
    lineChart_3gradientStroke1.addColorStop(0, "rgba(26, 51, 213, 1)");
    lineChart_3gradientStroke1.addColorStop(1, "rgba(26, 51, 213, 0.5)");

    const lineChart_3gradientStroke2 = lineChart_3.createLinearGradient(500, 0, 100, 0);
    lineChart_3gradientStroke2.addColorStop(0, "rgba(56, 164, 248, 1)");
    lineChart_3gradientStroke2.addColorStop(1, "#ce1d76");

    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let nk = this.chart.chart.ctx;
            let _stroke = nk.stroke;
            nk.stroke = function () {
                nk.save();
                nk.shadowColor = 'rgba(0, 0, 0, 0)';
                nk.shadowBlur = 10;
                nk.shadowOffsetX = 0;
                nk.shadowOffsetY = 10;
                _stroke.apply(this, arguments)
                nk.restore();
            }
        }
    });
        
    lineChart_3.height = 100;

    new Chart(lineChart_3, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: lineChart_3gradientStroke1,
                    borderWidth: "2",
                    backgroundColor: 'transparent', 
                    pointBackgroundColor: 'rgba(26, 51, 213, 0.5)'
                }, {
                    label: "My First dataset",
                    data: [5, 20, 15, 41, 35, 65, 80],
                    borderColor: lineChart_3gradientStroke2,
                    borderWidth: "2",
                    backgroundColor: 'transparent', 
                    pointBackgroundColor: 'rgba(56, 164, 248, 1)'
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }
    });
    


//basic area chart

    const areaChart_1 = document.getElementById("areaChart_1").getContext('2d');
    
    areaChart_1.height = 100;

    new Chart(areaChart_1, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: 'rgba(0, 0, 1128, .3)',
                    borderWidth: "1",
                    backgroundColor: 'rgba(0, 171, 197, .5)', 
                    pointBackgroundColor: 'rgba(0, 0, 1128, .3)'
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }
    });


//gradient area chart

    const areaChart_2 = document.getElementById("areaChart_2").getContext('2d');
    //generate gradient
    const areaChart_2gradientStroke = areaChart_2.createLinearGradient(500, 0, 100, 0);
    areaChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
    areaChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");
    
    areaChart_2.height = 100;

    new Chart(areaChart_2, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: areaChart_2gradientStroke,
                    borderWidth: "1",
                    backgroundColor: areaChart_2gradientStroke
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }
    });
    

//gradient area chart

    const areaChart_3 = document.getElementById("areaChart_3").getContext('2d');
    
    areaChart_3.height = 100;

    new Chart(areaChart_3, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: 'rgb(0, 171, 197)',
                    borderWidth: "1",
                    backgroundColor: 'rgba(0, 171, 197, .5)'
                }, 
                {
                    label: "My First dataset",
                    data: [5, 25, 20, 41, 36, 75, 70],
                    borderColor: 'rgb(0, 0, 128)',
                    borderWidth: "1",
                    backgroundColor: 'rgba(0, 0, 128, .5)'
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }
    });
    


    
    //radar chart
    const radar_chart = document.getElementById("radar_chart").getContext('2d');

    const radar_chartgradientStroke1 = radar_chart.createLinearGradient(500, 0, 100, 0);
    radar_chartgradientStroke1.addColorStop(0, "rgba(54, 185, 216, .5)");
    radar_chartgradientStroke1.addColorStop(1, "rgba(75, 255, 162, .5)");

    const radar_chartgradientStroke2 = radar_chart.createLinearGradient(500, 0, 100, 0);
    radar_chartgradientStroke2.addColorStop(0, "rgba(68, 0, 235, .5");
    radar_chartgradientStroke2.addColorStop(1, "rgba(68, 236, 245, .5");

    // radar_chart.height = 100;
    new Chart(radar_chart, {
        type: 'radar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 66, 45, 56, 55, 40],
                    borderColor: '#f21780',
                    borderWidth: "1",
                    backgroundColor: radar_chartgradientStroke2
                },
                {
                    label: "My Second dataset",
                    data: [28, 12, 40, 19, 63, 27, 87],
                    borderColor: '#f21780',
                    borderWidth: "1",
                    backgroundColor: radar_chartgradientStroke1
                }
            ]
        },
        options: {
            legend: false,
            maintainAspectRatio: false, 
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });
    


//pie chart

    //pie chart
    const pie_chart = document.getElementById("pie_chart").getContext('2d');
    // pie_chart.height = 100;
    new Chart(pie_chart, {
        type: 'pie',
        data: {
            defaultFontFamily: 'Poppins',
            datasets: [{
                data: [45, 25, 20, 10],
                borderWidth: 0, 
                backgroundColor: [
                    "rgba(0, 171, 197, .9)",
                    "rgba(0, 171, 197, .7)",
                    "rgba(0, 171, 197, .5)",
                    "rgba(0,0,0,0.07)"
                ],
                hoverBackgroundColor: [
                    "rgba(0, 171, 197, .9)",
                    "rgba(0, 171, 197, .7)",
                    "rgba(0, 171, 197, .5)",
                    "rgba(0,0,0,0.07)"
                ]

            }],
            labels: [
                "one",
                "two",
                "three", 
                "four"
            ]
        },
        options: {
            responsive: true, 
            legend: false, 
            maintainAspectRatio: false
        }
    });
    
    
    
    //doughut chart
    const doughnut_chart = document.getElementById("doughnut_chart").getContext('2d');
    // doughnut_chart.height = 100;
    new Chart(doughnut_chart, {
        type: 'doughnut',
        data: {
            defaultFontFamily: 'Poppins',
            datasets: [{
                data: [45, 25, 20, 10],
                borderWidth: 0, 
                backgroundColor: [
                    "rgba(0, 0, 128, .9)",
                    "rgba(0, 0, 128, .7)",
                    "rgba(0, 0, 128, .5)",
                    "rgba(0, 0, 128, .4)"
                ],
                hoverBackgroundColor: [
                    "rgba(0, 0, 128, .5)",
                    "rgba(0, 0, 128, .4)",
                    "rgba(0, 0, 128, .3)",
                    "rgba(0, 0, 128, .2)"
                ]

            }],
            // labels: [
            //     "green",
            //     "green",
            //     "green",
            //     "green"
            // ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    
    
    //polar chart
    const polar_chart = document.getElementById("polar_chart").getContext('2d');
    // polar_chart.height = 100;
    new Chart(polar_chart, {
        type: 'polarArea',
        data: {
            defaultFontFamily: 'Poppins',
            datasets: [{
                data: [15, 18, 9, 6, 19],
                borderWidth: 0, 
                backgroundColor: [
                    "rgba(0, 171, 197, .5)",
                    "rgba(0, 0, 128, .5)",
                    "rgba(192, 10, 39, .5)",
                    "rgba(206, 29, 118, .5)",
                    "rgba(7, 135, 234, .5)"
                ]

            }]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false
        }
    });

    



})(jQuery);