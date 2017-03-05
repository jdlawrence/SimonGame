const initialState = [
  {
    color: 'green',
    active: false
  },
  {
    color: 'red',
    active: 'false'
  },
  {
    color: 'blue',
    active: 'false'
  },
  {
    color: 'yellow',
    active: 'false'
  }
];

// TODO
// Make a reducer that takes in a color on the action,
const QCstate = (state = initialState, action) => {
  return state;
}; 
// Iterates over all colors
// and changes the 'active' field of the corresponding color to true
