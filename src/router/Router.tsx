import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<HeaderLayout />}>
        {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Page404 />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
