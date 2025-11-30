import { ReactNode } from 'react';

export interface CommandCardProps {
  content: ReactNode;
  warning?: string;
}

export interface SectionData {
  id: string;
  title: string;
  content: ReactNode;
}