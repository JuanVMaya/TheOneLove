import { create } from "zustand";

const useLetterSoupStore = create((set) => ({
  //   result: "AAAACILMOORSTTW",
  result: "aaaacilmoorsttw",
  isWon: false,
  progressString: "",
  win: () => set(() => ({ isWon: true })),
  addProgressCharacter: (character) =>
    set((state) => {
      let sortedStr = (state.progressString + character)
        .split("")
        .sort()
        .join("");
      if (sortedStr === state.result) {
        state.win();
      }
      return { progressString: sortedStr };
    }),
}));

export default useLetterSoupStore;
