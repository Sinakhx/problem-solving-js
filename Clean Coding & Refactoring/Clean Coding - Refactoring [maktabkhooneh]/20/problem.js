// Bad
function hashIt(data) {
  // the hash
  let hash = 0;

  // length of string
  const length = data.length;

  // loop through every character in data
  for (let i = 0; i < length; i++) {
    // get character code
    const char = data.charCodeAt(i);
    // make the hash
    hash = (hash << 5) - hash + char;
    // convert to 32-bit integer
    hash &= hash;
  }
}
