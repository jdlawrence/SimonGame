import comparePlays from './comparePlays';
import { PUSH_HUMAN_PLAY } from '../actions';
import reducer, { initialState } from './gameState';

describe('Methods of the gameState reducer', () => {
  it('FIX THIS TEST', () => {
    expect(8).toEqual(2);
  });

  it(`handles action ${PUSH_HUMAN_PLAY}`, () => {
    expect(reducer(initialState, pushHumanPlay('blue')))
      .toEqual({ ...initialState, blue: true });
  });


})