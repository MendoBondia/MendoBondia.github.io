import React, { useState } from "react";
import * as THREE from "three";
import type { ThreeElements } from "@react-three/fiber";
import { DragControls, useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { Edges } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

import { useSelected } from "../App"; // 👈 importa el hook del contexto

type Custom3dModelProps = {
  url: string;
  idOfObject: string; // 👈 nuevo parámetro obligatorio
} & Partial<ThreeElements["group"]>;

export function createGradientMap(ratios: number[]): THREE.DataTexture {
  const size = 4092;
  const data = new Uint8Array(size);

  let pixelIndex = 0;

  for (let i = 0; i < ratios.length; i++) {
    const pixelsForBand = Math.floor(ratios[i] * size);
    const value = Math.floor((i / (ratios.length - 1)) * (size - 1));

    for (let j = 0; j < pixelsForBand; j++) {
      if (pixelIndex >= size) break;
      data[pixelIndex++] = value;
    }
  }

  while (pixelIndex < size) {
    data[pixelIndex++] = size - 1;
  }

  const texture = new THREE.DataTexture(data, size, 1, THREE.RedFormat);
  texture.needsUpdate = true;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  return texture;
}

export default function Custom3dModel({
  url = "/ReactIcon.glb",
  idOfObject, // 👈 ahora el componente espera un id
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  ...groupProps
}: Custom3dModelProps) {
  const { nodes } = useGLTF(url) as any;
  const gradientMap = createGradientMap([0.55, 0.15, 0.1, 0.05, 0.05, 0.05]);
  const { setSelectedId, selectedId } = useSelected(); // 👈 obtenemos setter del contexto

  console.log("Nodes loaded from GLTF:", nodes);

  // Subcomponente por cada grupo para poder usar hooks (hover, spring) sin romper las reglas de los hooks
  function GroupNode({ node }: { node: any }) {
    const [hovered, setHovered] = useState(false);

    // compute base position as an array (fall back to 0,0,0)
    const basePos = node.position?.toArray?.() ?? [0, 0, 0];
    const HOVER_OFFSET = 0.25; // how much higher on hover

    // Animación de posición con react-spring (react-three)
    const { position } = useSpring({
      position: hovered
        ? [basePos[0], basePos[1] + HOVER_OFFSET, basePos[2]]
        : basePos,
      config: { mass: 1, tension: 300, friction: 26 },
    });

    return (
      <DragControls key={node.name}>
        <Select
          enabled={node.name !== "Estructura" && node.name === selectedId}
        >
          {/* a.group animado: position viene del spring */}
          <a.group
            name={node.name}
            position={position as any}
            // Eventos pointer para hover — stopPropagation para evitar colisiones con otros handlers
            onPointerOver={(e) => {
              if (node.name !== "Estructura") {
                e.stopPropagation();
                setHovered(true);
              }
            }}
            onPointerOut={(e) => {
              if (node.name !== "Estructura") {
                e.stopPropagation();
                setHovered(false);
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(node.name);
              console.log(`Clicked on ${node.name}`);
            }}
          >
            {node.children.map((child: any, j: number) => {
              if (child.isMesh) {
                return (
                  <mesh
                    key={child.name || j}
                    geometry={child.geometry}
                    castShadow
                  >
                    <meshToonMaterial
                      attach="material"
                      gradientMap={gradientMap}
                      // pasamos el color original (si existe)
                      color={child.material?.color ?? undefined}
                    />
                    {/* si el mesh tiene sus propias transformaciones locales, se preservan porque usamos geometry */}
                  </mesh>
                );
              }
              return null;
            })}
          </a.group>
        </Select>
      </DragControls>
    );
  }

  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
      {...groupProps}
    >
      {Object.values(nodes).map((node: any) => {
        if (node.isGroup) {
          return <GroupNode key={node.name} node={node} />;
        }
        return null;
      })}
    </group>
  );
}
