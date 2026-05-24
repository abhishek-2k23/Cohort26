import type { Player, WinResult } from '../hooks/useGame';
import Cell from './Cell';
import WinLine from './WinLine';
import './Board.css';

interface Props {
  board: (Player | null)[];
  currentPlayer: Player;
  winResult: WinResult | null;
  isDraw: boolean;
  handleCellClick: (index: number) => void;
}

export default function Board({ board, currentPlayer, winResult, isDraw, handleCellClick }: Props) {
  const winningCells = new Set(winResult?.line ?? []);
  const gameOver = !!winResult || isDraw;

  return (
    <div className="board-wrapper">
      {/* Hand-drawn grid lines */}
      <svg
        className="board-grid"
        viewBox="0 0 300 300"
        aria-hidden="true"
        style={{ filter: 'url(#pencil-sketch)' }}
      >
        <line className="grid-line gl-1" x1="100" y1="10" x2="100" y2="290" />
        <line className="grid-line gl-2" x1="200" y1="10" x2="200" y2="290" />
        <line className="grid-line gl-3" x1="10" y1="100" x2="290" y2="100" />
        <line className="grid-line gl-4" x1="10" y1="200" x2="290" y2="200" />
      </svg>

      {/* 3×3 cell grid */}
      <div className="board-cells">
        {board.map((value, index) => (
          <Cell
            key={index}
            value={value}
            index={index}
            isWinning={winningCells.has(index)}
            currentPlayer={currentPlayer}
            onClick={() => handleCellClick(index)}
            disabled={gameOver}
          />
        ))}
      </div>

      {winResult && <WinLine line={winResult.line} />}
    </div>
  );
}
