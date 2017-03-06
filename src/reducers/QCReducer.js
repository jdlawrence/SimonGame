// const initialState = [
//   {
//     color: 'green',
//     active: false
//   },
//   {
//     color: 'red',
//     active: false
//   },
//   {
//     color: 'blue',
//     active: false
//   },
//   {
//     color: 'yellow',
//     active: false
//   }
// ];

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
      console.log('toggled Color', toggledColor);
      return Object.assign({}, state, toggledColor);
    default:
      return state;
  }
}

export default QCs;


// TODO
// Make a reducer that takes in a color on the action,
const QCstate = (state = initialState, action) => {
  return state;
};
// Iterates over all colors
// and changes the 'active' field of the corresponding color to true
