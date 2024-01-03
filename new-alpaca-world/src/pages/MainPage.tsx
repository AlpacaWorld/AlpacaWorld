import GameIntro from "../components/GameIntro/GameIntro";
import MainIntro from "../components/MainIntro/MainIntro";
import MineSweeperIntro from "../components/MineSweeper/MineSweeperIntro";

const MainPage = () => {
  return (
    <div className="main-page">
      <MainIntro />
      <GameIntro />
      <MineSweeperIntro />
    </div>
  );
};

export default MainPage;

