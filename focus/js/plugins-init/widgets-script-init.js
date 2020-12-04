//#chart_widget_1
(function($) {
    "use strict"

    const chart_widget_1 = document.getElementById("chart_widget_1").getContext('2d');
    //generate gradient
    // const gradientStroke = chart_widget_1.createLinearGradient(0, 0, 0, 250);
    // gradientStroke.addColorStop(0, "#00abc5");
    // gradientStroke.addColorStop(1, "#000080");

    // chart_widget_1.attr('height', '100');

    new Chart(chart_widget_1, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(255, 255, 255, .8)',
                    borderWidth: "0",
                    backgroundColor: 'rgba(255, 255, 255, .8)', 
                    hoverBackgroundColor: 'rgba(255, 255, 255, .8)'
                }
            ]
        },
        options: {
            legend: false,
            responsive: true, 
            maintainAspectRatio: false,  
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        display: false, 
                        max: 100, 
                        min: 0, 
                        stepSize: 10
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    barPercentage: 0.5, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });


//#chart_widget_2

    const chart_widget_2 = document.getElementById("chart_widget_2").getContext('2d');
    //generate gradient
    const chart_widget_2gradientStroke = chart_widget_2.createLinearGradient(0, 0, 0, 250);
    chart_widget_2gradientStroke.addColorStop(0, "#c00a27");
    chart_widget_2gradientStroke.addColorStop(1, "#ce1d76");

    // chart_widget_2.attr('height', '100');

    new Chart(chart_widget_2, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
                    borderColor: chart_widget_2gradientStroke,
                    borderWidth: "0",
                    backgroundColor: chart_widget_2gradientStroke, 
                    hoverBackgroundColor: chart_widget_2gradientStroke
                }
            ]
        },
        options: {
            legend: false,
            responsive: true, 
            maintainAspectRatio: false,  
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        display: false, 
                        max: 100, 
                        min: 0, 
                        stepSize: 10
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    barPercentage: 0.1, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });



//#chart_widget_3


    const chart_widget_3 = document.getElementById("chart_widget_3").getContext('2d');
    
    // chart_widget_3.height = 100;

    let barChartData = {
        defaultFontFamily: 'Poppins',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Expense',
            backgroundColor: '#f91035',
            hoverBackgroundColor: '#f91035', 
            data: [
                '20',
                '14',
                '18',
                '25',
                '27',
                '22',
                '12', 
                '24', 
                '20', 
                '14', 
                '18', 
                '16'
            ]
        }, {
            label: 'Earning',
            backgroundColor: '#F1F3F7',
            hoverBackgroundColor: '#F1F3F7', 
            data: [
                '12',
                '18',
                '14',
                '7',
                '5',
                '10',
                '20', 
                '8', 
                '12', 
                '18', 
                '14', 
                '16'
            ]
        }]

    };

    new Chart(chart_widget_3, {
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
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                    display: false, 
                    stacked: true,
                    barPercentage: .2, 
                    ticks: {
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: false, 
                    stacked: true, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });




//#chart_widget_4


    const chart_widget_4 = document.getElementById("chart_widget_4").getContext('2d');
    
    // chart_widget_4.height = 100;

    let barChartData2 = {
        defaultFontFamily: 'Poppins',
        labels: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
        datasets: [{
            label: 'Expense',
            backgroundColor: '#75B432',
            hoverBackgroundColor: '#75B432', 
            data: [
                '20',
                '14',
                '18',
                '25',
                '27',
                '22',
                '12', 
                '24', 
                '20', 
                '14', 
                '18', 
                '16', 
                '34', 
                '32', 
                '43', 
                '36', 
                '56', 
                '12', 
                '23', 
                '34'
            ]
        }, {
            label: 'Earning',
            backgroundColor: '#F1F3F7',
            hoverBackgroundColor: '#F1F3F7', 
            data: [
                '32',
                '58',
                '34',
                '37',
                '15',
                '41',
                '24', 
                '38', 
                '52', 
                '38', 
                '24', 
                '19', 
                '54', 
                '34', 
                '23', 
                '34', 
                '35', 
                '22', 
                '43', 
                '33'
            ]
        }]

    };

    new Chart(chart_widget_4, {
        type: 'bar',
        data: barChartData2,
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
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                    display: false, 
                    stacked: true,
                    barPercentage: 1, 
                    barThickness: 5, 
                    ticks: {
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: false, 
                    stacked: true, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false, 
                        max: 100, 
                        min: 0
                    }
                }]
            }
        }
    });




