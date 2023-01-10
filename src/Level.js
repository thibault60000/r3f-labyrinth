import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

THREE.ColorManagement.legacyMode = false;

export default function Level() {
  const rigidBody = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const { nodes, materials } = useGLTF("./labyrinth.glb");

  useFrame((state, delta) => {
    const keys = getKeys();
    const { forward, backward, left, right } = keys;
    const torque = { x: 0, y: 0, z: 0 };
    const torqueStrength = 5 * delta;

    if (right) {
      torque.x -= torqueStrength;
      rigidBody.current.applyTorqueImpulse(torque);
    }
    if (left) {
      torque.x += torqueStrength;
      rigidBody.current.applyTorqueImpulse(torque);
    }
    if (forward) {
      torque.z += torqueStrength;
      rigidBody.current.applyTorqueImpulse(torque);
    }
    if (backward) {
      torque.z -= torqueStrength;
      rigidBody.current.applyTorqueImpulse(torque);
    }

    // const rotation = rigidBody.current.rotation();
    // const x = rotation.x.toFixed(2);

    // if (x == -0.05) {
    //   const eulerRotation = new THREE.Euler(-0.05, 0, 0);
    //   const quaternionRotation = new THREE.Quaternion();
    //   quaternionRotation.setFromEuler(eulerRotation);
    //   rigidBody.current.setRotation(quaternionRotation);
    // rigidBody.current.setLinvel({ x: 0, y: 0, z: 0 });
    // rigidBody.current.setAngvel({ x: 0, y: 0, z: 0 });
    //  }
  });

  return (
    <RigidBody
      restitution={0}
      friction={0.2}
      ref={rigidBody}
      colliders='trimesh'
      lockTranslations
      mass={20}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Wood}
        scale={2.2}
      />
    </RigidBody>
  );
}

useGLTF.preload("/labyrinthe.glb");
