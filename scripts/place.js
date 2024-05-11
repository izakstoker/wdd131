function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
};

document.querySelector("windchill").textContent = (temperature <= 10 && wind >= 4.8) ? calculateWindChill(temperature, wind) : "N/A";