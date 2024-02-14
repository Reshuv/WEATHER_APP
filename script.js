async function fetchWeatherData(cityName){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d954360f7eb2efceeacbef45f36d06c9`;
    const response = await fetch(url);
    const data = await response.json();
    let city = document.getElementById("city");
    city.innerHTML=data.name;
    let windSpeed = document.getElementById("wind_speed");
    windSpeed.innerHTML=data.wind.speed+" km/hr ";
    let humidity=document.getElementById("humidity");
    humidity.innerHTML=data.main.humidity+ "g/kg";
    let temp = document.getElementById("temp");
    temp.innerHTML = Math.round((data.main.temp)-273.15)+"°C";
    console.log(data);
}
//fetchWeatherData()

function fetchCity(){
    let cityName=document.getElementById("city_name");
    if(cityName.value===""){
        alert("Enter a city name");
    }
    else{
        fetchWeatherData(cityName.value);
        cityName.value="";
    }
}