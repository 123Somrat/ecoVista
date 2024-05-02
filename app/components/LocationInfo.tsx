import { getLocationInfoData } from "@/lib/getLOcationInfo";
import { propTypes } from "@/lib/types";

export default async function LocationInfo({lat,lon}:propTypes) {
   const data = await getLocationInfoData(lat,lon)
   
 
  return <div>LocationInfo</div>;
}
