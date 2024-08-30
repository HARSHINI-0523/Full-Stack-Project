// RootLayout.jsx
import React from 'react';
import "./RootLayout.css"; 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
