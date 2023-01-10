import create from "zustand";

import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      // Functions
      start: () => {
        set((state) => {
          if (state.status === "ready")
            return { status: "playing", startTime: Date.now() };
          return {};
        });
      },
      end: () => {
        set((state) => {
          if (state.status === "playing")
            return { status: "ending", endTime: Date.now() };
          return {};
        });
      },
      restart: () => {
        set((state) => {
          if (state.status === "playing" || state.status === "ending")
            return { status: "ready", blocksSeed: Math.random() };
          return {};
        });
      },
    };
  })
);
