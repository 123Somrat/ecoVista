import WeatherComponent from "@/app/components/WeatherComponent";
import { SearchParams } from "@/lib/types";

export default function WeatherPage({
  params,
  searchParams: { latitude, longitude },
}: SearchParams) {
  return <WeatherComponent lat={latitude} lon={longitude} />;
}
