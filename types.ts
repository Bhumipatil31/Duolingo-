export type Page = 'landing' | 'login' | 'dashboard' | 'lesson' | 'leaderboard' | 'profile' | 'store' | 'settings';

export interface UserStats {
  streak: number;
  xp: number;
  gems: number;
  avatarUrl: string;
  name: string;
  username: string;
  joinedDate: string;
}

export enum LessonStatus {
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
  LOCKED = 'LOCKED'
}

export interface LessonNode {
  id: string;
  level: number;
  totalLevels: number;
  status: LessonStatus;
  icon: string;
  color: 'mint' | 'lilac' | 'peach' | 'sky';
  topic: string;
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  description: string;
  color: 'mint' | 'lilac' | 'peach' | 'sky';
  lessons: LessonNode[];
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  color: string;
}
