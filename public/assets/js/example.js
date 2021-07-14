// ORM goes with other examples

// Get references to page elements
const $exampleText = $('#example-text');
const $exampleDescription = $('#example-description');
const $submitBtn = $('#submit');
const $exampleList = $('#example-list');

// The API object contains methods for each kind of request we'll make
const API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/examples',
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: 'api/examples',
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

// refreshExamples gets new examples from the db and repopulates the list
const refreshExamples = function () {
  API.getExamples().then(function (data) {
    const $examples = data.map(function (example) {
      const $a = $('<a>')
        .text(example.text)
        .attr('href', '/example/' + example.id);

      const $li = $('<li>')
        .attr({
          class: 'list-group-item',
          'data-id': example.id
        })
        .append($a);

      const $button = $('<button>')
        .addClass('btn btn-danger float-right delete')
        .text('ｘ');

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
const handleFormSubmit = function (event) {
  event.preventDefault();

  const example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim(),
    UserId: window.userId
  };

  if (!(example.text && example.description)) {
    alert('You must enter an example text and description!');
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val('');
  $exampleDescription.val('');
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
const handleDeleteBtnClick = function () {
  const idToDelete = $(this).parent().attr('data-id');

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);
$exampleList.on('click', '.delete', handleDeleteBtnClick);

// the autofill
// added this to try and return book data for autopopulate

const getBooks = () => {
  return $.ajax({
    url: 'api/books',
    type: 'GET'
  }).then(function (data) {
    const booksArray = [];
    for (let index = 0; index < data.length; index++) {
      const titles = data[index].title;
      const authors = data[index].author;
      const titleAndAuthor = `${titles} - ${authors}`;
      booksArray.push(titleAndAuthor);
    }
    return booksArray;
  });
};

const autoCompleteJS = new autoComplete({
  data: {
    src: getBooks(),
    cache: true
  },
  cache: true,
  filter: (list) => {
  // Filter duplicates
  // incase of multiple data keys usage
    const filteredResults = Array.from(
      new Set(list.map((value) => value.match))
    ).map((book) => {
      return list.find((value) => value.match === book);
    });

    return filteredResults;
  },
  placeHolder: '            Search for Book Titles and Authors!',
  resultsList: {
    element: (list, data) => {
      console.log('are we in here?');
      const info = document.createElement('p');
      if (data.results.length > 0) {
        info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
      } else {
        info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
      }
      list.prepend(info);
    },
    noResults: true,
    maxResults: 15,
    tabSelect: true
  },

  resultItem: {
    element: (item, data) => {
      // Modify Results Item Style
      item.style = 'display: flex; justify-content: space-between;';
      // Modify Results Item Content
      item.innerHTML = `
      <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
          ${data.match}
      </span>
      <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
      </span>`;
    },
    highlight: true
  },
  events: {
    input: {
      focus: () => {
        if (autoCompleteJS.input.value.length) autoCompleteJS.start();
      }
    }
  }
});
autoCompleteJS.input.addEventListener('selectionFirst', function (event) {
  const feedback = event.detail;
  autoCompleteJS.input.blur();
  // Prepare User's Selected Value
  const selectionFirst = feedback.selectionFirst.value;
  // Render selected choice to selection div
  document.querySelector('.selectionFirst').innerHTML = selectionFirst;
  // Replace Input value with the selected value
  autoCompleteJS.input.value = selectionFirst;
  // Console log autoComplete data feedback
  console.log(feedback);
  console.log(feedback.selectionFirst.value);
});
autoCompleteJS.input.addEventListener('selection', function (event) {
  const feedback = event.detail;
  autoCompleteJS.input.blur();
  // Prepare User's Selected Value
  const selection = feedback.selection.value;
  // Render selected choice to selection div
  document.querySelector('.selection').innerHTML = selection;
  // Replace Input value with the selected value
  autoCompleteJS.input.value = selection;
  // Console log autoComplete data feedback
  console.log(feedback);
  console.log(feedback.selection.value);
});
