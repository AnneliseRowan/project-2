const API2 = {

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
  const currentUserId = document.getElementById('userId').getAttribute('data-currentId');
  API2.getAllOwnedBy(currentUserId).then(function (data1) {
    console.log('data1[0].Book:', data1[0].Book);

    for (let i = 0; i < data1.length; i++) {
      const bookTitle = data1[i].Book.title;
      const bookAuthor = data1[i].Book.author;
      const bookId = data1[i].Book.id;

      $('.userLib-card').append(`<div class="card border-info mb-3 mx-auto" style="max-width: 18rem;">
      <a href=localhost:3335/book/${bookId}>
      
      <div class="card-body" id="${bookId}>
      <h5 class="card-title"  </h5>
      <h6 class="card-text"> ${bookTitle} by: ${bookAuthor} </h6>
      </div>
      </a>    
        </div>`);
    }
  });

  API2.getOneRead(currentUserId).then(function (data2) {
    for (let i = 0; i < data2.length; i++) {
      const bookTitle = data2[i].Book.title;
      const bookAuthor = data2[i].Book.author;
      const bookId = data2[i].Book.id;

      $('.read-card').append(`<div class="card border-info mb-3 mx-auto" style="max-width: 18rem;">
      <a href=localhost:3335/book/${bookId}>
      
      <div class="card-body" id="${bookId}>
      <h5 class="card-title"  </h5>
      <h6 class="card-text"> ${bookTitle} by: ${bookAuthor} </h6>
      </div>
      </a>    
        </div>`);
    }
  });

  API2.getAllRead().then(function (data3) {
    const friendFirst = [];
    const friendId = [];

    for (let i = 0; i < data3.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (data3[i].UserId != currentUserId) {
        friendFirst.push(data3[i].User.firstName + ' ' + data3[i].User.lastName);
        // friendLast.push(data3[i].User.lastName);
        friendId.push(data3[i].User.id);
      };
    };
    const uniqueFriendFirst = [...new Set(friendFirst)];
    // const uniqueFriendLast = [...new Set(friendLast)];
    const uniqueFriendId = [...new Set(friendId)];
    for (let j = 0; j < uniqueFriendFirst.length; j++) {
      const firstName = uniqueFriendFirst[j];
      // const lastName = uniqueFriendLast[j];
      const friendId = uniqueFriendId[j];
      $('.friend-card').append(`<div class="card border-info mb-3 mx-auto" style="max-width: 18rem;">
          <a href=localhost:3335/friend/${friendId}>
        
          <div class="card-body" id="${friendId}>
            <h5 class="card-title"  </h5>
            <h6 class="card-text"> ${firstName} </h6>
          </div>
          </a>
        </div>`);
    }
  }

    // return;
  );
};

getInfo();
