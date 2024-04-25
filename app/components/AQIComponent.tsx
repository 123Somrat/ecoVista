import { getAirQualityData } from "@/lib/weather-info";
import Card from "./Card";

type propTypes = {
  lat: string;
  lon: string;
};

export default async function AQIComponent({ lat, lon }: propTypes) {
  const aqiData = await getAirQualityData(lat, lon);

  return <Card>{aqiData}</Card>;
}
