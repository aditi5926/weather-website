let search = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humadity = document.querySelector('.weather_indicator--humidity>.value');
let wind = document.querySelector('.weather_indicator--wind>.value');
let pressure = document.querySelector('.weather_indicator--pressure>.value');
let image = document.querySelector('.weather_image');
let temp = document.querySelector('.weather_temp');



let weatherAPIKey = 'eb668b0f925a6df0dfd3cd89f0e0f1ff';
let weatherBaseEndpoint='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+ weatherAPIKey;

let getWeatherByCityName = async(city) =>{
  let endpoint = weatherBaseEndpoint + '&q=' + city
  let response = await fetch(endpoint);
  let weather = await response.json();

  return weather;
}

search.addEventListener('keydown', async (e) => {
  if(e.keyCode === 13){
    let weather = await getWeatherByCityName(search.value);
      updateCurrentWeather(weather);
  }
}) 

let updateCurrentWeather = (data) =>{
  city.textContent = data.name + ',' + data.sys.country;
  day.textContent = dayOfWeek();
}

let dayOfWeek = () =>{
 return new Date().toLocaleDateString('en-EN',{'weekday': 'long'});
  
}