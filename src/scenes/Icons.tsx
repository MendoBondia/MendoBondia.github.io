import type { Vector } from "three/examples/jsm/Addons.js";
import Custom3dModel from "../components/Custom3dModel";
import type { Vector3 } from "three";

type IconsProps = {
  position?: [number, number, number];
};

export default function Icons({ position = [0, 0, 0] }: IconsProps) {
  return (
    <group position={position}>
      <Custom3dModel
        url="/blenderIcon.glb"
        idOfObject="blender"
        position={[-2, 0, -2.81]}
        scale={[0.5, 0.5, 0.5]}
        // 45  degree rotation
      />
      <Custom3dModel
        url="/ReactIcon.glb"
        idOfObject="react"
        position={[2, 0, -1.41]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/IslaIconos.glb"
        idOfObject="isla"
        position={[4, 0, -1.41]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/CSharpIcon.glb"
        idOfObject="csharp"
        position={[-2, 0, 2.65]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/GitIcon.glb"
        idOfObject="git"
        position={[2, 0, 2.37]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/HTMLIcon.glb"
        idOfObject="html"
        position={[-2, 0, -0.64]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/JavascriptIcon.glb"
        idOfObject="javascript"
        position={[2, 0, -2.87]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/CSSIcon.glb"
        idOfObject="css"
        position={[-2, 0, 0.98]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Custom3dModel
        url="/ThreeIcon.glb"
        idOfObject="three"
        position={[2, 0, 0.53]}
        scale={[0.5, 0.5, 0.5]}
      />
    </group>
  );
}
