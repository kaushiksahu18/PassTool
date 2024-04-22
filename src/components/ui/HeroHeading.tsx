import { useSetRecoilState } from "recoil";

import { SparklesCore } from "@/components/ui/sparkles";
import homeState from "@/atom/homeState";

export function HeroHeading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const home: Function = useSetRecoilState(homeState);

  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-md ${className}`}
    >
      <h1
        className="text-[6vw] lg:text-[4vw] font-bold text-center text-sky-500 
       relative z-20"
        onClick={() => home(true)}
      >
        {children}
      </h1>
      <div className="w-1/2 h-[4vw] lg:h-[2vw] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