//#chart_widget_5



    new Chartist.Line("#chart_widget_5", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
        ]
    }, {
        low: 0,
        showArea: 1,
        showPoint: !0,
        showLine: !0,
        fullWidth: !0,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 0,
            bottom: 0,
            left: 0
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });




//#chart_widget_6



    new Chartist.Line("#chart_widget_6", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 3.5, 5, 4, 5.5, 3.8, 4.6]
        ]
    }, {
        low: 0,
        showArea: 1,
        showPoint: !0,
        showLine: !0,
        fullWidth: !0,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 0,
            bottom: 0,
            left: 0
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });




//#chart_widget_7


    const chart_widget_7 = document.getElementById("chart_widget_7").getContext('2d');
    //generate gradient
    const chart_widget_7gradientStroke = chart_widget_7.createLinearGradient(0, 0, 0, 250);
    chart_widget_7gradientStroke.addColorStop(0, "#c00a27");
    chart_widget_7gradientStroke.addColorStop(1, "#000080");

    // chart_widget_7.attr('height', '100');

    new Chart(chart_widget_7, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
                    borderColor: chart_widget_7gradientStroke,
                    borderWidth: "0",
                    backgroundColor: chart_widget_7gradientStroke, 
                    hoverBackgroundColor: chart_widget_7gradientStroke
                }
            ]
        },
        options: {
            legend: false,
            responsive: true, 
            maintainAspectRatio: false,  
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        display: false, 
                        max: 100, 
                        min: 0, 
                        stepSize: 10
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    barPercentage: 0.6, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });





//#chart_widget_8


    new Chartist.Line("#chart_widget_8", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
        ]
    }, {
        low: 0,
        showArea: !1,
        showPoint: !0,
        showLine: !0,
        fullWidth: !0,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 0,
            bottom: 0,
            left: 0
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });




//#chart_widget_9


    const chart_widget_9 = document.getElementById("chart_widget_9").getContext('2d');

    new Chart(chart_widget_9, {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],
            datasets: [{
                label: "Sales Stats",
                backgroundColor: "#d2f5f9",
                borderColor: '#00abc5',
                pointBackgroundColor: '#00abc5',
                pointBorderColor: '#00abc5',
                pointHoverBackgroundColor: '#00abc5',
                pointHoverBorderColor: '#00abc5',
                data: [20, 10, 18, 15, 32, 18, 15, 22, 8, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17]
            }]
        },
        options: {
            title: {
                display: !1
            },
            tooltips: {
                intersect: !1,
                mode: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            legend: {
                display: !1
            },
            responsive: !0,
            maintainAspectRatio: !1,
            hover: {
                mode: "index"
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Month"
                    }
                }],
                yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Value"
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
            },
            elements: {
                line: {
                    tension: .15
                },
                point: {
                    radius: 2,
                    borderWidth: 1
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 5,
                    bottom: 0
                }
            }
        }
    });




//#chart_widget_10


    const chart_widget_10 = document.getElementById("chart_widget_10").getContext('2d');

    new Chart(chart_widget_10, {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: "Sales Stats",
                backgroundColor: "#75B432",
                borderColor: '#75B432',
                pointBackgroundColor: '#75B432',
                pointBorderColor: '#75B432',
                pointHoverBackgroundColor: '#75B432',
                pointHoverBorderColor: '#75B432',
                borderWidth: 0, 
                data: [20, 10, 18, 10, 32, 15, 15, 22, 18, 6, 12, 13]
            }]
        },
        options: {
            title: {
                display: !1
            },
            tooltips: {
                intersect: !1,
                mode: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            legend: {
                display: !1
            },
            responsive: !0,
            maintainAspectRatio: !1,
            hover: {
                mode: "index"
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Month"
                    }
                }],
                yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Value"
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
            },
            elements: {
                line: {
                    tension: .7
                },
                point: {
                    radius: 0,
                    borderWidth: 0
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 5,
                    bottom: 0
                }
            }
        }
    });





