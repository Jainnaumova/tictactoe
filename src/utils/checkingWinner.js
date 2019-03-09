import {
  findCellByCoord,

} from './utilFunc';

// to left top diagonal
const goLeftUp = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x - 1,
      y: coord.y - 1
    };
    return goLeftUp(board, newCoord, value, count);
  }
  return count;
};

// to right bottom diagonal
const goRightDown = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x + 1,
      y: coord.y + 1
    };
    return goRightDown(board, newCoord, value, count);
  }
  return count;
};
// to left bottom diagonal
const goLeftDown = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x + 1,
      y: coord.y - 1
    };
    return goLeftDown(board, newCoord, value, count);
  }
  return count;
};
// to right top diagonal
const goRightUp = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x - 1,
      y: coord.y + 1
    };
    return goRightUp(board, newCoord, value, count);
  }
  return count;
};

// to left horizontal
const goLeft = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x,
      y: coord.y - 1
    };
    return goLeft(board, newCoord, value, count);
  }
  return count;
};

// to right horizontal
const goRight = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x,
      y: coord.y + 1
    };
    return goRight(board, newCoord, value, count);
  }
  return count;
};

// to top vertical
const goUp = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x - 1,
      y: coord.y
    };
    return goUp(board, newCoord, value, count);
  }
  return count;
};

// to bottom vertical
const goDown = (board, coord, value, count = 0) => {
  if (
    findCellByCoord(board, coord) &&
    findCellByCoord(board, coord).value === value
  ) {
    count++;
    const newCoord = {
      x: coord.x + 1,
      y: coord.y
    };
    return goDown(board, newCoord, value, count);
  }
  return count;
};

// check lines

const checkDiagonalLine = (board, coord, value) => {
  return (
    goLeftUp(board, coord, value, -1) + goRightDown(board, coord, value, -1) + 1
  );
};

const checkDiagonalLine1 = (board, coord, value) => {
  return (
    goLeftDown(board, coord, value, -1) + goRightUp(board, coord, value, -1) + 1
  );
};

const checkHorizontallLine = (board, coord, value) => {
  return (
    goLeft(board, coord, value, -1) + goRight(board, coord, value, -1) + 1
  );
};

const checkVerticalLine = (board, coord, value) => {
  return (
    goUp(board, coord, value, -1) + goDown(board, coord, value, -1) + 1
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
  if (res.some(el => el >= 5)) return true;
};
