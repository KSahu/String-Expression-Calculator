const add = (inputString) => {
  
    if(inputString=="") return 0;

    const {input, delimiter} = getDelimiter(inputString);

    // Split the remaining string by the delimiter and map it to numbers
    const numbers = input.split(new RegExp(`\\${delimiter}|\\n`));

    let sum = 0;

    for(const number of numbers) {
      const parsedNumber = parseInt(number);
      if(parsedNumber < 0) throw Error(`negative numbers not allowed ${parsedNumber}`)
      sum += parsedNumber;
    }

    return sum;
}

const getDelimiter = (input) => {
    const delimiterMatch = input.match(/^\/\/(.*?)\n/);
    let delimiter = ',';
    
    // If a delimiter is found, use it; otherwise, default to ","
    if (delimiterMatch) {
      delimiter = delimiterMatch[1];
      // Remove the first line (which contains the delimiter) and the newline
      input = input.slice(delimiterMatch[0].length);
    }
  
    return {
        delimiter,
        input
    }
}

module.exports = add;