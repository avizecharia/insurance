import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveClaim } from "./redux/store";
import Nav from "./componets/Nav";
import Header from "./componets/Header";
import Page from "./componets/Pages/Page";

export default function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <aside>
        <Nav />
      </aside>
      <main>
        <Page />
      </main>
    </div>
  );
}
