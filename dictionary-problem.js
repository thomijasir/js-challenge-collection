class Dictionary {
  constructor(words) {
    this.words = words;
    console.log("Initialize Class");
  }

  start() {
    console.log(this.words);
  }

  findOne(word) {
    const getWord = this.words.includes(word);
    if (getWord) {
      return true;
    }
    return false;
  }

  findWithWildCard(word) {
    return this.words.some((item) => {
      const makeTemplate = word.replaceAll("*", ".");
      const regex = new RegExp(`^${makeTemplate}$`);
      return regex.test(item);
    });
  }

  validateWordInSentence(sentence, dictionary) {
    const validationCheck = [];
    dictionary.forEach((item) => {
      const makeRegexTemplate = `${item}`;
      const regex = new RegExp(makeRegexTemplate, "i");
      const getTest = regex.test(sentence);
      validationCheck.push(getTest);
      console.log(`GET NAME ${item}`, getTest);
      // console.log('RUN');
    });
    return !validationCheck.includes(false);
  }

  polydromCheck(sentence) {
    const riverseWord = [];
    const sentenceToArr = [...sentence];
    const lSentence = sentence.length;
    for (let i = lSentence - 1; i >= 0; i--) {
      riverseWord.push(sentenceToArr[i]);
    }
    console.log(lSentence);
    console.log("Reverse: ", riverseWord.join(""));
    console.log("Sentence: ", sentence);
  }
}

// Make Instance
const addWords = ["dog", "cat", "tiger", "monkey"];
const sample = new Dictionary(addWords);

// Polidrom Test
const samplePolydrom = "Hello"; // true

sample.polydromCheck(samplePolydrom);

// Testing simple Dictionary

sample.start();
console.log(sample.findOne("dog")); // true
console.log(sample.findWithWildCard("*at")); // true
console.log(sample.findWithWildCard("*o*")); // true

/*
input = "Testing Coding In Shopify"
dictionary = ['Testing', 'Coding', 'In', 'Shopify']
= it should return true

input = "Testing Coding In Shopify"
dictionary = ['Testing', 'Coding', 'In']
= it should return false
*/
const sentence = "testingcodinginshopify";
const dictionary = ["testing", "coding", "in"];

console.log(sample.validateWordInSentence(sentence, dictionary));
