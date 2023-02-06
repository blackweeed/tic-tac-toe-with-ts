type Props = {
  player: string;
  index: number;
  handleClick: (e: any) => void;
};

function Square({ player, index, handleClick }: Props) {
  const scale = player ? "scale-100" : "scale-0";
  const textColor = player === "X" ? "text-yellow-200" : "text-fuchsia-300";
  const hoverStyle = "transition duration-500 hover:scale-105 transform";
  return (
    <div
      data-cell-index={index}
      className={`h-36 border-solid border-4 border-slate-200 text-7xl text-center flex justify-center item-center items-center cursor-pointer ${hoverStyle}`}
      onClick={handleClick}
    >
      <span
        data-cell-index={index}
        className={`transform transition-none duration-150 ease-out ${scale} ${textColor}`}
      >
        {player}
      </span>
    </div>
  );
}

export default Square;
