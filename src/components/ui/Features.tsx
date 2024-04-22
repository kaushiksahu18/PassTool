import { useRecoilValue } from "recoil";
import { HoverEffect } from "./card-hover-effect";
import featuresItems from "@/atom/featureItems";

function Features() {
  const projects = useRecoilValue(featuresItems);

  return (
    <div>
      <div
        id="left-up"
        className="w-full md:min-w-[160px] md:w-1/5 h-full"
      >
        <HoverEffect items={projects} full={false} />
      </div>
    </div>
  );
}

export default Features;
