// Good - OCP (Open/Closed Principle)
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }

  request(url) {
    return makeAjaxCall(url).then((response) => {
      // transform response and return
    });
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }

  request(url) {
    return makeHttpCall(url).then((response) => {
      // transform response and return
    });
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    this.adapter.request(url);
  }
}

const nodeAdapter = new NodeAdapter();
const httpRequest = new HttpRequester(nodeAdapter);
httpRequest.fetch("/url");
