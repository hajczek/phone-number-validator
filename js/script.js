function telephoneCheck(str) {
  // Check if passed str is a valid US phone number by using Regular Expressions
  return /^(1\s?)?(\(\d{3}\)|\d{3})\s?\-?(\d{3}\s?\-?\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/.test(str);
}
// Test function
telephoneCheck("555 555 5555");