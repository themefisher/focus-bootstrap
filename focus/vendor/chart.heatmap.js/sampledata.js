var getColorForPercentage = function (pct, minVal, maxVal, colorGradiant) {
    var finalColorPercent = pct;

    if (minVal >= 0 && maxVal > 0 && maxVal > minVal) {
        finalColorPercent = (pct - minVal) / (maxVal - minVal) * 100;
    }

    if (colorGradiant == "YellowToRed") {
        return getYellowToRedColor(20, finalColorPercent);
    } else if (colorGradiant == "GreenToBlue") {
        return getGreenToBlueColor(20, finalColorPercent);
    } else {
        return getGreenToBlueColor(20, finalColorPercent);
    }
}

var stateList = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];
var globalXAxesTitle = "";
var globalYAxesTitle = "";
var globalRadiusRawData = [];

var myChartLabels = ["AK", "DE", "HI", "ME", "MT", "ND", "NH", "RI", "SD"];
var myChartData = {
    labels: myChartLabels,
    datasets: [{
        label: ['American Indian','Alaska Native'],
        data: [30748, 694, 872, 1339, 17349, 9477, 790, 1991, 16099]
    }, {
        label: 'Asian',
        data: [8132, 4776, 59916, 2838, 1410, 1603, 5753, 4130, 2412]
    }, {
        label: 'Black',
        data: [4476, 42305, 3957, 5919, 1613, 3636, 3750, 11314, 3776]
    }, {
        label: 'Hispanic',
        data: [8632, 19247, 18285, 3189, 5592, 3648, 8940, 31871, 6110]
    }, {
        label: 'Multi Race',
        data: [11247, 3477, 18871, 2956, 3111, 1266, 3573, 5966, 3767]
    }, {
        label: ['Native Hawaiian', 'Pacific Islander'],
        data: [3260, 229, 60005, 304, 486, 414, 309, 308, 207]
    }, {
        label: 'White',
        data: [62945, 64673, 25635, 158810, 115704, 84611, 164485, 85364, 103293]
    }]
};

