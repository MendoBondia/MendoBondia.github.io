import { createContext, use, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier"; // Asegúrate de tener esto instalado

const IsNested = createContext(false);

export function CanvasProvider({
  children,
  enableLights = true,
  enablePhysics = false,
}: {
  children: ReactNode;
  enableLights?: boolean;
  enablePhysics?: boolean;
}) {
  const isNestedCanvas = use(IsNested);

  if (!isNestedCanvas) {
    return (
      <Canvas>
        {enableLights && (
          <>
            <ambientLight
              intensity={0.6}
              receiveShadow={true}
              visible={true}
              castShadow={false}
            />
          </>
        )}
        <OrthographicCamera
          makeDefault
          position={[0, 0, 10]}
          zoom={90}
          visible={false}
        />
        {enablePhysics ? (
          <Physics>
            <IsNested value>{children}</IsNested>
          </Physics>
        ) : (
          <IsNested value>{children}</IsNested>
        )}
      </Canvas>
    );
  }

  return children;
}
