//API key = 5816228b053c1baee15f923fb5591d9b
const apiKey="5816228b053c1baee15f923fb5591d9b";

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";


//Fetch api
async function checkWeather(cityName){
    const response=await fetch(apiUrl+`&q=${cityName}`+`&appid=${apiKey}`);

    if(response.status==404)
    {
        error.style.display="block";
        weather.style.display="none";
    }else{
        const data=await response.json();

        console.log(data);

       temp.innerHTML=`${Math.round(data.main.temp)}°C`;

       city.innerHTML=cityName;

        humidity.innerHTML=`${data.main.humidity}%`;

        wind.innerHTML=`${data.wind.speed} kmph`;

        let icon=data.weather[0].main;

        if(icon=="Clear")
        {
            img.src="./images/clear.png";
        }else if(icon=="Clouds")
        {
            img.src="./images/clear.png";
        }else if(icon=="Drizzle")
        {
            img.src="./images/drizzle.png";
        }else if(icon=="Mist")
        {
            img.src="./images/mist.png";
        }else if(icon=="Rain")
        {
            img.src="./images/rain.png";
        }else{
            img.src="./images/snow.png";
        }
        
        weather.style.display="block";

        error.style.display="none";
    }
}

const temp=document.querySelector(".temp");

const cityName=document.querySelector("input");

const btn=document.querySelector("button");

const city=document.querySelector(".city");

const humidity=document.querySelector(".humidity");

const wind=document.querySelector(".wind");

const p=document.querySelector(".error");

const weather=document.querySelector(".weather");

const error=document.querySelector(".error");

const img=document.querySelector(".weather-icon");

btn.addEventListener("click",()=>{
    //console.log(cityName.value);
    checkWeather(cityName.value);
});
