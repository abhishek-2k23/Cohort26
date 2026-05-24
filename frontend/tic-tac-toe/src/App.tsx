import { useGame } from './hooks/useGame';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import SketchFilter from './components/SketchFilter';
import './App.css';

function App() {
  const { board, currentPlayer, winResult, isDraw, handleCellClick, resetGame, gameKey } =
    useGame();

  return (
    <div className="app">
      <SketchFilter />

      <h1 className="title" style={{ filter: 'url(#pencil-sketch)' }}>
        Tic Tac Toe
      </h1>

      <GameStatus currentPlayer={currentPlayer} winResult={winResult} isDraw={isDraw} />

      <Board
        key={gameKey}
        board={board}
        currentPlayer={currentPlayer}
        winResult={winResult}
        isDraw={isDraw}
        handleCellClick={handleCellClick}
      />

      <button className="reset-btn" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default App;
