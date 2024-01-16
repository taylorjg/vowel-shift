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

const rotateArrayN = (arr, n) => {
  const length = arr.length;
  const arrRotated = Array(length);
  for (const index of range(length)) {
    const finalRotatedIndex = (index + n) % length;
    arrRotated[index] = arr[finalRotatedIndex];
  }
  return arrRotated;
};

export const vowelShift = (s, n) => {
  const charsIn = Array.from(s);
  const vowelIndexes = findVowelIndexes(charsIn);
  const vowelIndexesRotated = rotateArrayN(vowelIndexes, n)
  const charsOut = [...charsIn];
  for (const index of range(vowelIndexes.length)) {
    const inIndex = vowelIndexes[index];
    const outIndex = vowelIndexesRotated[index];
    charsOut[outIndex] = charsIn[inIndex];
  }
  return charsOut.join("");
};
