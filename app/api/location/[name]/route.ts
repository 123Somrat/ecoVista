import { getLocationByName } from "../location.utils";
import type { NextApiRequest, NextApiResponse } from "next";
type location = {
    name: string;
    longitude: number;
    latitude: number;
  };
export async function GET(
  _request: NextApiRequest,
  { params }: { params: { name: string } }
,_response:NextApiResponse<location>) {
  const locationName = params?.name;
  const locationData = getLocationByName(locationName);
  return Response?.json(locationData);
}
