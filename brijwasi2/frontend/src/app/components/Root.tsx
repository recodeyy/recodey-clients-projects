import { useState, useEffect, ReactNode } from "react";
import Navigation from "./Navigation";
import OpeningCurtain from "./OpeningCurtain";

export default function Root({ children }: { children: ReactNode }) {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showCurtain && <OpeningCurtain />}
      <div className="min-h-screen bg-[#d5e7b5]">
        <Navigation />
        {children}
      </div>
    </>
  );
}
