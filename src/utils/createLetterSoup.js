function createLetterSoup(words, gridSize) {
  // Initialize an empty grid with objects
  let grid = new Array(gridSize).fill(null).map(() =>
    new Array(gridSize).fill(null).map(() => ({
      character: "-",
      valid: false,
    }))
  );

  function canPlaceWord(word, row, col, vertical) {
    if (vertical && row + word.length > gridSize) return false;
    if (!vertical && col + word.length > gridSize) return false;

    for (let i = 0; i < word.length; i++) {
      const cell = vertical ? grid[row + i][col] : grid[row][col + i];
      if (cell.character !== "-" && cell.character !== word[i]) return false;
    }

    return true;
  }

  function placeWord(word, row, col, vertical) {
    for (let i = 0; i < word.length; i++) {
      if (vertical) {
        grid[row + i][col] = { character: word[i], valid: true };
      } else {
        grid[row][col + i] = { character: word[i], valid: true };
      }
    }
  }

  function fillEmptySpaces() {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (grid[i][j].character === "-") {
          grid[i][j] = {
            character: String.fromCharCode(Math.floor(Math.random() * 26) + 65),
            valid: false,
          }; // Random letter A-Z
        }
      }
    }
  }

  words.forEach((word) => {
    let placed = false;
    while (!placed) {
      let vertical = Math.random() < 0.5;
      let row = Math.floor(Math.random() * gridSize);
      let col = Math.floor(Math.random() * gridSize);
      if (canPlaceWord(word, row, col, vertical)) {
        placeWord(word, row, col, vertical);
        placed = true;
      }
    }
  });

  fillEmptySpaces();

  return grid;
}

export default createLetterSoup;
