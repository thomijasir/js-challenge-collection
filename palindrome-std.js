const wordA = "eye"; // true
const wordB = "kasur ini rusak"; // true
const wordC = "bukan"; // false

const isPalindrome = (words) => {
  // Step to Solve
  // 1. String to array
  // 2. Reverse Array
  // 3. Join array to string
  // 5. compare reverse with words

  const wordArr = words.split("");
  let newWord = "";
  for (let i = wordArr.length - 1; i >= 0; i--) {
    const char = wordArr[i];
    newWord += char;
  }

  if (newWord === words) {
    return true;
  }

  return false;
};

console.log(`is Palindrome? ${isPalindrome(wordB)}`);
