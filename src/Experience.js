import Level from "./Level.js";
import Lights from "./Lights.js";
import { Physics } from "@react-three/rapier";
import Player from "./Player.js";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Physics>
        <color args={["#252731"]} />
        <Lights />
        <Level />
        <Player />
      </Physics>
      <Perf position='top-left' />
    </>
  );
}
