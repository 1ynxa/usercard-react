import { FC, memo } from "react";
import { Outlet } from "react-router-dom"; // Outletをインポート
import { Header } from "../organisms/layout/Header";

export const HeaderLayout: FC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
