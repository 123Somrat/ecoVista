import AQIComponent from "@/app/components/AQIComponent";
import React from "react";

interface SearchParamsDetails {
  longitude: string;
  latitude: string;
}

// Define an interface for the searchParams prop which includes the nested searchParams
interface SearchParams {
  params: string;
  searchParams: SearchParamsDetails;
}

export default function AirQualityIndex({
  params,
  searchParams: { latitude, longitude },
}: SearchParams) {
  return <AQIComponent lat={latitude} lon={longitude} />;
}
