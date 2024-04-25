import { getAirQualityData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

type propTypes = {
  lat: string;
  lon: string;
};

export default async function AQIComponent({ lat, lon }: propTypes) {
  const { main, components } = await getAirQualityData(lat, lon);
  console.log(components)
  const { co , no , no2 , o3 , so2 ,  pm2_5 }=components
  return (
  
    <Card>

      <h6 className="feature-name">Air Pollution & Quality</h6>

      <div className="mt-3 space-y-2 lg:space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            Good
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {co} µg/m³
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {no} ppm
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {no2} ppm
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {o3} µg/m³
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {so2} ppm
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            { pm2_5} µg/m³
          </span>
        </div>
      </div>
    
    </Card>
    
  );
}
