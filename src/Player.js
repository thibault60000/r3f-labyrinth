import { RigidBody } from "@react-three/rapier";

import { useRef } from "react";

export default function Player() {
  const rigidBodyRef = useRef();

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders='ball'
      linearDamping={0.5}
      angularDamping={0.5}
      restitution={0}
      friction={0.2}
      mass={0.0001}
      position={[0, 1, 0]}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial flatShading color='ivory' />
      </mesh>
    </RigidBody>
  );
}
