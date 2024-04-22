import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GridBackground } from "@/components/ui/GridBackground";
import { HeroHeading } from "@/components/ui/HeroHeading";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Features from "@/components/ui/Features";
import homeState from "@/atom/homeState";
import featuresItems from "@/atom/featureItems";
import {
  handleOnMove,
  updateLastMousePosition,
  originPosition,
} from "@/mouseFollower/main";

import "@/mouseFollower/main.css";

function App() {
  const words = `PassTool is a Password tooling Utilities WebApp In Which you can generate your own Passwords and also can Check Strength of your Passwords.`;
  const home: boolean = useRecoilValue(homeState);
  const projects = useRecoilValue(featuresItems);

  window.onmousemove = (e: MouseEvent) => handleOnMove(e);
  window.ontouchmove = (e: Event) => {
    if (e instanceof TouchEvent) {
      handleOnMove(e as TouchEvent); // Type assertion
    }
  };
  document.body.onmouseleave = () => updateLastMousePosition(originPosition);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        id="app"
        className="w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-auto"
      >
        <GridBackground>
          {home === true ? (
            <div id="home" className="w-full h-full relative">
              <div className="w-full flex items-center justify-center relative top-0">
                <HeroHeading>PassTool</HeroHeading>
              </div>
              <div className="w-full flex items-center justify-center relative p-8">
                <TextGenerateEffect className="text-center" words={words} />
              </div>
              <div className="w-full flex justify-center items-center">
                <HoverEffect items={projects} />
              </div>
            </div>
          ) : (
            <div id="gencheck w-full h-full bg-red-500">
              <div className="w-full flex items-center justify-center relative top-0">
                <HeroHeading>PassTool</HeroHeading>
              </div>
              <div className="w-full h-full relative z-[999]">
                <Features />
              </div>
            </div>
          )}
        </GridBackground>
      </div>
    </ThemeProvider>
  );
}

export default App;
