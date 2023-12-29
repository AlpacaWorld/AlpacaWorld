import { useModal } from "../../hooks/useModal";

const MineSweeperContainer = () => {
  const { actions } = useModal();
  return (
    <div className="mineSweeper h-screen justify-center items-center">
      <button onClick={actions.open}>모달 열기</button>
    </div>
  );
};

export default MineSweeperContainer;