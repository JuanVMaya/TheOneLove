function createLetterSoup(words, gridSize) {
  // Initialize an empty grid
  let grid = new Array(gridSize)
    .fill(null)
    .map(() => new Array(gridSize).fill("-"));

  function canPlaceWord(word, row, col, vertical) {
    if (vertical && row + word.length > gridSize) return false;
    if (!vertical && col + word.length > gridSize) return false;

    for (let i = 0; i < word.length; i++) {
      if (
        vertical &&
        grid[row + i][col] !== "-" &&
        grid[row + i][col] !== word[i]
      )
        return false;
      if (
        !vertical &&
        grid[row][col + i] !== "-" &&
        grid[row][col + i] !== word[i]
      )
        return false;
    }

    return true;
  }

  function placeWord(word, row, col, vertical) {
    for (let i = 0; i < word.length; i++) {
      if (vertical) {
        grid[row + i][col] = word[i];
      } else {
        grid[row][col + i] = word[i];
      }
    }
  }

  function fillEmptySpaces() {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (grid[i][j] === "-") {
          grid[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random letter A-Z
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
