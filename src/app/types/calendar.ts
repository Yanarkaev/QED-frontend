export interface Calendar {
  userId: string;
  month: {
    year: number;
    name: string;
    days: [
      {
        date: string;
        day: number;
        count: number;
      }
    ];
  };
}
