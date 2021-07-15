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
  // console.log(window.userId, 'userid');

  const currentUserId = document.getElementById('userId').getAttribute('data-currentId');
  API2.getAllOwnedBy(currentUserId).then(function (data1) {
    const bookTitle = [];
    const bookId = [];
    const bookAuthor = [];

    for (let i = 0; i < data1.length; i++) {
      // eslint-disable-next-line eqeqeq
      bookTitle.push(data1[i].Book.title);
      bookAuthor.push(data1[i].Book.author);
      bookId.push(data1[i].Book.id);
    };
    const uniqueBookTitle = [...new Set(bookTitle)];
    const uniqueBookAuthor = [...new Set(bookAuthor)];
    const uniqueBookId = [...new Set(bookId)];
    for (let j = 0; j < uniqueBookTitle.length; j++) {
      const bookTitleJ = uniqueBookTitle[j];
      const bookAuthorJ = uniqueBookAuthor[j];
      const bookIdJ = uniqueBookId[j];

      $('.userLib-card').append(`<div class="card border-light mb-3 mx-auto" style="max-width: 18rem;">
      <a href=localhost:3335/book/${bookIdJ}>
      
      <div class="card-body" id="${bookIdJ}>
      <h5 class="card-title"  </h5>
      <h6 class="card-text"> ${bookTitleJ} by: ${bookAuthorJ} </h6>
      </div>
      </a>    
        </div>`);
    }
  });

  API2.getOneRead(currentUserId).then(function (data2) {
    const bookTitle = [];
    const bookId = [];
    const bookAuthor = [];

    for (let i = 0; i < data2.length; i++) {
      // eslint-disable-next-line eqeqeq
      bookTitle.push(data2[i].Book.title);
      bookAuthor.push(data2[i].Book.author);
      bookId.push(data2[i].Book.id);
    };
    const uniqueBookTitle = [...new Set(bookTitle)];
    const uniqueBookAuthor = [...new Set(bookAuthor)];
    const uniqueBookId = [...new Set(bookId)];
    for (let j = 0; j < uniqueBookTitle.length; j++) {
      const bookTitleJ = uniqueBookTitle[j];
      const bookAuthorJ = uniqueBookAuthor[j];
      const bookIdJ = uniqueBookId[j];
      $('.read-card').append(`<div class="card border-light mb-3 mx-auto" style="max-width: 18rem;">
      <a href=localhost:3335/book/${bookIdJ}>
      
      <div class="card-body" id="${bookIdJ}>
      <h5 class="card-title"  </h5>
      <h6 class="card-text"> ${bookTitleJ} by: ${bookAuthorJ} </h6>
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
      $('.friend-card').append(`<div class="card border-light mb-3 mx-auto" style="max-width: 18rem;">
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
