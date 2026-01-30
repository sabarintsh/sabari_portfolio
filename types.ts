
export interface Project {
  id: string;
  title: string;
  category: 'AEROSPACE' | 'ROBOTICS' | 'AUTOMOTIVE';
  status: string;
  date: string;
  description: string;
  tag: string;
  imageUrl: string;
  figLabel: string;
  link?: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  isActive?: boolean;
}
