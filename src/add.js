
function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const delimiterPattern = numbers.substring(2, delimiterEnd);
      delimiter = new RegExp(delimiterPattern);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    const numList = numbers.split(delimiter).map(num => parseInt(num, 10));
  
    const negatives = numList.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numList.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  