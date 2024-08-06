import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="bg-green-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
