function toCase(text) {
  if (!text) {
    return "-";
  }
  return `${text.toLowerCase()}-${text.toUpperCase()}`;
}


const text = prompt("Enter text:");
alert(toCase(text));