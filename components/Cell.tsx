import Image from "next/image";

interface CellProps {
  type: CellType;
  index: number;
  playersPositions: number[];
}

interface PlayerIconProps {
  player: number;
}

const Cell: React.FC<CellProps> = ({type, index, playersPositions}) => {
  return <div className={"cell " + type} data-index={index}>
    {playersPositions.includes(index)
      ? <PlayerIcon player={playersPositions.indexOf(index)+1} />
      : null
    }
  </div>
}

const PlayerIcon: React.FC<PlayerIconProps> = ({player}) => {
  return <div className="player">
    <Image src={"/assets/cells/player-icon-" + player + ".png"} alt="player" width={35} height={35} />
  </div>
};

export default Cell;