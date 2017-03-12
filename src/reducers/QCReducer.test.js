import reducer, { initialState } from './QCReducer';
import { TOGGLE_COLOR, toggleColor } from '../actions';

describe('game reducer', () => {
  it('generates initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it(`handles action ${TOGGLE_COLOR}`, () => {
    expect(reducer(initialState, toggleColor('blue')))
      .toEqual({ ...initialState, blue: true });
    expect(reducer(initialState, toggleColor('red')))
      .toEqual({ ...initialState, red: true });
    expect(reducer(initialState, toggleColor('green')))
      .toEqual({ ...initialState, green: true });
    expect(reducer(initialState, toggleColor('yellow')))
      .toEqual({ ...initialState, yellow: true });

  });

});
