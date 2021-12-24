// Good

function hashItTo32BitInteger(data) {
  let hash = 0;
  const length = data.length;
  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
}
