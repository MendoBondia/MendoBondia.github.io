import "./Global.css";
import { Router } from "../src/components/RouterProvider";
import { OrthographicCamera } from "@react-three/drei";
import React from "react";

export function GlobalProvider({
  children,
  page = "/",
}: {
  children: React.ReactNode;
  page?: "/" | "/VVVVV" | "/RogueIsland" | "/ArtillerieLourde";
}) {
  return (
    <Router location={page} type="static">
      <div className="root">{children}</div>
    </Router>
  );
}
