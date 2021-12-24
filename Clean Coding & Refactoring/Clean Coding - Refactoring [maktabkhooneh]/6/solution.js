// Bad
function createMenu(title, body, buttonText, cancellable) {
  //...
}

createMenu("Foo", "Bar", "Baz", true);



// Good
function createMenu({ title, body, buttonText, cancellable }) {
  //...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
});
