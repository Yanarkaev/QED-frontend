import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { Stats } from "../Stats/Stats";
import { Calendar } from "../Calendar/Calendar";
import { MainPage } from "../Main/MainPage";
import { Login } from "../Auth/Login";
import { Registration } from "../Auth/Registration";

export const Routing = () => {
  const isAuth = localStorage.getItem("token");
  return (
    <Routes>
      {!isAuth && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </>
      )}

      <Route
        path="/"
        element={isAuth ? <Layout /> : <Navigate to="/login" replace />}
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>

      <Route
        path="*"
        element={
          isAuth ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};
