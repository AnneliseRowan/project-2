const API = {

  getOneUserLibrary: function (id) {
    return $.ajax({
      type: 'GET',
      url: 'api/jon/book/' + id,
      data: JSON.stringify(id)
    });
  },
  getOneRead: function (id) {
    return $.ajax({
      url: 'api/jon/read/' + id,
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

  // console.log(window.userId, 'userid');
  const currentUserId = document.getElementById('userId').getAttribute('data-currentId');
  // console.log(currentUserId, 'currentUserId');
  API.getOneUserLibrary(currentUserId).then(function (data1) {
    console.log('data1:', data1);
    // return;
  });
  API.getOneRead(currentUserId).then(function (data2) {

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
