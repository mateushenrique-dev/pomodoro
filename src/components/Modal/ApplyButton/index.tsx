import { useContext } from 'react';
import { ModalContext } from '../../../context/modal';
import { ApplyButtonWrapper } from './styles';

const ApplyButton = () => {
  const { applyChanges } = useContext(ModalContext)

  return <ApplyButtonWrapper onClick={applyChanges}>Apply</ApplyButtonWrapper>;
}

export default ApplyButton