import type { Player } from '../hooks/useGame';
import './Cell.css';

interface Props {
  value: Player | null;
  index: number;
  isWinning: boolean;
  currentPlayer: Player;
  onClick: () => void;
  disabled: boolean;
}

export default function Cell({ value, index, isWinning, currentPlayer, onClick, disabled }: Props) {
  const clickable = !value && !disabled;

  return (
    <div
      className={[
        'cell',
        isWinning ? 'cell--winning' : '',
        clickable ? 'cell--clickable' : '',
        clickable ? `cell--hover-${currentPlayer.toLowerCase()}` : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={clickable ? onClick : undefined}
      role="button"
      aria-label={`Cell ${index + 1}${value ? `, played ${value}` : ', empty'}`}
      aria-disabled={!clickable}
    >
      {value === 'X' && <XMark />}
      {value === 'O' && <OMark />}
    </div>
  );
}

function XMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="mark"
      style={{ filter: 'url(#pencil-sketch)' }}
      aria-hidden="true"
    >
      <line className="mark-stroke x-line1" x1="18" y1="18" x2="82" y2="82" />
      <line className="mark-stroke x-line2" x1="82" y1="18" x2="18" y2="82" />
    </svg>
  );
}

function OMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="mark"
      style={{ filter: 'url(#pencil-sketch)' }}
      aria-hidden="true"
    >
      <circle className="mark-stroke o-circle" cx="50" cy="50" r="32" />
    </svg>
  );
}
