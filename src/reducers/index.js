import { CREATE_BOARD, CHECK_CELL, RESET_STATE } from "../actions/board.action";
import { createBoard, findCell } from "../utils/utilFunc";

export const initialState = {
  board: [],
  computerTurn: false,
  lastTurn: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, board: createBoard(action.size) };
    case CHECK_CELL:
      const cell = findCell(state.board, action.data.id);
      cell.value = action.data.value;
      const turn = { x: cell.x, y: cell.y };
      return { ...state, computerTurn: !state.computerTurn, lastTurn: turn };
    case RESET_STATE:
      return {...state, computerTurn: false, lastTurn: null}
    default:
      return state;
  }
};
