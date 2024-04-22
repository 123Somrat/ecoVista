import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function LOcationLayout({
    children,
    airQualityIndex
  }: Readonly<{
    children: React.ReactNode;
    airQualityIndex : React.ReactNode
  }>) {
    return (
      <div className="wrapper">
       {children}
       {airQualityIndex}
      </div>
     
    
    );
  }