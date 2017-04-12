import {
  PUSH_HUMAN_PLAY, pushHumanPlay,
  PUSH_COMP_PLAY, pushCompPlay,
} from '../actions';
import reducer, { initialState } from './gameState';

describe('Methods of the gameState reducer', () => {
  it(`handles action ${PUSH_HUMAN_PLAY} with a single invocation`, () => {
    expect(reducer(initialState, pushHumanPlay('blue')).humanPlays)
      .toEqual(['blue']);
    expect(reducer(initialState, pushHumanPlay('red')).humanPlays)
      .toEqual(['red'])
    expect(reducer(initialState, pushHumanPlay('green')).humanPlays)
      .toEqual(['green'])
    expect(reducer(initialState, pushHumanPlay('yellow')).humanPlays)
      .toEqual(['yellow'])
  });

  it(`handles multiple calls to ${PUSH_HUMAN_PLAY}`, () => {
    var newState = reducer(initialState, pushHumanPlay('red'));
    expect(reducer(newState, pushHumanPlay('green')).humanPlays)
      .toEqual(['red', 'green']);
  })

  it(`handles calls to ${PUSH_COMP_PLAY}`, () => {
    expect(reducer(initialState, pushCompPlay('blue')).compPlays)
      .toEqual(['blue'])
  })

})