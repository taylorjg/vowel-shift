const VOWELS = Array.from("aeiou");

const isVowel = (ch) => VOWELS.includes(ch);

const findVowelIndexes = (chars) => {
  const indexes = [];

  chars.forEach((ch, index) => {
    if (isVowel(ch)) indexes.push(index);
  });

  return indexes;
};

const range = (n) => Array.from(Array(n).keys());

const rotateN = (indexes, n) => {
  const length = indexes.length;
  const indexesRotated = Array(length);
  for (const index of range(length)) {
    const rotatedIndex = (index + n) % length;
    indexesRotated[index] = indexes[rotatedIndex];
  }
  return indexesRotated;
};

export const vowelShift = (s, n) => {
  const charsIn = Array.from(s);
  const vowelIndexes = findVowelIndexes(charsIn);
  const vowelIndexesRotated = rotateN(vowelIndexes, n)
  const charsOut = [...charsIn];
  for (const index of range(vowelIndexes.length)) {
    const inIndex = vowelIndexes[index];
    const outIndex = vowelIndexesRotated[index];
    charsOut[outIndex] = charsIn[inIndex];
  }
  return charsOut.join("");
};
