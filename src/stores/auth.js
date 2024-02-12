import { create } from "zustand";

const useAuthStore = create((set) => ({
  authenticated: false,
  singOut: () => set({ authenticated: false }),
  signIn: () => set({ authenticated: true }),
}));

export default useAuthStore;
