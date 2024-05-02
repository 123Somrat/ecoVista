"use client";
import { getLocationLanList } from "@/lib/getLOcationInfo";
import { location } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LocationSwitcher() {
  // Location Switcher state
  const [showLocationLists, setShowLocationList] = useState<boolean>(false);
  // Hold fetch location
  const [locations, setLocations] = useState<location[]>([]);

  // Fetching location data
  useEffect(() => {
    try {
      const fetchLocation = async () => {
        const locationsList = await getLocationLanList();
        setLocations(locationsList);
      };
      fetchLocation();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showLocationList = () => {
    setShowLocationList(!showLocationLists);
  };

  return (
    <div className="relative">
      <button onClick={showLocationList}>
        <Image
          className="size-9"
          src="./link.svg"
          alt="link icon"
          width={18}
          height={18}
        />
      </button>
      {showLocationLists && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((info) => (
              <li key={info.name} className="text-black">
                <Link
                  href={`/${info.name}?latitude=${info.latitude}&longitude=${info.longitude}`}
                >
                {info.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
