/**
* checking rows starting from each human marked cell in all directions
* and counting how many human cell in a row are there
*
*
* return: the array with edge cells for rows with max human cells
**/

import _ from 'lodash';
import {
  findCellByCoord,
  findCell,
  findHumanCells,
  findComputerCells,
  findWithCount
} from '../utils/utilFunc';

// to left top diagonal
const goLeftUp = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to right bottom diagonal
const goRightDown = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to left bottom diagonal
const goLeftDown = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to right top diagonal
const goRightUp = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to left horizontal
const goLeft = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to right horizontal
const goRight = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to top vertical
const goUp = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// to bottom vertical
const goDown = (board, coord, value, count = 0) => {
  const res = {};
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
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value === null) {
    res.edge = coord;
    res.count = count;
  } else if (findCellByCoord(board, coord) && findCellByCoord(board, coord).value !== value) {
    res.count = count;
  } else if (!findCellByCoord(board, coord)) {
    res.count = count;
  }
  return res;
};

// check lines

const checkDiagonalLine = (board, coord, value) => {
    const one = goLeftUp(board, coord, value, -1);
    const two = goRightDown(board, coord, value, -1);
  return {
    edgeOne: one.edge,
    edgeTwo: two.edge,
    count: one.count + two.count + 1
  }
};

const checkDiagonalLine1 = (board, coord, value) => {
  const one = goLeftDown(board, coord, value, -1);
  const two = goRightUp(board, coord, value, -1);
  return {
    edgeOne: one.edge,
    edgeTwo: two.edge,
    count: one.count + two.count + 1
  }
};

const checkHorizontallLine = (board, coord, value) => {
  const one = goLeft(board, coord, value, -1);
  const two = goRight(board, coord, value, -1);
  return {
    edgeOne: one.edge,
    edgeTwo: two.edge,
    count: one.count + two.count + 1
  }
};

const checkVerticalLine = (board, coord, value) => {
  const one = goUp(board, coord, value, -1);
  const two = goDown(board, coord, value, -1);
  return {
    edgeOne: one.edge,
    edgeTwo: two.edge,
    count: one.count + two.count + 1
  }
};

export const checkHumanThreeInARow = (board) => {
  const humanCells = findHumanCells(board);
  const res = [];
  for (let i = 0; i < humanCells.length; i++) {
    const lastTurn = humanCells[i];
    const a = checkDiagonalLine(
      board,
      lastTurn,
      true
    );
    res.push(a);
    const d = checkDiagonalLine1(
      board,
      lastTurn,
      true
    );
    res.push(d);
    const b = checkHorizontallLine(
      board,
      lastTurn,
      true
    );
    res.push(b);
    const c = checkVerticalLine(
      board,
      lastTurn,
      true
    );
    res.push(c);
  }
  _.remove(res, el => {
    return !el.edgeOne && !el.edgeTwo;
  });
  const maxCount = _.maxBy(res, 'count').count;
  const withMaxCounts = findWithCount(res, maxCount);
  const resList = [];
  for (let i = 0; i < withMaxCounts.length; i++) {
    resList.push({
      priority: 2,
      count: withMaxCounts[i].count,
      cell: findCellByCoord(board, withMaxCounts[i].edgeOne) || findCellByCoord(board, withMaxCounts[i].edgeTwo)
    });
  }
  return resList;
};
