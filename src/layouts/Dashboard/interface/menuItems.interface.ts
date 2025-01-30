import React from 'react';

export interface MenuItem {
  path: string;
  title: string;
  activeIcon: React.ReactNode,
  inactiveIcon: React.ReactNode,
}
