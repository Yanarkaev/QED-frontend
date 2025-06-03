import { Link } from "react-router";
import s from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={s.Navbar}>
      <Link className={s.navlink} to="/stats">Статистика</Link>
      <Link className={s.navlink} to="/">Главная</Link>
      <Link className={s.navlink} to="/calendar">Календарь</Link>
    </div>
  );
};
