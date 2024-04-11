import React from "react";
import { useState } from "react";
import playIcon from "../images/Vector.png";
import videoClip from "../videoClip.mp4";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="lg:container lg:mx-auto px-10 md:px-8 ">
      <h1 className=" font-[roboto] md:mt-24 mt-4 md:mb-10 mb-4 font-medium text-[#424244] text-[22px] md:text-[40px]">
        Watch Our Memorable Trips
      </h1>
      <div className="relative">
        <video
          className="w-full rounded-[10px]"
          controls={isPlaying}
          onClick={handleVideoClick}
        >
          <source src={videoClip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={playIcon} alt="Play" className="w-16 h-16" />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoComponent;
