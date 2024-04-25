import TemparatureComponent from "@/app/components/TemparatureComponent";
import { SearchParams } from "@/lib/types";

export default function TemparaturePage({
  params,
  searchParams: { latitude, longitude },
}: SearchParams) {
  return <TemparatureComponent lat={latitude} lon={longitude} />;
}
