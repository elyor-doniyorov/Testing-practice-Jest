const capitalize = (text) => {
  if (typeof text !== 'string') {
      return "Your input should be a string";
  } else {
      const newText = text.charAt(0).toUpperCase() + text.slice(1);
      text = newText;
      return text;
  }
}

module.exports = capitalize;