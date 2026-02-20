import { Outlet } from "react-router";
import { Header } from "@layout/Header";

export const MainLayout = () => {
  return (
    <>
      <Header></Header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};
