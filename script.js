const apiKey = "84e703883ea9957adb5ff8682f0a5e38";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 404) {
                document.getElementById("weatherResult").innerHTML =
                    "City not found ❌";
                return;
            }

            const temp = data.main.temp;
            const weather = data.weather[0].description;
            const humidity = data.main.humidity;

            document.getElementById("weatherResult").innerHTML = `
                <h3>${city}</h3>
                <p>🌡 Temperature: ${temp} °C</p>
                <p>☁ Weather: ${weather}</p>
                <p>💧 Humidity: ${humidity}%</p>
            `;
        })
        .catch(() => {
            document.getElementById("weatherResult").innerHTML =
                "Error fetching data ❌";
        });
}
