const Actions = require('./actions')
const stdin = process.openStdin();

let option = null
let num1 = null
let num2 = null

const options = {
  1: 'sum',
  2: 'rest',
  3: 'multiply',
  4: 'divide'
}

console.log("-->[ Calculador ]<--\n");

function messages() {
  if(!option) {
    console.clear() 
    console.log(`Option list:
  1. sum
  2. rest
  3. multiply
  4. divide
Enter a number:`);
  } else {
    if(!num1) {
      console.log(`Enter first number:`)
    } else if(!num2) {
      console.log(`Enter second number:`)
    }
  }
}

stdin.addListener("data", (data) => {
  const choice = +data.toString()
  if(!option) {
    option = options[choice]

    if(!option) { return messages() }

    console.clear() 
    console.log(`Chosen option ${option}\n`)
    return messages()
  } else {
    if(!num1) {
      num1 = choice
      return messages()

    } else if(!num2){
      num2 = choice
      if(!num2) return messages()

      const resutl = calculator(num1, num2, option)
      console.log(`The result of ${option} ${num1} and ${num2} is: ${resutl}`)
      return process.exit()
    }
  }
})

messages()

function calculator(num1, num2, action) {
  if(isNaN(num1) || isNaN(num2)) 
    return('invalid properties')

  num1 = +num1
  num2 = +num2

  switch(action) {
    case options[1]: return Actions.sum(num1, num2)
    case options[2]: return Actions.rest(num1, num2)
    case options[3]: return Actions.multiply(num1, num2)
    case options[4]: return Actions.divide(num1, num2)

  }
}