import GamePreviewSlider from "./GamePreviewSlider";

const GamePreview = () => {
  const leftBgs = ["bg-alpaca01", "bg-alpaca02", "bg-alpaca03"];
  const rightBgs = ["bg-alpaca04", "bg-alpaca05", "bg-alpaca06"];

  return (
    <div className="flex h-full overflow-hidden">
      <GamePreviewSlider styles="mr-[12px]" backgrounds={leftBgs} />
      <GamePreviewSlider styles="ml-[12px] pt-[5rem]" backgrounds={rightBgs} />
    </div>
  );
};

export default GamePreview;

