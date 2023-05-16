export class Puzzle {
  #name = '';

  #difficulty = '';

  #solved = false;

  #text = '';

  #answers = [];

  #solution = 0;

  constructor(name, difficulty, text, answers, solution) {
    this.#name = name;
    this.difficulty = difficulty;
    this.#text = text;
    this.#answers = answers;
    this.#solution = solution;
  }

  get difficulty() {
    return this.#difficulty;
  }

  set difficulty(difficulty) {
    let tempDifficulty = 'easy';
    const validOptions = ['easy', 'medium', 'hard'];
    if (validOptions.includes(difficulty)) {
      tempDifficulty = difficulty;
    }
    this.#difficulty = tempDifficulty;
  }

  get text() {
    return this.#text;
  }

  get name() {
    return this.#name;
  }

  get answers() {
    return this.#answers;
  }

  get solution() {
    return this.#solution;
  }

  get solved() {
    return this.#solved;
  }

  // Method to solve the puzzle
  solve() {
    this.#solved = true;
    console.log(`You have solved the puzzle: ${this.#name}`);
  }
}
