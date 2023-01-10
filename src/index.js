import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { KeyboardControls } from "@react-three/drei";
import Interface from "./Interface";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const mapKeys = [
  {
    name: "forward",
    keys: ["ArrowUp", "KeyW"],
  },
  {
    name: "backward",
    keys: ["ArrowDown", "KeyS"],
  },
  {
    name: "left",
    keys: ["ArrowLeft", "KeyA"],
  },
  {
    name: "right",
    keys: ["ArrowRight", "KeyD"],
  },
  {
    name: "restarter",
    keys: ["KeyR"],
  },
];

root.render(
  <KeyboardControls map={mapKeys}>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 4, 0],
      }}
    >
      <Experience />
    </Canvas>
    <Interface />
  </KeyboardControls>
);
