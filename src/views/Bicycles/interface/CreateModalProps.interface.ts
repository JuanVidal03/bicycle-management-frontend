import { MouseEventHandler } from 'react';

export interface CreateModalProps {
  onClose?: () => void | undefined | MouseEventHandler<HTMLButtonElement>,
  isModalActive: boolean;
}
