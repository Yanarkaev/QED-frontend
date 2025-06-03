export interface Stats {
  userId: string;
  currentStreak: number;
  bestStreak: number;
  recordDay: {
    date: Date;
    count: number;
  };
  totalRead: number;
  averagePerDay: number;
  averageWhenReading: number;
  skippedDays: number;
  currentSkipStreak: number;
  readingDays: number;
  todayStatus: {
    hasActivity: boolean;
    dayId: string;
  };
}
