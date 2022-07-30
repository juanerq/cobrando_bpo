const primeNumbers = () => {
  let primeNumbers = [];
  for (let i = 2; i < 100; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function isPrime(num) {
  if(num === 0 || num === 1 || num === 4) return false
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false
  }
  return true;
}


console.log(primeNumbers())