import {
  OrthographicCamera,
  MapControls,
  useContextBridge,
  Bounds,
} from "@react-three/drei";
import TextoInicial from "./components/TextoInicial";
import { Canvas } from "@react-three/fiber";

import {
  Selection,
  Select,
  EffectComposer,
  Outline,
  SSAO,
  SMAA,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import Pruebas from "./scenes/Pruebas";
import "./styles/style1.css";
import { createContext, useContext, useState } from "react";
import { ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { ContactShadows } from "@react-three/drei";
import { Environment, Sky } from "@react-three/drei";

import { Suspense } from "react";

import React from "react";

type SelectedContextType = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
};
const SelectedContext = createContext<SelectedContextType | undefined>(
  undefined
);

export function useSelected() {
  const ctx = useContext(SelectedContext);
  if (!ctx) throw new Error("useSelected must be used within SelectedProvider");
  return ctx;
}
function SelectedProvider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <SelectedContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectedContext.Provider>
  );
}
/* -------------------- Canvas Wrapper with Bridge -------------------- */
export function Scene() {
  const ContextBridge = useContextBridge(SelectedContext);
  return (
    <Canvas shadows dpr={[1, 2]} translate={"yes"}>
      <Suspense fallback={null}>
        <ContextBridge>
          <OrthographicCamera
            makeDefault
            position={[11, 11, 11]}
            zoom={1}
            near={0.1}
            far={100}
          />

          <MapControls
            target={[0, 0, 0]}
            makeDefault
            enablePan={true}
            enableZoom={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            enableDamping={false}
            minPolarAngle={Math.PI / 3} // 60° desde arriba
            maxPolarAngle={Math.PI / 3} // 90° = vista lateral
            minAzimuthAngle={Math.PI / 4} // -90°
            maxAzimuthAngle={Math.PI / 4} // +90°
          />

          {/* Environment and sky for realistic lighting */}
          <Environment preset="sunset" blur={0.6} />

          <pointLight
            position={[6.54, 10.85, 5.03]}
            intensity={61.4}
            distance={27.26}
            decay={1.5}
          />
          <directionalLight
            position={[8.91, 10, 2.97]}
            intensity={1.6}
            castShadow
          />
          <ambientLight intensity={1.36} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.02, 0]}
            opacity={0.6}
            width={6}
            height={6}
            blur={2}
            far={2.5}
          />

          <Selection enabled={true}>
            <EffectComposer
              multisampling={0}
              autoClear={false}
              depthBuffer={true}
              enableNormalPass={true}
              resolutionScale={1.72}
              frameBufferType={undefined}
              enabled={true}
              stencilBuffer={false}
            >
              <SMAA />

              <Outline
                xRay={true}
                hiddenEdgeColor={0xffffff}
                visibleEdgeColor={0xffffff}
                width={1000}
                height={1900}
                edgeStrength={100}
                blur
                multisampling={0}
              />
            </EffectComposer>

            <group position={[0, 0, 0]}>
              <Bounds fit clip observe margin={1.2}>
                <Select>
                  <Pruebas />
                </Select>
              </Bounds>
            </group>
          </Selection>
        </ContextBridge>
      </Suspense>
    </Canvas>
  );
}
/* -------------------- App -------------------- */
export default function App() {
  return (
    <SelectedProvider>
      <div className="overlayLeft">
        <TextoInicial />
      </div>
      <div className="background">
        <Scene />
      </div>
    </SelectedProvider>
  );
}
