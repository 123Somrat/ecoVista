import { propTypes } from "@/lib/types";
import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function WindComponent({ lat, lon }: propTypes) {
  const { speed, deg, gust } = await getWindData(lat, lon);

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={18}
          height={18}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degress</span>
      </div>
    </Card>
  );
}
