import AQIComponent from "@/app/components/AQIComponent";
import { SearchParams } from "@/lib/types";
import React from "react";

export default function AirQualityIndex({
  params,
  searchParams: { latitude, longitude },
}: SearchParams) {
  return <AQIComponent lat={latitude} lon={longitude} />;
}
