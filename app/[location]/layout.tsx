import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function LOcationLayout({
    children,
    airQualityIndex,
    weather,
    temparature,
    wind,
  }: Readonly<{
    children: React.ReactNode;
    airQualityIndex : React.ReactNode
    temparature : React.ReactNode
    weather : React.ReactNode
    wind : React.ReactNode
  }>) {
    return (
      <div className="wrapper">
       {children}
       {weather}
       {airQualityIndex}
       {wind}
       {temparature}
      </div>
     
    
    );
  }