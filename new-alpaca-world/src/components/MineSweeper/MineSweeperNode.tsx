import { nodeClickHandler } from "../../hooks/useMineSweeper";

const MineSweeperNode: React.FC<{ mine: boolean, numOfMine: number }> = ({ mine, numOfMine }) => {
  const clickHandler = (event: any) => {
    nodeClickHandler(event.target, mine, numOfMine);
  };
  return (
    <div
      className={`mine-sweeper-node mine-sweeper-node-color ${
        mine ? "bg-yellow-600" : "bg-amber-800"
      } flex justify-center align-middle`}
      onClick={clickHandler}
    ></div>
  );
};

export default MineSweeperNode;
