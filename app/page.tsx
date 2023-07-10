import Image from "next/image";

import nextImage from "@/assets/images/next.svg";
import vercelImage from "@/assets/images/vercel.svg";
import thirteenImage from "@/assets/images/thirteen.svg";

export default function Home() {
  return (
    <main className="flex flex-col justify-evenly items-center p-24 min-h-screen">
      <div className="text-sm max-w-5xl w-full z-[2] font-mono flex justify-between items-center">
        <p className="relative m-0 p-4 bg-gray-100/50 border border-gray-100/30 rounded-lg">
          Get started by editing&nbsp;
          <code className="font-bold font-mono">app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2"
          >
            <span className="font-heading text-2xl">By</span>
            <Image
              src={vercelImage}
              alt="Vercel Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="center">
        <Image
          className="logo"
          src={nextImage}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="thirteen">
          <Image src={thirteenImage} alt="13" width={40} height={31} priority />
        </div>
      </div>
    </main>
  );
}
