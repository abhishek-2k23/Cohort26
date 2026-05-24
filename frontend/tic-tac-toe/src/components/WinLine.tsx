import './WinLine.css';

type Line = [number, number, number];

interface Coords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const WIN_COORDS: Record<string, Coords> = {
  '0,1,2': { x1: 12, y1: 50,  x2: 288, y2: 50  },
  '3,4,5': { x1: 12, y1: 150, x2: 288, y2: 150 },
  '6,7,8': { x1: 12, y1: 250, x2: 288, y2: 250 },
  '0,3,6': { x1: 50,  y1: 12, x2: 50,  y2: 288 },
  '1,4,7': { x1: 150, y1: 12, x2: 150, y2: 288 },
  '2,5,8': { x1: 250, y1: 12, x2: 250, y2: 288 },
  '0,4,8': { x1: 12,  y1: 12, x2: 288, y2: 288 },
  '2,4,6': { x1: 288, y1: 12, x2: 12,  y2: 288 },
};

function lineLength({ x1, y1, x2, y2 }: Coords) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

interface Props {
  line: Line;
}

export default function WinLine({ line }: Props) {
  const key = line.join(',');
  const coords = WIN_COORDS[key];
  if (!coords) return null;

  const length = Math.ceil(lineLength(coords));

  return (
    <svg
      className="win-line-svg"
      viewBox="0 0 300 300"
      aria-hidden="true"
      style={{ filter: 'url(#pencil-sketch)' }}
    >
      <line
        className="win-line"
        x1={coords.x1}
        y1={coords.y1}
        x2={coords.x2}
        y2={coords.y2}
        style={
          {
            strokeDasharray: length,
            strokeDashoffset: length,
          } as React.CSSProperties
        }
      />
    </svg>
  );
}
