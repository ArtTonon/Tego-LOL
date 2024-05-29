// components/Video.tsx
import React, { useRef } from 'react';

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        className="w-full cursor-pointer"
        onClick={handlePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
