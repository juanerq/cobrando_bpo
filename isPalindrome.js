const isPalindrome = (str) => {
  const word = str.trim()
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

console.log(isPalindrome('mada'))