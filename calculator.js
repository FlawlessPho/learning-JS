let number1 = Number(prompt("enter a number:"))
console.log(number1)

let number2 = Number(prompt("enter another number:"))
console.log(number2)

let operation = prompt("enter the operation youd like to do:")

switch (operation){
  case "+":
    result = number1 + number2
    break

  case "-":
    result = number1 - number2
    break
    
  case "*":
    result = number1 * number2
    break
    
  case "/":
    result = number1 / number2
    break
    
  default:
    console.log("unknown operation")
}

function numberFormatter(number){
  let stringNumber = number.toString()
  let result = ""
  for (let i = 0; i < stringNumber.length;i++){
    const currentCharacter = stringNumber[stringNumber.length-i-1]
    result += currentCharacter

    if((i+1)%3 === 0 && i !== 0){
      result += ","
    }
  }
  return result.split("").reverse().join("")
}

console.log(numberFormatter(result))
