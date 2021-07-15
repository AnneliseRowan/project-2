const API = {

  getAllOwnedBy: function (id) {
    return $.ajax({
      type: 'GET',
      url: 'api/jon/user/' + id,
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
  },

  getAllRead: function (id) {
    return $.ajax({
      type: 'GET',
      url: 'api/jon/read'
    });
  }
};

const getInfo = function () {
// console.log(window.userId, 'userid');
  const currentUserId = document.getElementById('userId').getAttribute('data-currentId');
  // console.log(currentUserId, 'currentUserId');
  API.getAllOwnedBy(currentUserId).then(function (data1) {
    console.log('data1:', data1);
    // return;
  });

  API.getOneRead(currentUserId).then(function (data2) {
    console.log('data2:', data2);
    // return;
  });

  API.getAllRead().then(function (data3) {
    console.log('data3:', data3);

    const friend = [];     

    for (let i = 0; i < data3.length; i++) {
      if (data3[i].UserId != currentUserId) {
        console.log('data3[i]', data3[i].UserId);
        console.log('current user id', currentUserId);

        friend.push(data3[i]);
        console.log(friend[0].User.firstName, 'this my friend Alexis O-o')
        console.log(friend[1], 'witchcraft');
      };
      // console.log('this my friend[0][User]]', friend[0]['User'][0]);

      };

    }

    // return;
  });
};

getInfo();
