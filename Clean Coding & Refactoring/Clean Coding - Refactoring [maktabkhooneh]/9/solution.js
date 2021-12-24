// Good
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  fs.create(`./temp/${name}`);
}
