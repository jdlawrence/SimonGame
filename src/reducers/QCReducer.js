const initialState = [
  {
    color: 'green',
    active: false
  },
  {
    color: 'red',
    active: false
  },
  {
    color: 'blue',
    active: false
  },
  {
    color: 'yellow',
    active: false
  }
];


function QCs(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default QCs;


// TODO
// Make a reducer that takes in a color on the action,
// Iterates over all colors
// and changes the 'active' field of the corresponding color to true
