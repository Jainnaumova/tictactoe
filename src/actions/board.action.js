export const CREATE_BOARD = "CREATE_BOARD";
export const CHECK_CELL = "CHECK_CELL";
export const RESET_STATE = 'RESET_STATE';

export const createBoard = size => ({
  type: CREATE_BOARD,
  size
});

export const checkCell = data => ({
  type: CHECK_CELL,
  data // data: {id: .., value: true or false}
});

export const resetState = () => ({
  type: RESET_STATE
})

// thunk
export const getNewBoard = (size, level) => {
  return dispatch => {
    return dispatch(createBoard(size, level));
  };
};

export const handleClick = data => {
  return dispatch => {
    return dispatch(checkCell(data));
  };
};

export const getNewState = () => {
  return dispatch => {
    return dispatch(resetState())
  }
}
