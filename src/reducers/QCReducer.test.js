import reducer,{ initialState } from './QCReducer';
import { toggleColor } from '../actions';

describe('game reducer', () => {
  it('generates initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it(`handles action toggleColor`, () => {
    expect(
      reducer(initialState, toggleColor('blue'))
    ).toEqual({
      ...initialState,
      blue: true
    });
  });

});
