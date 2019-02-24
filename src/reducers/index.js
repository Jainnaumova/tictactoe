import { CREATE_BOARD, CHECK_CELL } from "../actions/board.action";
import { createBoard, findCell } from "./utilFunc";

export const initialState = {
  board: [],
  computerTurn: false,
  lastTurn: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      const r = createBoard(action.size);
      console.log('new created board:', r);
      return { ...state, board: createBoard(action.size) };
    case CHECK_CELL:
      const cell = findCell(state.board, action.data.id);
      cell.value = action.data.value;
      const turn = { x: cell.x, y: cell.y };
      console.log('turn', turn);
      return { ...state, computerTurn: !state.computerTurn, lastTurn: turn };
    default:
      return state;
  }
};
