import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};
