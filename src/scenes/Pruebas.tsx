import type { Vector } from "three/examples/jsm/Addons.js";
import Custom3dModel from "../components/Custom3dModel";
import type { Vector3 } from "three";
import CylinderWithDecal from "../components/CylinderWithDecal";

type IconsProps = {
  position?: [number, number, number];
};

export default function Pruebas({ position = [0, 0, 0] }: IconsProps) {
  return (
    <group position={position}>
      <Custom3dModel
        url="/PruebasExport.glb"
        idOfObject="Prueba1"
        position={[-2, 0, -2.81]}
        scale={[0.5, 0.5, 0.5]}
        // 45  degree rotation
      />
      <CylinderWithDecal
        url="/GithubIcon.png"
        color="black"
        idOfObject="Github"
        position={[-2.5, 3.26, -6.1]}
      ></CylinderWithDecal>
      <CylinderWithDecal
        url="/MongoDBIcon.png"
        color="Green"
        idOfObject="MongoDB"
        position={[4.5, -0.63, -6.3]}
      ></CylinderWithDecal>
    </group>
  );
}
