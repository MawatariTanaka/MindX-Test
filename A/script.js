// Part 1
function allLongestStrings(inputArray) {
  let longest = [];
  let currentLongest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > currentLongest) {
      longest = [];
      currentLongest = inputArray[i].length;
    }
    if (inputArray[i].length === currentLongest) {
      longest.push(inputArray[i]);
    }
  }
  return longest;
}

console.log(allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]));
console.log(allLongestStrings([]));

// Part 2
function alternatingSums(a) {
  team1 = [];
  team2 = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1.push(a[i]);
    } else {
      team2.push(a[i]);
    }
  }
  return [team1.reduce((a, b) => a + b, 0), team2.reduce((a, b) => a + b, 0)];
}

console.log(alternatingSums([60, 40, 55, 75, 64]));
console.log(alternatingSums([]));
console.log(alternatingSums([60]));
