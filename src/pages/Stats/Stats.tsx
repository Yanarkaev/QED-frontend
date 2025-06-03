import { useStats } from "./service/useStats";
import s from "./Stats.module.scss";

const statsData = [
  {
    value: "bestStreak",
    text: "Лучшая серия дней подряд",
  },
  {
    value: "currentStreak",
    text: "Текущая серия дней",
  },
  {
    value: "recordDay.count",
    text: "Рекорд за день",
  },
  {
    value: "averagePerDay",
    text: "В среднем за все время",
  },
  {
    value: "averageWhenReading",
    text: "В среднем за дни чтения",
  },
  {
    value: "skippedDays",
    text: "Пропущено дней",
  },
  {
    value: "currentSkipStreak",
    text: "Текущая серия пропусков",
  },
  {
    value: "readingDays",
    text: "Дни чтения",
  },
];

export const Stats = () => {
  const { stats } = useStats();
  // console.log(stats);

  return (
    <div className={s.Stats}>
      <h1>Статистика</h1>
      <div className={s.grid}>
        {statsData.map(({ value, text }) => (
          <div className={s.cell}>
            <h4>{stats && stats[value]}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
