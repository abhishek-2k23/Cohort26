import type { Player, WinResult } from '../hooks/useGame';
import './GameStatus.css';

interface Props {
  currentPlayer: Player;
  winResult: WinResult | null;
  isDraw: boolean;
}

export default function GameStatus({ currentPlayer, winResult, isDraw }: Props) {
  let message: string;

  if (winResult) {
    message = `${winResult.winner} wins!`;
  } else if (isDraw) {
    message = "It's a draw!";
  } else {
    message = `${currentPlayer}'s turn`;
  }

  return (
    <p
      className={`game-status${winResult || isDraw ? ' game-status--done' : ''}`}
      style={{ filter: 'url(#pencil-sketch)' }}
    >
      {message}
    </p>
  );
}
