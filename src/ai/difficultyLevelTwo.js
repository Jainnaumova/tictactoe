import _ from 'lodash';
import {
  findCellByCoord,
  findHumanCells,
} from '../utils/utilFunc';

// to left top diagonal
const goLeftUp = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x - 1,
    y: coord.y - 1
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goLeftUp(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to right bottom diagonal
const goRightDown = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x + 1,
    y: coord.y + 1
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goRightDown(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to left bottom diagonal
const goLeftDown = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x + 1,
    y: coord.y - 1
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goLeftDown(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to right top diagonal
const goRightUp = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x - 1,
    y: coord.y + 1
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goRightUp(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to left horizontal
const goLeft = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x,
    y: coord.y - 1
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goLeft(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to right horizontal
const goRight = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x,
    y: coord.y + 1
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goRight(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to top vertical
const goUp = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x - 1,
    y: coord.y
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goUp(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

// to bottom vertical
const goDown = (board, coord, value, count = 0) => {
  const newCoord = {
    x: coord.x + 1,
    y: coord.y
  };
  const res = {};
  if (
    findCellByCoord(board, newCoord) &&
    findCellByCoord(board, newCoord).value === value
  ) {
    count++;
    return goDown(board, newCoord, value, count);
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value === null) {
    res.count = count;
  } else if (findCellByCoord(board, newCoord) && findCellByCoord(board, newCoord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, newCoord)) {
    res.count = count;
  }
  return res;
};

const checkDiagonalLineEmpty = (board, coord, value) => {
    const one = goLeftUp(board, coord, value);
    const two = goRightDown(board, coord, value);
  return {
    edgeOne: coord,
    count: one.count + two.count + 1
  }
};

const checkDiagonalLine1Empty = (board, coord, value) => {
  const one = goLeftDown(board, coord, value);
  const two = goRightUp(board, coord, value);
  return {
    edgeOne: coord,
    count: one.count + two.count + 1
  }
};

const checkHorizontallLineEmpty = (board, coord, value) => {
  const one = goLeft(board, coord, value, 0);
  const two = goRight(board, coord, value, 0);
  return {
    edgeOne: coord,
    count: one.count + two.count + 1
  }
};

const checkVerticalLineEmpty = (board, coord, value) => {
  const one = goUp(board, coord, value);
  const two = goDown(board, coord, value);
  return {
    edgeOne: coord,
    count: one.count + two.count + 1
  }
};

// finding empty cells around specific cell (with value null)
const findSpecificCellsAroundCell = (board, coord, value) => {
  const cellsAround = [];
  const leftUp = findCellByCoord(board, {x: coord.x - 1, y: coord.y - 1});
  if ( leftUp && leftUp.value === value) cellsAround.push(leftUp);
  const rightDown = findCellByCoord(board, {x: coord.x + 1, y: coord.y + 1});
  if ( rightDown && rightDown.value === value) cellsAround.push(rightDown);
  const leftDown = findCellByCoord(board, {x: coord.x + 1, y: coord.y - 1});
  if ( leftDown && leftDown.value === value) cellsAround.push(leftDown);
  const rightUp = findCellByCoord(board, {x: coord.x - 1, y: coord.y + 1});
  if ( rightUp && rightUp.value === value) cellsAround.push(rightUp);
  const left = findCellByCoord(board, {x: coord.x - 1, y: coord.y});
  if ( left && left.value === value) cellsAround.push(left);
  const right = findCellByCoord(board, {x: coord.x + 1, y: coord.y});
  if ( right && right.value === value) cellsAround.push(right);
  const up = findCellByCoord(board, {x: coord.x, y: coord.y - 1});
  if ( up && up.value === value) cellsAround.push(up);
  const down = findCellByCoord(board, {x: coord.x, y: coord.y + 1});
  if ( down && down.value === value) cellsAround.push(down);
  return cellsAround;
}

// finding empty cells around specific cell (with value null)
const findCellsAroundCell = (board, coord, value) => {
  const cellsAround = [];
  const leftUp = findCellByCoord(board, {x: coord.x - 1, y: coord.y - 1});
  if ( leftUp && leftUp.value === value) cellsAround.push(coord);
  const rightDown = findCellByCoord(board, {x: coord.x + 1, y: coord.y + 1});
  if ( rightDown && rightDown.value === value) cellsAround.push(coord);
  const leftDown = findCellByCoord(board, {x: coord.x + 1, y: coord.y - 1});
  if ( leftDown && leftDown.value === value) cellsAround.push(coord);
  const rightUp = findCellByCoord(board, {x: coord.x - 1, y: coord.y + 1});
  if ( rightUp && rightUp.value === value) cellsAround.push(coord);
  const left = findCellByCoord(board, {x: coord.x - 1, y: coord.y});
  if ( left && left.value === value) cellsAround.push(coord);
  const right = findCellByCoord(board, {x: coord.x + 1, y: coord.y});
  if ( right && right.value === value) cellsAround.push(coord);
  const up = findCellByCoord(board, {x: coord.x, y: coord.y - 1});
  if ( up && up.value === value) cellsAround.push(coord);
  const down = findCellByCoord(board, {x: coord.x, y: coord.y + 1});
  if ( down && down.value === value) cellsAround.push(coord);
  return {
    cell: coord,
    count: cellsAround.length
  }
}

const findCellInNeighbors = (array, cell) => {
  return array.find(el => el.cell.id === cell.id);
}

// finding empty cells with two and more human cells as neighbors
const findEmptyCellsWithHumanNeigbors = (board) => {
  let allEmptyCellsAroundHumanCells = [];
  const humanCells = findHumanCells(board);
  for (let i = 0; i < humanCells.length; i++) {
    allEmptyCellsAroundHumanCells = allEmptyCellsAroundHumanCells.concat(
      findSpecificCellsAroundCell(board, humanCells[i], null)); // passing null - mean empty
  }
  const cellsWithTwoOrMoreHumanNeighbors = [];
  for (let i = 0; i < allEmptyCellsAroundHumanCells.length; i++) {
    const neighbors = findCellsAroundCell(board, allEmptyCellsAroundHumanCells[i], true);
    if (neighbors.count >= 2 && !findCellInNeighbors(cellsWithTwoOrMoreHumanNeighbors, neighbors.cell)) {
      cellsWithTwoOrMoreHumanNeighbors.push(neighbors);
    }
  }
  const res = [];
  for (let i = 0; i < cellsWithTwoOrMoreHumanNeighbors.length; i++) {
    const newCell = Object.assign({}, cellsWithTwoOrMoreHumanNeighbors[i].cell);
    newCell.value = true;
    res.push(newCell);
  }
  return res;
}

export const checkHumanThreeInARowEmpty = (board) => {
  const targetCells = findEmptyCellsWithHumanNeigbors(board);
  const res = [];
  for (let i = 0; i < targetCells.length; i++) {
    const lastTurn = targetCells[i];
    const a = checkDiagonalLineEmpty(
      board,
      lastTurn,
      true
    );
    res.push(a);
    const d = checkDiagonalLine1Empty(
      board,
      lastTurn,
      true
    );
    res.push(d);
    const b = checkHorizontallLineEmpty(
      board,
      lastTurn,
      true
    );
    res.push(b);
    const c = checkVerticalLineEmpty(
      board,
      lastTurn,
      true
    );
    res.push(c);
  }
  if (!res.length) return [];
  const maxCell = _.maxBy(res, 'count');
  if (findCellByCoord(board, maxCell.edgeOne)) {
    return [
      {
        priority: 1,
        count: maxCell.count,
        cell: findCellByCoord(board, maxCell.edgeOne)
      }
    ]
  } else {
    return [];
  }
};
