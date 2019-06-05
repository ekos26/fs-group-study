/*
Given a flightLength and an array of movieLengths, return true if there exists two movies that add up EXACTLY to the flightLength

flightLength = 160
movieLengths = [80, 110, 40]
=> false

flightLength = 160
movieLengths = [80, 110, 80]
=> true

flightLength = 160
movieLengths = [20, 30, 110, 40, 50]
=> true

@param {integer} flightLength
@param {integer[]} movieLengths
@return {boolean}
*/

function existsTwoMovies(flightLength, movieLengths) {
  let diff = 0;
  let hash = {};

  for (let i = 0; i < movieLengths.length; i++) {
    diff = flightLength - movieLengths[i];
    if (hash[diff]) {
      return true;
    } else {
      hash[movieLengths[i]] = true;
    }
  }

  return false;
}

module.exports = existsTwoMovies;
