import { PUSH_HUMAN_PLAY, pushHumanPlay } from '../actions';
import reducer, { initialState } from './gameState';

describe('Methods of the gameState reducer', () => {
  it(`handles action ${PUSH_HUMAN_PLAY} with a single action`, () => {
    expect(reducer(initialState, pushHumanPlay('blue')).plays)
      .toEqual(['blue']);
    expect(reducer(initialState, pushHumanPlay('red')).plays)
      .toEqual(['red'])
    expect(reducer(initialState, pushHumanPlay('green')).plays)
      .toEqual(['green'])
    expect(reducer(initialState, pushHumanPlay('yellow')).plays)
      .toEqual(['yellow'])
  });

  it(`handles multiple calls to ${PUSH_HUMAN_PLAY}`, () => {
    var newState = reducer(initialState, pushHumanPlay('red'));
    expect(reducer(newState, pushHumanPlay('green')).plays)
    .toEqual(['red', 'green']);
  })

})