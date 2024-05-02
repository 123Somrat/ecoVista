import { getLocationInfoData } from "@/lib/getLOcationInfo";
import { propTypes } from "@/lib/types";
import Card from "./Card";
import LocationSwitcher from "./LocationSwitcher";
export default async function LocationInfo({ lat, lon }: propTypes) {
  const { continent, countryName, city } = await getLocationInfoData(lat, lon);

  return (
    <Card>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {continent}
          </h2>
        </div>
        <LocationSwitcher/>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {countryName} | {city}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </Card>
  );
}
