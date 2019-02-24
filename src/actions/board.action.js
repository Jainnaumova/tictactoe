export const CREATE_BOARD = "CREATE_BOARD";
export const CHECK_CELL = "CHECK_CELL";

export const createBoard = size => ({
  type: CREATE_BOARD,
  size
});

export const checkCell = data => ({
  type: CHECK_CELL,
  data // data: {id: .., value: true or false}
});

// thunk
export const getNewBoard = size => {
  return dispatch => {
    return dispatch(createBoard(size));
  };
};

export const handleClick = data => {
  return dispatch => {
    return dispatch(checkCell(data));
  };
};
