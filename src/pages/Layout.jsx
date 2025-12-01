// Layout.jsx
import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