//#chart_widget_11


    const chart_widget_11 = document.getElementById("chart_widget_11").getContext('2d');

    new Chart(chart_widget_11, {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "Sales Stats",
                backgroundColor: "rgba(192, 10, 39, .5)",
                borderColor: '#c00a27',
                pointBackgroundColor: '#c00a27',
                pointBorderColor: '#c00a27',
                pointHoverBackgroundColor: '#c00a27',
                pointHoverBorderColor: '#c00a27',
                data: [0, 18, 14, 24, 16, 30]
            }]
        },
        options: {
            title: {
                display: !1
            },
            tooltips: {
                intersect: !1,
                mode: "nearest",
                xPadding: 5,
                yPadding: 5,
                caretPadding: 5
            },
            legend: {
                display: !1
            },
            responsive: !0,
            maintainAspectRatio: !1,
            hover: {
                mode: "index"
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Month"
                    }, 
                    ticks: {
                        max: 30, 
                        min: 0
                    }
                }],
                yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Value"
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
            },
            elements: {
                line: {
                    tension: .15
                },
                point: {
                    radius: 2,
                    borderWidth: 1
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    });



//#chart_widget_14


    const chart_widget_14 = document.getElementById("chart_widget_14");
    
    chart_widget_14.height = 200;

    new Chart(chart_widget_14, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [55, 30, 90, 41, 86, 45, 80],
                    borderColor: '#00abc5',
                    borderWidth: "2",
                    backgroundColor: 'transparent',  
                    pointBackgroundColor: '#00abc5', 
                    pointRadius: 0
                }
            ]
        },
        options: {
            legend: false, 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 0, 
                        display: false, 
                    }, 
                    gridLines: {
                        drawBorder: false, 
                        display: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    ticks: {
                        padding: 0, 
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }]
            }
        }
    });




//#chart_widget_15


    const chart_widget_15 = document.getElementById("chart_widget_15");
    
    chart_widget_15.height = 200;

    new Chart(chart_widget_15, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 60, 30, 71, 26, 85, 50],
                    borderColor: '#75B432',
                    borderWidth: "2",
                    backgroundColor: 'transparent',  
                    pointBackgroundColor: '#75B432', 
                    pointRadius: 0
                }
            ]
        },
        options: {
            legend: false, 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 0, 
                        display: false, 
                    }, 
                    gridLines: {
                        drawBorder: false, 
                        display: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    ticks: {
                        padding: 0, 
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }]
            }
        }
    });




//#chart_widget_16


    const chart_widget_16 = document.getElementById("chart_widget_16");
    
    chart_widget_16.height = 345;

    new Chart(chart_widget_16, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 60, 30, 71, 26, 85, 50],
                    borderColor: 'rgba(52, 191, 163, 1)',
                    borderWidth: "2",
                    backgroundColor: 'rgba(52, 191, 163, 1)',  
                    pointBackgroundColor: 'rgba(52, 191, 163, 1)', 
                    pointRadius: 0
                }
            ]
        },
        options: {
            legend: false, 
            responsive: true, 
            maintainAspectRatio: false,
            tooltips: {
                intersect: !1,
                mode: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            }, 
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 0, 
                        display: false, 
                    }, 
                    gridLines: {
                        drawBorder: false, 
                        display: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    ticks: {
                        padding: 0, 
                        display: false, 
                        beginAtZero: true
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }]
            }
        }
    });



//#chart_widget_17


    let data = [];
    const totalPoints = 50;

	function getRandomData() {
		if (data.length > 0)
			data = data.slice(1);
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;
			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}
			data.push(y);
		}
		const res = [];
		for (let i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}
		return res;
	}

	// Set up the control widget
	const updateInterval = 1000;

	const chart = $.plot('#chart_widget_17', [getRandomData()], {
		colors: ['#00abc5'],
		series: {
			lines: {
				show: true,
				lineWidth: 0,
				fill: 0.9
			},
			shadowSize: 0	// Drawing is faster without shadows
		},
		grid: {
			borderColor: 'transparent',
			borderWidth: 0,
            labelMargin: 0
		},
		xaxis: {
			color: 'transparent',
			font: {
				size: 10,
				color: '#fff'
            }
		},
		yaxis: {
			min: 0,
			max: 100,
			color: 'transparent',
			font: {
				size: 10,
				color: '#fff'
            }
		}
	});

	function update_chart() {
		chart.setData([getRandomData()]);
		chart.draw();
		setTimeout(update_chart, updateInterval);
    }
    
	update_chart();


})(jQuery);

