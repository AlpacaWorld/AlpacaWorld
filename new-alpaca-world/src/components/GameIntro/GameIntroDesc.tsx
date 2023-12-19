import React from "react";

interface IGameIntroDescProps {
  isReveal: boolean;
}

const GameIntroDesc: React.FC<IGameIntroDescProps> = ({ isReveal }) => {
  const description =
    "온세상 알파카들이 모인 곳이 있어요.\n알파카와 함께하는 다양한 미니게임을 즐기며\n최고 기록을 갱신해보세요!\n뉴 알파카 월드의 게임은 계속해서 업데이트되고 있습니다.";

  return (
    <div
      className={`h-full flex items-center fill-mode-forwards ${isReveal ? "animate-fadeInUp" : "animate-fadeOutDown"}`}
    >
      <div className="ml-20">
        <div className="mb-[40px]">
          <h3 className="text-2xl text-[#C4BfB8] font-bold">모든 알파카단의 천국!</h3>
          <h2 className="text-6xl text-[#C4BfB8] font-extrabold highlight">뉴 알파카 월드</h2>
        </div>
        <div className="text-lg text-[#C4BfB8] font-bold whitespace-pre-wrap">{description}</div>
      </div>
    </div>
  );
};

export default GameIntroDesc;

