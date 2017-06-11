import './utils';

var ctx = document.getElementById("myChart").getContext('2d');
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
var config = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [
          randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()
        ],
        backgroundColor: [
          window.chartColors.red, window.chartColors.orange, window.chartColors.yellow, window.chartColors.green, window.chartColors.blue
        ],
        label: 'Dataset 1'
      }
    ],
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
  },
  options: {
    responsive: true
  }
};
var myChart = new Chart(ctx, config);
