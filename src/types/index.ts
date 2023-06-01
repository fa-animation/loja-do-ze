import type { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type LayoutProps = {
  children: ReactNode;
};

export interface InfoCardType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface StatsType {
  icon: IconType;
  value: number;
  text: string;
}