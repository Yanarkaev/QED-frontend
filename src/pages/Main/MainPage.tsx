import { useRef, useState } from "react";
import { Button, Input } from "../../shared/ui";
import s from "./MainPage.module.scss";
import { useToday } from "./service/useToday";

export const MainPage = () => {
  const inputRef = useRef(null);

  const { today, setTodayCount } = useToday();

  const handleSetDay = () => {
    setTodayCount(inputRef.current.value);
  };

  console.log(today);

  return (
    <div className={s.MainPage}>
      <div className={s.login}>khas</div>

      <h1 className={s.streak}>{today?.streak}</h1>

      <p className={s.steakDescr}>Дней подряд ты читаешь Коран</p>

      <div className={s.markGoal}>
        <Input ref={inputRef} onChange={() => {}} onlyNumbers variant="ghost" />
        <Button onClick={handleSetDay}>Отметить</Button>
      </div>

      <div className={s.read}>Прочитано сегодня: {today?.count} страница</div>
    </div>
  );
};
