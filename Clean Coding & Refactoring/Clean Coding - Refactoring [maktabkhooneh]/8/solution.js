// Good
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true,
};

function createMenu(config) {
  const newConfig = {
    title: config.title || "Foo",
    body: config.body || "Bar",
    buttonText: config.buttonText || "Baz",
    cancellable: config.cancellable !== undefined ? config.cancellable : true,
  };
  return newConfig;
}

createMenu(menuConfig);
