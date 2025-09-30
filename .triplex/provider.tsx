import React from "react";
import { OrthographicCamera, MapControls } from "@react-three/drei";
import { Environment, Sky } from "@react-three/drei";

export function GlobalProvider({ children }: { children?: React.ReactNode }) {
  return children;
}

export function CanvasProvider({
  children,
  setUp = true,
}: {
  children?: React.ReactNode;
  setUp?: boolean;
}) {
  return children;
}
