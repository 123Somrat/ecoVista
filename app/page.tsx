import { useEffect, useState } from "react";
import LocationDetector from "./components/LocationDetector";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";


export default function HomePage() {


  return <LocationDetector />
}
