"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
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
  }, [pathName, searchParams,router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="loading image"
            height={500}
            width={500}
            className="border rounded-md my-4"
          />
          <p className="text-center text-4xl">Detecting location......</p>
        </>
      )}
    </div>
  );
}
