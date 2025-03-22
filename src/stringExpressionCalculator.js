const add = (a) => {
  
    if(a=="") return 0;

    if(a.length==1) return parseInt(a);

    const numbers = a.split(",");
    return parseInt(numbers[0])+parseInt(numbers[1]);
}

module.exports = add;