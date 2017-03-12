const comparePlays = function(compPlays, humanPlays) {
  if (compPlays.length === 0 || humanPlays.length === 0 || compPlays.length !== humanPlays.length) {
    return false;
  }
  for (var i = 0; i < humanPlays.length; i++) {
    if (compPlays[i] !== humanPlays[i]) {
      return false;
    }
  }
  return true;
};

export default comparePlays;