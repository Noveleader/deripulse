"use client";
import React from "react";
import Image from "next/image";
import deripulseLogo from "../../../public/websiteLogos/deripulse_logo_blue.svg";
import "../styles/Navbar.css";

interface NavbarProps {
  setCurrentComponent: (component: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentComponent }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src={deripulseLogo} alt="Deripulse Logo" />
        <p>Deri Pulse</p>
        <p className="partition">|</p>
      </div>
      <div className="pages">
        <p onClick={() => setCurrentComponent("Home")}>Home</p>
        <p onClick={() => setCurrentComponent("TopPools")}>Top Pools</p>
        <p onClick={() => setCurrentComponent("TopChains")}>Top Chains</p>
        <p onClick={() => setCurrentComponent("Feed")}>Feed</p>
      </div>
    </div>
  );
};

export default Navbar;
