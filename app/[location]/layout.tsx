import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function LOcationLayout({
  children,
  airQualityIndex,
  weather,
  temparature,
  wind,
}: Readonly<{
  children: React.ReactNode;
  airQualityIndex: React.ReactNode;
  temparature: React.ReactNode;
  weather: React.ReactNode;
  wind: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="backround image"
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {airQualityIndex}
            {wind}
            {temparature}
          </div>
        </div>
      </main>
    </div>
  );
}
