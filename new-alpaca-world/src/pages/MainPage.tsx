import React from "react";
import GameIntro from "../components/GameIntro/GameIntro";
import MainIntro from "../components/MainIntro/MainIntro";
import MineSweeperContainer from "../components/MineSweeper/MineSweeperContainer";

const MainPage = () => {
  return (
    <div>
      <MainIntro />
      <GameIntro />
      <MineSweeperContainer />
    </div>
  );
};

export default MainPage;

