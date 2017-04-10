import comparePlays from './comparePlays';

describe('Compare plays helper function', () => {
  it('Expects comparePlays to return false if either human or comp array is empty', () => {
    var compPlays = [];
    var humanPlays = [];
    expect(comparePlays(compPlays, humanPlays)).toEqual(false);
  });
  it('Expects comparePlays to accurately compare populated arrays', () => {
    var compPlays = ['red', 'blue', 'green'];
    var humanPlays = ['red', 'blue', 'green'];
    expect(comparePlays(compPlays, humanPlays)).toEqual(true);
  });
})