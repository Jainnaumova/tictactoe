
// create Board
export const createBoard = size => {
  let board = [];
  let ind = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      ind++;
      const newCell = {
        id: ind,
        x: i,
        y: j,
        value: null
      };
      board.push(newCell);
    }
  }
  return board;
};

export const findHumanCells = (board) => board.filter(cell => cell.value === true);

export const findComputerCells = (board) => board.filter(cell => cell.value === false);

// returnin array with elements having count the same as given
export const findWithCount = (array, count) => array.filter(el => el.count === count);

// find checked Cell by Id
export const findCell = (board, id) => board.find(cellObj => cellObj.id === id);

// find emptyCells array
export const findEmptyCells = board =>
  board.filter(cellObj => cellObj.value === null);

// TODO: do I need it ???????
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
  if (!coord) return;
  return board.find(cellObj => cellObj.x === coord.x && cellObj.y === coord.y);
};
