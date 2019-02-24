// generate uniq ID
export const uniqueId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

// create Board
export const createBoard = size => {
  let board = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const newCell = {
        id: uniqueId(),
        x: i,
        y: j,
        value: null
      };
      board.push(newCell);
    }
  }
  return board;
};

// find checked Cell by Id
export const findCell = (board, id) => board.find(cellObj => cellObj.id === id);

// find emptyCells array
export const findEmptyCells = board =>
  board.filter(cellObj => cellObj.value === null);

// find random empty Cell
export const findRandomCell = board => {
  let randomCell = {};
  const emptyCellsArr = findEmptyCells(board);
  const random = Math.ceil(Math.random() * emptyCellsArr.length) - 1;
  randomCell = emptyCellsArr[random];
  return randomCell;
};

// find cell by coordinates - will get cellObj
export const findCellByCoord = (board, coord) => {
  return board.find(cellObj => cellObj.x === coord.x && cellObj.y === coord.y);
};

// count cells

// to left top diagonal
const gameWon1 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x - 1,
      y: coord.y - 1
    };
    return gameWon1(board, newCoord, value, count);
  }
  return count;
};
// to right bottom diagonal
const gameWon2 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x + 1,
      y: coord.y + 1
    };
    return gameWon2(board, newCoord, value, count);
  }
  return count;
};
// to left bottom diagonal
const gameWon7 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x + 1,
      y: coord.y - 1
    };
    return gameWon7(board, newCoord, value, count);
  }
  return count;
};
// to right top diagonal
const gameWon8 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x - 1,
      y: coord.y + 1
    };
    return gameWon8(board, newCoord, value, count);
  }
  return count;
};
// to left horizontal
const gameWon3 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x - 1,
      y: coord.y
    };
    return gameWon3(board, newCoord, value, count);
  }
  return count;
};
// to right horizontal
const gameWon4 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x + 1,
      y: coord.y
    };
    return gameWon4(board, newCoord, value, count);
  }
  return count;
};
// to top vertical
const gameWon5 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x,
      y: coord.y - 1
    };
    return gameWon5(board, newCoord, value, count);
  }
  return count;
};
// to bottom vertical
const gameWon6 = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x,
      y: coord.y + 1
    };
    return gameWon6(board, newCoord, value, count);
  }
  return count;
};

// check lines

const checkDiagonalLine = (board, coord, value) => {
  return (
    gameWon1(board, coord, value, -1) + gameWon2(board, coord, value, -1) + 1
  );
};

const checkDiagonalLine1 = (board, coord, value) => {
  return (
    gameWon7(board, coord, value, -1) + gameWon8(board, coord, value, -1) + 1
  );
};

const checkHorizontallLine = (board, coord, value) => {
  return (
    gameWon3(board, coord, value, -1) + gameWon4(board, coord, value, -1) + 1
  );
};

const checkVerticalLine = (board, coord, value) => {
  return (
    gameWon5(board, coord, value, -1) + gameWon6(board, coord, value, -1) + 1
  );
};

// check Winner
export const checkWinner = (board, lastTurn) => {
  if (!lastTurn) return false;
  const a = checkDiagonalLine(
    board,
    lastTurn,
    findCellByCoord(board, lastTurn).value
  );
  const d = checkDiagonalLine1(
    board,
    lastTurn,
    findCellByCoord(board, lastTurn).value
  );
  const b = checkHorizontallLine(
    board,
    lastTurn,
    findCellByCoord(board, lastTurn).value
  );
  const c = checkVerticalLine(
    board,
    lastTurn,
    findCellByCoord(board, lastTurn).value
  );
  const res = [a, b, c, d];
  if (res.some(el => el >= 2)) return true;
};

// computerTurn should be !computerTurn probably
export const minimax = (board, lastTurn, computerTurn) => {
  console.log('BOARD:', board);
  const emptyCells = findEmptyCells(board);
  console.log("emtyCells:", emptyCells, "last Turn:", lastTurn, "computerTurn:", computerTurn);
  // console.log("emtyCells:", emptyCells);
  debugger
  if (!computerTurn && checkWinner(board, lastTurn)) {
    debugger
    return { score: 1 };
  } else if (computerTurn && checkWinner(board, lastTurn)) {
    debugger
    return { score: -1 };
  } else if (!emptyCells.length) {
    debugger
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < emptyCells.length; i++) {
    const move = {};
    move.id = emptyCells[i].id;

    const cell = findCell(board, emptyCells[i].id);
    cell.value = !computerTurn; // false for computerTurn, true for human
    const newTurn = { id: cell.id, x: cell.x, y: cell.y, value: cell.value };
    let res;
    if (computerTurn) {
      res = minimax(board, newTurn, false);
      move.score = res.score;
    } else {
      res = minimax(board, newTurn, true);
      move.score = res.score;
    }

    // cell.value = null;
    moves.push(move);
  }
  console.log("moves:", moves);
  let bestScore;
  let bestTurn;

  if (computerTurn) {
    bestScore = -100000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestTurn = moves[i].id;
      }
    }
  } else {
    bestScore = 100000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestTurn = moves[i].id;
      }
    }
  }
  return bestTurn;
};
