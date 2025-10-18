"use client";
import Marquee from "react-fast-marquee";

export default function TopAlertBar() {
  return (
    <div className="bg-primary hover:bg-primary/90 text-white text-sm py-2 shadow-md">
      <Marquee speed={60} gradient={false}>
        <div className="flex items-center gap-2 mx-6">
          {/* <FiAlertTriangle  className="text-yellow-300" size={18} /> */}
          <span className="uppercase tracking-wide font-medium">
            🚧 Our website is currently under development — stay tuned for something amazing! 🚀
          </span>
        </div>
      </Marquee>
    </div>
  );
}
