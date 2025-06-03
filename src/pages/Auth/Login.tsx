import { useState, type FormEvent } from "react";
import { Button, Input } from "../../shared/ui";
import s from "./Auth.module.scss";

export const Login = () => {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
  } 

  
  return (
    <div className={s.Auth}>
      <div className={s.inner}>
        <h1>Вход</h1>
        <form>
          <Input
            placeholder="Логин"
            name="login"
            value={data.login}
            onChange={handleChange}
          />
          <Input
            placeholder="Пароль"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Button>Отправить</Button>
        </form>
      </div>
    </div>
  );
};
