import { useCallback, useEffect, useState } from "react";
import GameIntroDesc from "./GameIntroDesc";
import GamePreview from "./GamePreview";

const GameIntro = () => {
  const [isPageRevealed, setIsPageRevealed] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const onScroll = useCallback(() => {
    setIsPageRevealed(window.scrollY >= windowHeight / 2);
  }, [windowHeight]);

  const onResize = useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [onScroll, onResize]);

  return (
    <div className="gameIntro flex justify-center w-screen h-screen pl-[40px] pr-[40px] wave-pattern">
      <GamePreview />
      <GameIntroDesc isReveal={isPageRevealed} />
    </div>
  );
};

export default GameIntro;

