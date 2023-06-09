import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import Wall from "./components/pages/wall";
import Friendgroup from "./components/pages/friends";
import Friendschat from "./components/pages/chat";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Wall />} />
        <Route path="/friendsgroup" element={<Friendgroup />} />
        <Route path="/friendschat" element={<Friendschat />} />
      </Routes>
    </>
  );
}

export default App;
