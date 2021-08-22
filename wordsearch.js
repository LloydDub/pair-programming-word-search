const transpose = function(matrix) {
  let array = [];
  array = Array.from({ length: matrix[0].length }, () => Array(matrix.length).fill(0));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      array[col][row] = matrix[row][col];
    }
  }
  return array;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin)
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transposeLetters = transpose(letters);
  const verticalJoin = transposeLetters.map(ls => ls.join(''));
  // console.log(verticalJoin)
  for (const column of verticalJoin) {
    if (column.includes(word)) {
      return true;
    }
  }


  return false;
};
module.exports = wordSearch;
