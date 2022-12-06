import { ReactComponent as BR } from '../assets/pieces/BR.svg';
import { ReactComponent as BN } from '../assets/pieces/BN.svg';
import { ReactComponent as BK } from '../assets/pieces/BK.svg';
import { ReactComponent as BQ } from '../assets/pieces/BQ.svg';
import { ReactComponent as BB } from '../assets/pieces/BB.svg';
import { ReactComponent as BP } from '../assets/pieces/BP.svg';
import { ReactComponent as WR } from '../assets/pieces/WR.svg';
import { ReactComponent as WN } from '../assets/pieces/WN.svg';
import { ReactComponent as WK } from '../assets/pieces/WK.svg';
import { ReactComponent as WQ } from '../assets/pieces/WQ.svg';
import { ReactComponent as WB } from '../assets/pieces/WB.svg';
import { ReactComponent as WP } from '../assets/pieces/WP.svg';

export const GetPiece = (name: string) => {
  switch (name) {
    case 'BR':
      return <BR/>;
    case 'BN':
      return <BN/>;
    case 'BB':
      return <BB/>;
    case 'BQ':
      return <BQ/>;
    case 'BK':
      return <BK/>;
    case 'BP':
      return <BP/>;
    case 'WR':
      return <WR/>;
    case 'WN':
      return <WN/>;
    case 'WB':
      return <WB/>;
    case 'WQ':
      return <WQ/>;
    case 'WK':
      return <WK/>;
    case 'WP':
      return <WP/>;
    default:
      throw new Error('No piece found, are you from r/chessanarchy?');
  }
};
