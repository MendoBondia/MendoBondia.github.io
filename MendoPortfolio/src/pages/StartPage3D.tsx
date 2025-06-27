import { Text, Cloud, Clouds, OrthographicCamera } from "@react-three/drei";

import Icon from "../componentParts/Icon.tsx";
import { Canvas } from "@react-three/fiber";
import {
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
} from "three";

export default function StartPage3D() {
  return (
    <Canvas>
      <OrthographicCamera makeDefault zoom={70} position={[0, -2.28, 10]} />
      <ambientLight
        intensity={1}
        receiveShadow={true}
        visible={true}
        castShadow={false}
      />
      <directionalLight
        position={[0, 4.25, 14.32]}
        intensity={1}
        castShadow={true}
        rotation={[
          -0.7015226684310886,
          0.7562234453177915,
          -2.616196625200464,
          "XYZ",
        ]}
        quaternion={[0, 0, 0, 1]}
      />

      {/* Icons */}
      <>
        <Icon
          position={[8.12, 4.93, 0]}
          imagePath="/Images/iconoGithub.png"
          rotation={[1.43, 0, 0]}
          scale={[0.79, 0.79, 0.79]}
        />
        <Icon
          position={[10.47, 4.93, 0]}
          imagePath="/Images/iconoLinkedIn.png"
          rotation={[1.43, 0, 0]}
          scale={[0.81, 0.81, 0.81]}
        />
        <Icon
          position={[3.32, 4.89, 0]}
          imagePath="/Images/iconoMail.png"
          rotation={[1.43, 0, 0]}
          scale={[0.8, 0.8, 0.8]}
        />
        <Icon
          position={[5.79, 4.89, 0]}
          imagePath="/Images/logoItchio.png"
          rotation={[1.43, 0, 0]}
          scale={[0.8, 0.8, 0.8]}
        />
      </>

      <>
        <Text
          scale={[0.67, 0.67, 0.67]}
          position={[-5.09, 3.03, 0]}
          fontWeight={"bold"}
        >
          Hola! Mi nombre es Joan Mendo, {"\n"}desarrollador de Software.
        </Text>
      </>

      <Clouds position={[0, -3.94, 0]} limit={402}>
        <Cloud
          position={[-7.21, -3.06, 0]}
          seed={1}
          concentrate={"random"}
          segments={222}
          smallestVolume={0.64}
          volume={3.2}
          growth={2.58}
          fade={17.9}
          bounds={[3.86, 2.1, 2.62]}
          visible={true}
          receiveShadow={false}
          color={"#ffffff"}
        />

        <Cloud
          position={[2.3, -3.06, 0]}
          seed={2}
          concentrate={"outside"}
          segments={222}
          smallestVolume={0.64}
          volume={3.2}
          growth={2.58}
          fade={17.9}
          bounds={[3.86, 2.1, 2.62]}
          visible={true}
          receiveShadow={false}
          color={"#ffffff"}
        />
      </Clouds>
    </Canvas>
  );
}
