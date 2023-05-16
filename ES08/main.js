import { EscapeRoom } from './escape-room.js';
import { Puzzle } from './puzzle.js';

function renderEscapeRoomsList(escapeRoomsArray, escapeRoomsContainer) {
  escapeRoomsContainer.innerHTML = '';
  for (let i = 0; i < escapeRoomsArray.length; i += 1) {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('escape-room');
    tempDiv.style.backgroundImage = `url('${escapeRoomsArray[i].image}')`;
    const tempH2 = document.createElement('h2');
    tempH2.innerHTML = escapeRoomsArray[i].name;
    tempDiv.appendChild(tempH2);
    tempDiv.addEventListener('click', () => { renderEscapeRoom(i); });
    escapeRoomsContainer.appendChild(tempDiv);
  }
}

function renderEscapeRoom(escapeRoomId) {
  const tempEscapeRoom = escapeRooms[escapeRoomId];
  escapeRoomTitle.innerHTML = tempEscapeRoom.name;

  const form = document.createElement('form');
  form.id = escapeRoomId + 1;

  let template = '';
  for (let i = 0; i < tempEscapeRoom.puzzles.length; i += 1) {
    template += `<fieldset>
                  <legend>${tempEscapeRoom.puzzles[i].name}</legend>
                  <div>Difficulty: ${tempEscapeRoom.puzzles[i].difficulty}</div><br>
                  <div>${tempEscapeRoom.puzzles[i].text} ?</div><br>`;

    for (let j = 0; j < tempEscapeRoom.puzzles[i].answers.length; j += 1) {
      template += `<input type="radio" id="er${escapeRoomId + 1}p${i + 1}ans${j + 1}" name="er${escapeRoomId + 1}p${i + 1}" value="${tempEscapeRoom.puzzles[i].answers[j]}">
                   <label for="er${escapeRoomId + 1}p${i + 1}ans${j + 1}">${tempEscapeRoom.puzzles[i].answers[j]}</label><br>`;
    }
    template += `<div class="puzzle-solved">${tempEscapeRoom.puzzles[i].solved ? '&#9989;' : '&#10060;'}</div>`;
    template += '</fieldset>';
  }

  escapeRoomContainer.innerHTML = '';
  form.innerHTML = template;
  form.innerHTML += '<br><input type="submit" value="Validate Room Answers">';
  form.addEventListener('submit', validateEscapeRoom);
  escapeRoomContainer.appendChild(form);
}

function validateEscapeRoom(event) {
  event.preventDefault();

  const fieldsets = escapeRoomContainer.getElementsByTagName('fieldset');

  const escapeRoomIndex = this.id - 1;
  for (let i = 0; i < fieldsets.length; i += 1) {
    const radioButtons = fieldsets[i].getElementsByTagName('input');

    if (radioButtons[escapeRooms[escapeRoomIndex].puzzles[i].solution - 1].checked) {
      escapeRooms[escapeRoomIndex].solvePuzzle(i);
    }
  }

  renderEscapeRoom(escapeRoomIndex)
}

// DOM selection
const escapeRoomsContainer = document.getElementById('escape-rooms-container');
const escapeRoomTitle = document.getElementById('escape-room-title');
const escapeRoomContainer = document.getElementById('escape-room-container');

// Create puzzles and escape rooms
const puzzle1 = new Puzzle('Math Puzzle', 'hard', 'What is the result of 3 x 7', [1, 2, 14, 21], 4);
const puzzle2 = new Puzzle('Geography Puzzle', 'medium', 'Which city is the capital of france', ['Lisbon', 'Madrid', 'Paris', 'Rome'], 3);
const puzzle3 = new Puzzle('Quiz Puzzle', 'easy', 'Which animal is the Mickey Mouse', ['Cat', 'Dog', 'Mouse', 'Rabbit'], 3);
const puzzle4 = new Puzzle('One Letter Puzzle', 'hard', 'Which letter denotes the roman numeral for 100', ['C', 'X', 'V', 'I'], 1);

const escapeRoom1 = new EscapeRoom('Lake Room', 'https://picsum.photos/id/980/5000/3509');
escapeRoom1.addPuzzle(puzzle1);
escapeRoom1.addPuzzle(puzzle2);
const escapeRoom2 = new EscapeRoom('Castle Room', 'https://picsum.photos/id/1040/4496/3000');
escapeRoom2.addPuzzle(puzzle3);
const escapeRoom3 = new EscapeRoom('Forest Room', 'https://picsum.photos/id/502/1920/1280');
escapeRoom3.addPuzzle(puzzle4);
const escapeRooms = [escapeRoom1, escapeRoom2, escapeRoom3];
console.log(escapeRooms);

// Add escape rooms to main page
renderEscapeRoomsList(escapeRooms, escapeRoomsContainer);
