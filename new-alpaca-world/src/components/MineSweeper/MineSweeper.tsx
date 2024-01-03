import { createNodes } from "../../hooks/useMineSweeper";

const MineSweeper = () => {
  return <div className="mine-sweeper">{createNodes()}</div>;
};

export default MineSweeper;
