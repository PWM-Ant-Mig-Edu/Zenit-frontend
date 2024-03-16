document.addEventListener('DOMContentLoaded', function() {
    // Fetching data from JSON file
    fetch('../src/json/statistics.json')
        .then(response => response.json())
        .then(data => {
            const statisticsContainer = document.getElementById('statistics-container');

            // Displaying statistics
            data.statistics.forEach(statistic => {
                const statisticElement = document.createElement('div');
                statisticElement.classList.add('statistic');

                const nameSpan = document.createElement('span');
                nameSpan.textContent = statistic.name;
                statisticElement.appendChild(nameSpan);

                const valueSpan = document.createElement('span');
                valueSpan.textContent = statistic.value;
                statisticElement.appendChild(valueSpan);

                statisticsContainer.appendChild(statisticElement);
            });

            // Rendering the chart
            var chartData = data.chartData;

            var chartContainer = document.getElementById("graph");
            chartContainer.style.height = "50vh";

            var chart = new CanvasJS.Chart("graph", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Compra de Tickets de la Semana"
                },
                axisY: {
                    title: "Tickets Vendidos",
                    includeZero: false
                },
                axisX: {
                    title: "Día de la Semana"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "#,##0.## tickets",
                    dataPoints: chartData
                }]
            });

            chart.options.responsive = true;
            chart.render();
        })
        .catch(error => console.error('Error fetching data:', error));
});
