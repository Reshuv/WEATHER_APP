async function fetchWeatherData(cityName){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d954360f7eb2efceeacbef45f36d06c9`;
    const response = await fetch(url);
    const data = await response.json(response);
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