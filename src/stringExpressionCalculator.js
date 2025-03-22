const add = (inputString) => {
  
    if(inputString=="") return 0;

    const numbers = inputString.split(",");

    if(numbers.length==1) return parseInt(numbers[0]);
    
    return parseInt(numbers[0])+parseInt(numbers[1]);
}

module.exports = add;