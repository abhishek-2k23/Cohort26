import { useState, useCallback } from 'react';

export type Player = 'X' | 'O';
export type Board = (Player | null)[];

export interface WinResult {
  winner: Player;
  line: [number, number, number];
}

const WINS: [number, number, number][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function checkWinner(board: Board): WinResult | null {
  for (const [a, b, c] of WINS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line: [a, b, c] };
    }
  }
  return null;
}

export function useGame() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winResult, setWinResult] = useState<WinResult | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  const handleCellClick = useCallback(
    (index: number) => {
      if (board[index] || winResult || isDraw) return;
      const next = [...board];
      next[index] = currentPlayer;
      setBoard(next);
      const result = checkWinner(next);
      if (result) {
        setWinResult(result);
      } else if (next.every(Boolean)) {
        setIsDraw(true);
      } else {
        setCurrentPlayer((p) => (p === 'X' ? 'O' : 'X'));
      }
    },
    [board, currentPlayer, winResult, isDraw]
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinResult(null);
    setIsDraw(false);
    setGameKey((k) => k + 1);
  }, []);

  return { board, currentPlayer, winResult, isDraw, handleCellClick, resetGame, gameKey };
}
