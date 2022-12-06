import './label-cell.styles.scss'

interface IProps {
  value: string;
}

const LabelCell = ({value}: IProps) => {
  return (<div className="label-cell">
    {value}
  </div>)
}

export default LabelCell;