import React, { useState } from "react";
import * as THREE from "three";
import type { ThreeElements } from "@react-three/fiber";
import { DragControls, useGLTF, Decal, useTexture } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { a, useSpring } from "@react-spring/three";
import { Edges } from "@react-three/drei";

import { useSelected } from "../App"; // 👈 importa el hook del contexto

type CylnderWithDecalProps = {
  url: string;
  color?: string;
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
  url = "/GithubIcon.png",
  color = "white",
  idOfObject = "Github", // 👈 ahora el componente espera un id
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  ...groupProps
}: CylnderWithDecalProps) {
  const gradientMap = createGradientMap([0.55, 0.15, 0.1, 0.05, 0.05, 0.05]);
  const { setSelectedId, selectedId } = useSelected(); // 👈 obtenemos setter del contexto
  const texture = useTexture(url);
  const [hovered, setHovered] = useState(false);

  const isEstructura = idOfObject === "Estructura";

  // Animación de escala: sólo se activa si no es Estructura
  const basePos: [number, number, number] = (Array.isArray(position) &&
    position.length === 3 &&
    (position as [number, number, number])) || [0, 0, 0];

  const HOVER_OFFSET = 0.25; // how much higher on hover

  // Animación de posición: eleva el grupo al hacer hover y vuelve cuando se sale
  const { position: springPosition } = useSpring({
    position:
      !isEstructura && hovered
        ? [basePos[0], basePos[1] + HOVER_OFFSET, basePos[2]]
        : basePos,
    config: { mass: 1, tension: 300, friction: 26 },
  });

  return (
    <Select enabled={idOfObject === selectedId}>
      {/* usamos a.group (animado) para aplicar la escala */}
      <a.group
        position={springPosition as any}
        rotation={[1.570796326794897, 0, 0]}
        scale={scale}
        {...groupProps}
        onPointerOver={(e) => {
          if (!isEstructura) {
            e.stopPropagation();
            setHovered(true);
          }
        }}
        onPointerOut={(e) => {
          if (!isEstructura) {
            e.stopPropagation();
            setHovered(false);
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(idOfObject);
        }}
      >
        <group scale={[1, 0.25, 1]}>
          <mesh>
            <meshToonMaterial
              attach="material"
              gradientMap={gradientMap}
              color={color}
            />
            <cylinderGeometry args={[1, 1, 2, 256]} />
            <Decal
              position={[0, 1.41, 0]} // Position of the decal
              rotation={[-1.53588974175501, 0, 0]} // Rotation in radians
              scale={[2.9, 2.9, 1]}
            >
              <meshBasicMaterial
                map={texture}
                polygonOffset
                polygonOffsetFactor={-1} // The material should take precedence over the original
              />
            </Decal>
          </mesh>
        </group>
      </a.group>
    </Select>
  );
}
