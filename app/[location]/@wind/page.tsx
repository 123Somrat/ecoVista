import WindComponent from "@/app/components/WindComponent";
import { SearchParams } from "@/lib/types";

export default function WindPage({params,searchParams:{longitude,latitude}}:SearchParams) {
  return <WindComponent lat={latitude} lon={longitude}/>;
}
