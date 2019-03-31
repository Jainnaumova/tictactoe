import { CREATE_BOARD, CHECK_CELL, RESET_STATE } from '../src/actions/board.action';
import { createBoard, checkCell, resetState, getNewBoard, handleClick, getNewState } from '../src/actions/board.action';

describe('BoardActions', () => {

  it('handles a createBoard action', () => {
    expect(createBoard(10))
      .toEqual({ type: CREATE_BOARD, size: 10})
  });

  it('handles a checkCell action', () => {
    expect(checkCell({ id: 1, value: true}))
      .toEqual({ type: CHECK_CELL, data: {id: 1, value: true} })
  });

  it('handles a resetState action', () => {
    expect(resetState())
      .toEqual({type: RESET_STATE})
  });
});

describe('Automatic creating new board', () => {

  it('it\'s return is a function and not an object', () => {
      expect(typeof getNewBoard('Yes')).toEqual('function');
    });

  it('it creates new board', () => {
    const size = { type: CREATE_BOARD, size: 10}
    const dispatch = jest.fn();

    getNewBoard(10)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(size)
  });
});

describe('Check cell', () => {

  const data = { type: CHECK_CELL, data: { id: 1, value: true}};

  it('handle a checkCell action', () => {

    const dispatch = jest.fn();
    handleClick(data.data)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(data)
  });
});

describe('Reset state', () => {

  it('it reset state', () => {
    const dispatch = jest.fn();

    getNewState()(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual({type: RESET_STATE});
  })
})
