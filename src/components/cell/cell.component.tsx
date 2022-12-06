import { useState } from 'react';
import './cell.styles.scss';
import Piece from '../piece/piece.component';

interface IProps {
  value: string;
}

const Cell = ({ value }: IProps) => {
  useState();
  return (
    <div className={`cell ${value[0] === 'w' ? 'cell--white' : 'cell--black'}`}>
      {value.substring(1) && <Piece piece={value.substring(1)} />}
    </div>
  );
};

export default Cell;
