import { Outlet } from "react-router";
import { Header } from "@features/header/components";

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
