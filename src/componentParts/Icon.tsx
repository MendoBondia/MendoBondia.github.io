import { Decal, useTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

type IconProps = {
  imagePath?: string;
  decalScale?: [number, number, number];
} & ThreeElements["mesh"];
export default function Icon({
  imagePath = "/Images/iconoMail.png",
  children,
  decalScale = [1, 1, 1],
  ...meshProps // default
}: IconProps) {
  // Sub-component rendered *inside* the Canvas context

  const texture = useTexture(imagePath);

  return (
    <>
      <mesh {...meshProps} rotation={[1.413716694115407, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 64, 1]} />
        <meshStandardMaterial color={"#ffffff"} />

        <Decal
          position={[0, 1.12, 0]}
          rotation={[-1.612, 0, 0]}
          scale={decalScale}
        >
          <meshStandardMaterial
            color={"#ffffff"}
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
    </>
  );
}
