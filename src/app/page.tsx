"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TopPools from "./components/TopPools";
import TopChains from "./components/TopChains";
import Feed from "./components/Feed";
import { useState } from "react";

export default function DeripulseApp() {
  const [currentComponent, setCurrentComponent] = useState("Home");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Home":
        return <Home />;
      case "TopPools":
        return <TopPools />;
      case "TopChains":
        return <TopChains />;
      case "Feed":
        return <Feed />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentComponent={setCurrentComponent} />
      <main>{renderComponent()}</main>
    </div>
  );
}
