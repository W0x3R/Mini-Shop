import { Header } from "@features/header/components/Header";
import { Outlet } from "react-router";

export const Layout = () => {
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
