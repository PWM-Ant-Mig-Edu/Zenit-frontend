window.onload = function () {
    var dataPoints = [
        { label: "Lunes", y: 20 },
        { label: "Martes", y: 35 },
        { label: "Miércoles", y: 40 },
        { label: "Jueves", y: 55 },
        { label: "Viernes", y: 30 },
        { label: "Sábado", y: 45 },
        { label: "Domingo", y: 25 }
    ];

    var chartContainer = document.getElementById("grafico");
    chartContainer.style.height = "50vh";

    var chart = new CanvasJS.Chart("grafico", {
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
            dataPoints: dataPoints
        }]
    });

    chart.options.responsive = true;
    
    chart.render();
}