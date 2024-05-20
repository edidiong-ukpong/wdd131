// scripts.js

// Static values for temperature and wind speed
const temperature = 10; // in °C
const windSpeed = 20; // in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Function to determine and display wind chill
function displayWindChill() {
    let windChillElement = document.getElementById('wind-chill');
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `Wind Chill: ${windChill.toFixed(2)}°C`;
    } else {
        windChillElement.textContent = "Wind Chill: N/A";
    }
}

// Execute the displayWindChill function when the page loads
document.addEventListener('DOMContentLoaded', displayWindChill);
