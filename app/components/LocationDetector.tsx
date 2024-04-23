"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function LocationDetector() {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        
        // get the latitude and latitude for current position
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        // set the latitude and longitude in searchParams
        params.set("longitude", longitude.toString());
        params.set("latitude", latitude.toString());

        // set Loading false
        setLoading(false);

        // redirect user
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, searchParams]);

  return (
    <div>
      <h1>Finding your location.....</h1>
    </div>
  );
}
