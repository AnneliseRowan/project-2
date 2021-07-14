// passport might need update/delete - matches authcontroller.js (use ajax call for other apis)

$('#add-user').on('click', function (event) {
  event.preventDefault();

  const newAccount = {
    firstName: $('#inputFirst').val().trim(),
    lastName: $('#inputLast').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim()
  };

  if (newAccount.password.length > 0 && newAccount.email.length > 0 && newAccount.password.length > 0 && newAccount.lastName.length > 0 && newAccount.firstName.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/register',
      data: newAccount
    }).then(() => {
      window.location.href = '/';
    });
  } else {
    console.log('**Please fill out entire form**');
    $('#create-err-msg').empty('').text('**Please fill out entire form**');
  }
});

$('#update-user').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  // capture All changes
  const changeUser = {
    firstName: $('#inputFirst').val().trim(),
    lastName: $('#inputLast').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim()
  };
  $('#err-msg').empty('');
  // $('#change-user-modal').modal('show');
  console.log(changeUser);

  if (changeUser.password.length > 0 && changeUser.email.length > 0 && changeUser.password.length > 0 && changeUser.lastName.length > 0 && changeUser.firstName.length > 0) {
    $.ajax({
      type: 'PUT',
      url: `/api/user/${id}`,
      data: changeUser
    }).then((result) => {
      console.log('Updated user:', result);
      // Reload the page to get the updated list
      window.location.href = '/logout';
    });
  } else {
    console.log('**Please fill out entire form**');
    $('#update-err-msg').empty('').text('**Please fill out entire form**');
  }
});

// DELETE   ***************************************************
$('#delete-user').on('click', function (event) {
  event.preventDefault();
  $('#err-msg').empty('');
  $('#delete-user-modal').modal('show');
});

$('#confirm-delete').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  const deleteUser = {
    email: $('#userEmail').val().trim(),
    password: $('#userPassword').val().trim()
  };

  if (deleteUser.email.length > 0 && deleteUser.password.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/user/confirm',
      data: deleteUser
    }).then((result) => {
      if (result) {
        $.ajax(`/api/user/${id}`, {
          type: 'DELETE'
        }).then(() => {
          console.log('Deleted user', deleteUser);
          // Reload the page to get the updated list
          window.location.href = '/logout';
        });
      } else {
        $('#err-msg').empty('').text('Wrong credentials!');
      }
    });
  } else {
    console.log('fill out entire form');
    $('#err-msg').empty('').text('fill out entire form');
  }
});

$('#register').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/register';
});

$('#login-modal').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

$('#go-home').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/';
});

$('#login').on('click', function (event) {
  event.preventDefault();

  const user = {
    email: $('#email').val().trim(),
    password: $('#user_password').val().trim()
  };

  $.post('/api/login', user, (result) => {
    // console.log(result);
    if (result.loggedIn) {
      $(document.location).attr('href', '/dashboard');
    } else {
      $('#login-err-msg').empty('').text(result.error);
      $('#user-info').modal('hide');
    }
  });
});

// this is for book card
<<<<<<< HEAD
$(document).ready(function () {
  document.getElementById('heart').onclick = function () {
    document.querySelector('.fa-gratip+3.ay').style.color = '#E74C3C';
  };
});
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD


$(document).ready(function () {
  document.getElementById('heart').onclick = function () {
    document.querySelector('.fa-gratip+3.ay').style.color = '#E74C3C';
  };
});


=======
>>>>>>> e3648837e742a247bfff0790f191059708538fe5
// move this to example.handlebar
//$(document).ready(function () {
 // document.getElementById('heart').onclick = function () {
  //  document.querySelector('.fa-gratip+3.ay').style.color = '#E74C3C';
  //};
//});
>>>>>>> main
<<<<<<< HEAD

=======
>>>>>>> e3648837e742a247bfff0790f191059708538fe5

// JS for Dynamic Questions - Need to Fix this

// $(Survey.Survey.cssType = 'bootstrap');

// const json = {
//   'elements': [
//     {
//       'type': 'tagbox',
//       'isRequired': true,
//       'choicesByUrl': {
//         'url': 'https://restcountries.eu/rest/v1/all'
//       },
//       'name': 'countries',
//       'title': 'Please select all the countries you visited in the last 3 years.'
//     }
//   ]
// };

// window.survey = new Survey.Model(json);

// survey
//   .onComplete
//   .add(function (result) {
//    document
//             .querySelector('#surveyResult')
//             .innerHTML = 'result: ' + JSON.stringify(result.data);
//     });

// survey.data = {
//     countries: ['France']
// };

// $('#surveyElement').Survey({model: survey});
<<<<<<< HEAD
>>>>>>> main
=======

>>>>>>> main
