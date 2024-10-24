import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const AppLayout = () => {
  const [dark, setDark] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [active, setactive] = React.useState(1);

  function handleClick() {
    setDark((prev) => !prev);
  }
  function toggleMenu() {
    setMenu((prev) => !prev);
  }
  function handleLink(id) {
    setactive(id);
    setMenu(false);
  }
  return (
    <div className="relativ w-full min-h-screen overflow-hidden">
      <Header
        menu={menu}
        handleClick={handleClick}
        dark={dark}
        toggleMenu={toggleMenu}
        active={active}
        handleLink={handleLink}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
