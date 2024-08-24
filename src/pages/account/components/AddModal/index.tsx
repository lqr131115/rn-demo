import React from 'react';
import CModal from '@/components/modal';
interface IProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
}

const AddModal: React.FC<IProps> = props => {
  return <CModal {...props} />;
};

export default AddModal;
