import React from 'react';

export interface BlackButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  width?: string;
  type?: 'button' | 'reset' | 'submit';
  isLoading?: boolean | null;
}