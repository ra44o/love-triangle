/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let trianglesNumber = 0;
  preferences.unshift(0);
  for(let firstSpichonee = 1; firstSpichonee < preferences.length; firstSpichonee++) {
    secondSpichonee = preferences[firstSpichonee];
    thirdSpichonee = preferences[secondSpichonee];
    if(preferences[thirdSpichonee] == firstSpichonee) {
      trianglesNumber ++;
    }
  }
  return Math.floor(trianglesNumber / 3);
};
