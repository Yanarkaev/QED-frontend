import { Outlet } from "react-router";
import { NavBar } from "../../widgets/NavBar/NavBar";

export const Layout = () => {
  const isAuth = localStorage.getItem("token");
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <Outlet />
        {isAuth && <NavBar />}
      </div>
    </div>
  );
};
