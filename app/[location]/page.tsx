import { SearchParams } from "@/lib/types";
import LocationInfo from "../components/LocationInfo";

export default function LocationPage({params,searchParams:{latitude,longitude}}:SearchParams) {
  return <LocationInfo lat={latitude} lon={longitude}/>;
}
