import { ReactNode } from "react";
import GamePreview from "./GamePreviewCard";
import GamePreviewCard from "./GamePreviewCard";

interface IGamePreviewSliderProps {
  styles: string;
  backgrounds: string[];
}

const GamePreviewSlider: React.FC<IGamePreviewSliderProps> = ({ styles, backgrounds }) => {
  return (
    <div
      className={`
                ${styles}
                animate-slideUp
                lg:w-[256px]
                lg:h-[1440px]
                
                md:w-[228px]
                md:h-[1290px]
                `}
    >
      {backgrounds.map((bg, idx) => (
        <GamePreviewCard key={idx} background={bg} />
      ))}

      {backgrounds.map((bg, idx) => (
        <GamePreviewCard key={idx * Math.random()} background={bg} />
      ))}
    </div>
  );
};

export default GamePreviewSlider;

