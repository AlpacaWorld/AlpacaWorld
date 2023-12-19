import React from "react";

interface IGamePreviewCardProps {
  background: string;
}

const GamePreviewCard: React.FC<IGamePreviewCardProps> = ({ background }) => {
  return (
    <div
      className={`
                rounded-lg
                ${background}
                bg-slate-100
                bg-cover
                bg-center
                shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]
                
                lg:w-[256px]
                lg:h-[456px]
                lg:mb-[24px]

                md:w-[228px]
                md:h-[406px]
                md:mb-[24px]
                `}
    ></div>
  );
};

export default GamePreviewCard;

