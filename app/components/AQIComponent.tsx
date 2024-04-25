import { getAirQualityData } from "@/lib/weather-info"

type propTypes = {
    lat:string,
    lon :string
}


export default  async function  AQIComponent({lat,lon}:propTypes) {
    const aqiData = await getAirQualityData(lat,lon);
    console.log(aqiData)
  return (
    <div>AQIComponent</div>
  )
}
