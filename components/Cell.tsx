interface CellProps {
  type: CellType;
  index: number;
  playerPos: number;
}

const Cell: React.FC<CellProps> = ({type, index, playerPos}) => {
  return <div className={"cell " + type} data-index={index}>
    {playerPos === index
      ? <PlayerIcon />
      : null
    }
  </div>
}

const PlayerIcon = () => {
  return <div className="player" />
};

export default Cell;