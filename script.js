function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "8a4ccc9c3e24fc8352ea545acded7cf6";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerText = "City not found";
                return;
            }

            document.getElementById("result").innerHTML = `
                <p><b>City:</b> ${data.name}</p>
                <p><b>Temperature:</b> ${data.main.temp} °C</p>
                <p><b>Weather:</b> ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            document.getElementById("result").innerText = "Error fetching data";
        });
}
