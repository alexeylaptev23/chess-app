import { useState } from 'react';
import Cell from '../cell/cell.component';
import LabelCell from '../label-cell/label-cell.component';
import './board.styles.scss';

const BOARD_INITIAL_STATE = [
  ['wBR', 'bBN', 'wBB', 'bBQ', 'wBK', 'bBB', 'wBN', 'bBR'],
  ['bBP', 'wBP', 'bBP', 'wBP', 'bBP', 'wBP', 'bBP', 'wBP'],
  ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
  ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
  ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
  ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
  ['wWP', 'bWP', 'wWP', 'bWP', 'wWP', 'bWP', 'wWP', 'bWP'],
  ['bWR', 'wWN', 'bWB', 'wWQ', 'bWK', 'wWB', 'bWN', 'wWR'],
];

const COLUMNS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ROWS = ['8', '7', '6', '5', '4', '3', '2', '1'];

const Board = () => {
  const [board, setBoard] = useState<string[][]>(BOARD_INITIAL_STATE);

  return (
    <div className='board'>
      {board.map((boardRow: string[], rowIndex) => (
        <div className='board__boardRow' key={ROWS[rowIndex]}>
          <LabelCell value={ROWS[rowIndex]}/>
          {boardRow.map((cell, columnIndex) => (
            <Cell
              value={cell}
              key={`${COLUMNS[columnIndex]}${ROWS[rowIndex]}`}
            />
          ))}
        </div>
      ))}
      <div className="board__boardRow">
        <LabelCell value={''}/>
        {COLUMNS.map(column => <LabelCell value={column}/>)}
      </div>
    </div>
  );
};

export default Board;
