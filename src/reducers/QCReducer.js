const initialState = {
  green: false,
  red: false,
  blue: false,
  yellow: false 
};
function QCs(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      var toggledColor = {};
      toggledColor[action.color] = !state[action.color];
      return Object.assign({}, state, toggledColor);
    default:
      return state;
  }
}

export default QCs;
