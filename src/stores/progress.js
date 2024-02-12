import { create } from "zustand";

const useProgressStore = create((set) => ({
  progress: 0,
  setProgressTo: (toValue) => set(() => ({ progress: toValue })),
}));

export default useProgressStore;
