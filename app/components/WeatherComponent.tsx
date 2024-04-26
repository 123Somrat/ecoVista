import { propTypes } from "@/lib/types";
import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function WeatherComponent({ lat, lon }: propTypes) {
  const { main, description } = await getWeatherData(lat, lon);

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          width={18}
          height={18}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
}
