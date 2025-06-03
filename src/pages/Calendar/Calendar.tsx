import clsx from "clsx";
import s from "./Calendar.module.scss";
import { useCalendar } from "./service/useCalendar";

const data = [
  {
    year: 2025,
    months: [
      {
        month: "Май",
        days: [
          { date: "25-05-2025", count: 5 },
          { date: "26-05-2025", count: 2 },
          { date: "27-05-2025", count: 2 },
          { date: "28-05-2025", count: 3 },
          { date: "29-05-2025", count: 1 },
          { date: "30-05-2025", count: 3 },
          { date: "31-05-2025", count: 6 },
          { date: "25-05-2025", count: 4 },
        ],
      },
      {
        month: "Июнь",
        days: [
          { date: "01-06-2025", count: 5 },
          { date: "02-06-2025", count: 2 },
          { date: "03-06-2025", count: 2 },
          { date: "04-06-2025", count: 3 },
          { date: "05-06-2025", count: 1 },
          { date: "06-06-2025", count: 3 },
          { date: "07-06-2025", count: 6 },
          { date: "08-06-2025", count: 4 },
          { date: "01-06-2025", count: 5 },
          { date: "02-06-2025", count: 2 },
          { date: "03-06-2025", count: 2 },
          { date: "04-06-2025", count: 3 },
          { date: "05-06-2025", count: 1 },
          { date: "06-06-2025", count: 3 },
          { date: "07-06-2025", count: 6 },
          { date: "08-06-2025", count: 4 },
          { date: "01-06-2025", count: 5 },
          { date: "02-06-2025", count: 2 },
          { date: "03-06-2025", count: 2 },
          { date: "04-06-2025", count: 3 },
          { date: "05-06-2025", count: 1 },
          { date: "06-06-2025", count: 3 },
          { date: "07-06-2025", count: 6 },
          { date: "08-06-2025", count: 4 },
        ],
      },
      {
        month: "Июль",
        days: [
          { date: "01-06-2025", count: 5 },
          { date: "02-06-2025", count: 2 },
          { date: "03-06-2025", count: 2 },
          { date: "04-06-2025", count: 3 },
          { date: "05-06-2025", count: 1 },
          { date: "06-06-2025", count: 3 },
          { date: "07-06-2025", count: 6 },
          { date: "08-06-2025", count: 4 },
        ],
      },
    ],
  },
];

export const Calendar = () => {
  const { calendar } = useCalendar();

  const formattedCalendar = calendar?.sort(
    (a, b) => a.month.year - b.month.year
  );

  console.log(formattedCalendar);

  return (
    <div className={s.Calendar}>
      <h1>Календарь</h1>

      <div className={s.inner}>
        {calendar?.map(({ month }) => (
          <div className={s.year} key={month.year + month.name}>
            {/* <h3>{el.year}</h3> */}
            <div className={s.months}>
              <div className={s.month}>
                <h4>{month.name}</h4>
                <div className={s.days}>
                  {month.days.map((day) => {
                    const colorSaturation =
                      200 - day.count * 10 <= 20 ? 20 : 200 - day.count * 10;
                    return (
                      <div
                        className={s.day}
                        style={
                          day.count
                            ? {
                                backgroundColor: `rgb(${colorSaturation}, 200, ${colorSaturation})`,
                              }
                            : {}
                        }
                        key={day.date}
                      >
                        <div className={s.dayInfo}>
                          <span>{day.count}</span>
                          <span>{day.date}</span>
                          <span>{day.day}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* {data.map((el) => (
          <div className={s.year}>
            <h3>{el.year}</h3>
            <div className={s.months}>
              {el.months.map((month) => (
                <div className={s.month}>
                  <h4>{month.month}</h4>
                  <div className={s.days}>
                    {month.days.map((day) => (
                      <div className={s.day}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
