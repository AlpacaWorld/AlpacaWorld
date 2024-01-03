import MineSweeperNode from "../components/MineSweeper/MineSweeperNode";

export const createMineArrs = () => {
  const calIdx = (num: number) => [Math.floor(num / 20), num % 20];
  const calNum = (i: number, j: number) => 20 * i + j;
  const delta = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const isMine = Array(400).fill(false);
  const numOfMines = Array(400).fill(0);
  let count = 70;
  let num;
  while (count > 0) {
    num = Math.floor(Math.random() * 400);
    if (isMine[num]) continue;
    count--;
    isMine[num] = true;
    const [i, j] = calIdx(num);
    for (let [di, dj] of delta) {
      const [ni, nj] = [i + di, j + dj];
      const number = calNum(ni, nj);
      if (number < 0 || number >= 400) continue;
      numOfMines[number]++;
    }
  }
  return [isMine, numOfMines] as any[][];
};

export const createNodes = () => {
  const [isMine, numOfMines] = createMineArrs() as any[][];
  let nodes = [];
  for (let i = 0; i < 400; i++) {
    nodes.push(
      <MineSweeperNode mine={isMine[i]} numOfMine={numOfMines[i]} key={i} />
    );
  }
  return nodes;
};

export const nodeClickHandler = (
  target: HTMLElement,
  mine: boolean,
  numOfMine: number
) => {
  if (target.classList.contains("mine-sweeper-node-color")) {
    target.classList.remove("mine-sweeper-node-color");
    if (mine) return;
    if (numOfMine > 0) {
      target.innerHTML = numOfMine.toString();
    } else {
      // 주변에 지뢰가 없는 칸을 클릭했을때
    }
  }
};
