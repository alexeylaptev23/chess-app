import { GetPiece } from '../../utils/pieces.utils';

interface IProps {
  piece: string;
}

const Piece = ({ piece }: IProps) => {
  return <>{GetPiece(piece)}</>;
};

export default Piece;
