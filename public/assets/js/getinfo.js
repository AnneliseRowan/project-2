const API = {
  getOneUserLibrary: function (example) {
    return $.ajax({
      type: 'GET',
      url: 'api/jon/book/:id',
      data: JSON.stringify(example)
    });
  },
  getOneRead: function () {
    return $.ajax({
      url: 'api/jon/read/',
      type: 'GET'
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: 'api/examples/' + id,
      type: 'DELETE'
    });
  }
};

const getInfo = function () {
  API.getOneUserLibrary().then(function (data1) {
    console.log('data1:', data1);
    // return;
  });
  API.getOneRead().then(function (data2) {
    console.log('data2:', data2);
    // return;
  });
};

getInfo();
