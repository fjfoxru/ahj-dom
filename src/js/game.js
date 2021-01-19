const randomInteger = function (min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export default class Game {
  constructor() {
    this.person = null;
    this.personPositionIndex = '';
    this.cells = null;
  }

  generatePlayground() {
    const gamePlace = document.getElementById('gamePlace');
    const playground = document.createElement('div');
    playground.setAttribute('class', 'playground');
    gamePlace.appendChild(playground);
    for (let i = 0; i < 16; i += 1) {
      const gameCell = document.createElement('div');
      gameCell.setAttribute('class', 'playground__cell');
      playground.appendChild(gameCell);
    }
    this.cells = [...playground.querySelectorAll('.playground__cell')];
  }

  newPerson() {
    this.person = document.createElement('img');
    this.person.setAttribute('src', 'src/img/js.png');
    this.person.setAttribute('class', 'person');
  }

  startGame() {
    this.personPositionIndex = randomInteger(1, 12);
    this.cells[this.personPositionIndex].appendChild(this.person);
    const funcGame = this.gameStep.bind(this);
    setInterval(funcGame, 2000);
  }

  gameStep() {
    let newPositionIndex = randomInteger(1, 12);
    if (newPositionIndex === this.personPositionIndex) newPositionIndex = randomInteger(1, 12);
    this.cells[this.personPositionIndex].removeChild(this.person);
    this.cells[newPositionIndex].appendChild(this.person);
    this.personPositionIndex = newPositionIndex;
  }
}
