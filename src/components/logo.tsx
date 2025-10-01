import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* <div className="relative h-8 w-8">
        <Image
          src={logo}
          fill
          className="dark:hidden"
          alt="Laboratory Management System"
          role="presentation"
          quality={100}
        />

        <Image
          src={darkLogo}
          fill
          className="hidden dark:block"
          alt="Laboratory Management System"
          role="presentation"
          quality={100}
        />
      </div> */}
      <span className="text-xl font-bold text-black dark:text-white">DVL Quatest</span>
    </div>
  );
}
