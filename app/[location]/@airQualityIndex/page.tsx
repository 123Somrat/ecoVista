import AQIComponent from "@/app/components/AQIComponent";
import React from "react";
//{params }: { params: { location: string } },
//{searchParams}: {searchParams : {latitude : string , longitude : string}}
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
