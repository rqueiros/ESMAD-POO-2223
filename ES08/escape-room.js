export class EscapeRoom {
  #name = '';

  #image = '';

  #puzzles = [];

  #completedPuzzles = 0;

  constructor(name, image) {
    this.#name = name;
    this.#image = image;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get image() {
    return this.#image;
  }

  set image(image) {
    this.#image = image;
  }

  get puzzles() {
    return this.#puzzles;
  }

  addPuzzle(puzzle) {
    this.#puzzles.push(puzzle);
  }

  // Method to check if all puzzles have been solved
  isSolved() {
    return this.#completedPuzzles === this.#puzzles.length;
  }

  // Method to solve a puzzle
  solvePuzzle(puzzleIndex) {
    const puzzle = this.puzzles[puzzleIndex];
    if (!puzzle.solved) {
      puzzle.solve();
      this.#completedPuzzles += 1;
      if (this.isSolved()) {
        alert(`Congratulations! You have escaped from ${this.name}!`);
      }
    } else {
      console.log(`You have already solved the puzzle: ${puzzle.name}`);
    }
  }
}
