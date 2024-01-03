import { useModal } from "../../hooks/useModal";
import MineSweeper from "./MineSweeper";
import MineSweeperHeader from "./MineSweeperHeader";

const MineSweeperIntro = () => {
  const { actions } = useModal();

  const mineSweeperRunner = () => {
    actions.open(MineSweeperHeader, MineSweeper);
  };
  
  return (
    <div className="mine-sweeper-intro h-screen flex justify-center items-center pl-[40px] pr-[40px]">
      <button onClick={mineSweeperRunner}>지뢰 찾기</button>
    </div>
  );
};

export default MineSweeperIntro;