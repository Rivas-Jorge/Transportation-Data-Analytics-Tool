document.addEventListener('DOMContentLoaded', function () {
    // Generate the graph
    // Get the chart canvas element
    var chartCanvas = document.getElementById('chart').getContext('2d');

    // Define the data for the bar chart
    var chartData = {
        labels: ['Q1', 'Q2', 'Q3'], // Time periods
        datasets: [
            {
                label: 'Semi Truck Product A', // Label for the first bar
                data: [500, 750, 900], // Transportation volumes for Product A in each time period
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Background color for the first bar
                borderColor: 'rgba(54, 162, 235, 1)', // Border color for the first bar
                borderWidth: 1 // Border width for the first bar
            },
            {
                label: 'Semi Truck Product B', // Label for the second bar
                data: [400, 600, 800], // Transportation volumes for Product B in each time period
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Background color for the second bar
                borderColor: 'rgba(255, 99, 132, 1)', // Border color for the second bar
                borderWidth: 1 // Border width for the second bar
            },
            {
                label: 'Semi Truck Product C', // Label for the third bar
                data: [600, 800, 950], // Transportation volumes for Product C in each time period
                backgroundColor: 'rgba(75, 192, 192, 0.5)', // Background color for the third bar
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for the third bar
                borderWidth: 1 // Border width for the third bar
            }
        ]
    };

    // Define the options for the bar chart
    var chartOptions = {
        responsive: true, // Enable responsiveness
        scales: {
            y: {
                beginAtZero: true // Start the y-axis at zero
            }
        }
    };

    // Create the bar chart
    new Chart(chartCanvas, {
        type: 'bar', // Specify the chart type as bar
        data: chartData,
        options: chartOptions
    });

    // Generate the map
    var map = L.map('map').setView([35.4231658, -97.652507], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Create the initial marker
    var marker = L.marker([35.4231658, -97.652507]).addTo(map).bindPopup("Hello! I am a marker.").openPopup();

    // Function to move the marker
    function moveMarker() {
        var latitude = parseFloat(document.getElementById('latitude').value);
        var longitude = parseFloat(document.getElementById('longitude').value);

        if (!isNaN(latitude) && !isNaN(longitude)) {
            marker.setLatLng([latitude, longitude]).update();
            map.setView([latitude, longitude], 13);
        }
    }

    // Event listener for the move button
    document.getElementById('moveButton').addEventListener('click', moveMarker);
});
function applyFilters() {
    var startDate = document.getElementById('date-range-start').value;
    var endDate = document.getElementById('date-range-end').value;
    var transportMode = document.getElementById('transport-mode').value;
    var productType = document.getElementById('product-type').value;

    console.log("Selected Filters:");
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Transportation Mode:", transportMode);
    console.log("Product Type:", productType);

    // Perform further actions based on the selected filter values
    // such as filtering data, updating charts, or refreshing reports
    // Modify this part according to your specific implementation needs
}
