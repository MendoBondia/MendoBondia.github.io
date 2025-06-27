import StartPage from "./pages/StartPage";
import RogueIsland from "./pages/RogueIsland";
import ArtillerieLourde from "./pages/ArtillerieLourde";
import VVVVV from "./pages/VVVVV";

import { Routes, Route } from "react-router";
import { Router } from "./components/RouterProvider";

import "./css/Global.css";

export default function App() {
  return (
    <Router type={"browser"}>
      <Routes>
        <Route element={<StartPage />} path="/" />
        <Route element={<ArtillerieLourde />} path="/ArtillerieLourde" />
        <Route element={<RogueIsland />} path="/RogueIsland" />
        <Route element={<VVVVV />} path="/VVVVV" />
      </Routes>
    </Router>
  );
}
