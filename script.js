const menuBox = document.querySelector(".menu input");
const menuBtn = document.querySelector(".menu .img");
var mainImg = document.querySelector(".main-img");

const APIkey = "ca07b0f5326063d20135d3b71a1260bb";
const APIcall = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APIkey}&q=`;

// GET DATA FROM API AND UPDATE INNERHTML
async function getWeather (city) {
    const response = await fetch(APIcall + city);
    var data = await response.json();

    console.log(data);

    document.querySelector(".mid h1").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".mid h2").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds")
        mainImg.src = "images/clouds.png";
    else if (data.weather[0].main == "Clear")
        mainImg.src = "images/clear.png";
    else if (data.weather[0].main == "Rain")
        mainImg.src = "images/rain.png";
    else if (data.weather[0].main == "Drizzle")
        mainImg.src = "images/drizzle.png";
    else if (data.weather[0].main == "Mist")
        mainImg.src = "images/mist.png";
    else if (data.weather[0].main == "Snow")
        mainImg.src = "images/snow.png";

    menuBox.value = '';
    
    document.querySelector(".weather").style.display = "block";
}

// CALL "getWeather()" RIGHT AFTER CLICK ON "menuBtn"
menuBtn.addEventListener("click", ()=>{
    getWeather(menuBox.value);
})

menuBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        getWeather(menuBox.value);
});