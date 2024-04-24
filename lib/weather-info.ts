// Fetching weather data
export const getWeatherData = async (lat: string, lon: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const weatherData = await response.json();
    return weatherData?.weather[0];
  } catch (error) {
    console.error(error);
  }
};


// Fetching temparature data
export const getTemparatureData = async (lat: string, lon: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const temparatureData = await response.json();
    return temparatureData?.main;
  } catch (error) {
    console.error(error);
  }
};

// Fetching wind data
export const getWindData = async (lat: string, lon: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const windData = await response.json();
    return windData?.wind;
  } catch (error) {
    console.error(error);
  }
};

// Fetching airquality data

export const getAirQualityData  = async (lat:string,lon:string)=>{
      try{
         const response =await  fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)
         const airqualityData = await response.json()
         return airqualityData?.list[0]

      }catch(error){
         console.log(error)
      }
}