import { useState, type FormEvent } from "react";
import { Button, Input } from "../../shared/ui";
import s from "./Auth.module.scss";
import { api, METHODS } from "../../shared/api/api";
import { endpoints } from "../../shared/api/endpoints";

export const Registration = () => {
  const [data, setData] = useState({
    username: "",
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const registration = async () => {
    const user = await api.post(endpoints.auth.reqistration);
    console.log(user);

    localStorage.setItem("token", user.token);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registration();
  };

  return (
    <div className={s.Auth}>
      <div className={s.inner}>
        <h1>Регистрация</h1>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Имя"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
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
