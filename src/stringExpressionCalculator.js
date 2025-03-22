const add = (inputString) => {
  
    if(inputString=="") return 0;

    const numbers = inputString.split(/\n|,/);

    let sum = 0;

    for(const number of numbers) {
      sum += parseInt(number);
    }

    return sum;
}

module.exports = add;