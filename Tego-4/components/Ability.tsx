import React from 'react';
import Image from 'next/image';

interface AbilityProps {
  image: string;
  video: string;
  name: string;
  description: string;
}

const Ability: React.FC<AbilityProps> = ({ image, video, name, description }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Image src={image} alt={name} width={50} height={50} />
        <div className="text-white">
          <h4 className="text-lg font-bold">{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <video src={video} controls width="600" />
    </div>
  );
};

export default Ability;
