const stringLength = (str) => {
  if(str.length < 1 || str.length > 10) {
    return "Your text should contain not less than one element or not more than ten elements";
  }
  return str.length;
}

module.exports = stringLength;