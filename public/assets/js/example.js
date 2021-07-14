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

// const getBooks = (data) => {
//   return $.ajax({
//     url: 'api/books',
//     type: 'GET',
//     data: JSON.parse(data)
//   });
// };
// const getMore = () => {
//   const books = getBooks();
//   const bookArray = [];
//   books.forEach(book => {
//     bookArray.push(book.title);
//   });
//   return bookArray;
// };

const getBooks = () => {
  return $.ajax({
    url: 'api/books',
    type: 'GET'
  }).then(function (data) {
    const booksArray = [];
    for (let index = 0; index < data.length; index++) {
      const titles = data[index].title;
      const authors = data[index].author;
      console.log('TITLES AND AUTHORS', titles + authors);
    }
    // console.log(`${data[0].title} - ${data[0].author}`);
  });
};
getBooks();
// eslint-disable-next-line new-cap
// this works even if it is underlined lol

const autoCompleteJS = new autoComplete({
  data: {
    src: ['To Kill a Mockingbird - Harper Lee',
      '1984 - George Orwell',
      'Pride and Prejudice - Jane Austen',
      'Animal Farm - George Orwell',
      'The Hobbit - JRR Tolkien',
      'The Diary of a Young Girl - Anne Frank',
      'The Catcher in the Rye - JD Salinger',
      'The Little Prince - Antoine De Saint-Exupery',
      'The Great Gatsby - F Scott Fitzgerald',
      'Jane Eyre - Charlotte Bronte',
      'The Lord of the Rings - JRR Tolkien',
      'Romeo and Juliet - William Shakespeare',
      'The Chronicles of Narnia - CS Lewis',
      'Fahrenheit 451 - Ray Bradbury',
      'Lord of the Flies - William Golding',
      'The Book Thief - Marcus Zusak',
      'The Giver - Lois Lowry',
      'Kite Runner - Khaled Hosseini',
      "Charlotte's Web - EB White",
      'Alice in Wonderland - Lewis Carroll',
      'Little Women - Louisa May Alcott',
      'Of Mice and Men - John Steinbeck',
      'Wuthering Heights - Emily Bronte',
      'Night - Elie Wiesel',
      'Gone With the Wind - Margaret Mitchell',
      'The Adventures of Huckleberry Finn - Mark Twain',
      'The Picture of Dorian Gray - Oscar Wilde',
      'Hamlet - William Shakespeare',
      "The Hitchhiker's Guide to the Galaxy - Douglas Adams",
      'Brave New World - Aldous Huxley',
      'Les Miserables - Victor Hugo',
      'Memoirs of a Geisha - Arthur Golden',
      'Crime and Punishment - Fyodor Dostoyevsky',
      'The Secret Garden - Frances Hodgson Burnett',
      'The Alchemist - Paulo Coelho',
      'A Christmas Carol - Charles Dickens',
      'The Color Purple - Alice Walker',
      'The Help - Kathryn Stockett',
      'The Grapes of Wrath - John Steinbeck',
      'The Adventures of Tom Sawyer - Mark Twain',
      "Ender's Game - Orson Scott Card",
      'One Hundred Years of Solitude - Gabriel Garcia Marquez',
      'A Tale of Two Cities - Charles Dickens',
      'The Outsiders - SE Hinton',
      'Anne of Green Gables - LM Montgomery',
      'Winnie the Pooh - AA Milne',
      'A Thousand Splendid - Khaled Hosseini',
      'Life of Pi - Yann Martel',
      'Tuesdays with Morrie - Mitch Albom',
      'The Count of Monte Cristo - Alexandre Dumas',
      'Catch-22 - Joseph Heller',
      'Anna Karenina - Leo Tolstoy',
      'Flowers for Algernon - Daniel Keyes',
      'Slaughterhouse Five - Kurt Vonnegut',
      'The Scarlet Letter - Nathanial Hawthorne',
      'The Old Man and the Sea - Ernest Hemingway',
      "The Time Traveler's Wife - Audrey Niffenegger",
      'Frankenstein - Mary Shelley',
      'Macbeth - William Shakespeare',
      'Lolita - Vladimir Nabokov',
      "The Handmaid's Tale - Margaret Atwood",
      'Siddhartha - Herman Hesse',
      'The Metamorphosis - Franz Kafka',
      'The Stranger - Albert Camus',
      'A Tree Grows in Brooklyn - Betty Smith',
      'A Clockwork Orange - Anthony Burgess',
      'War and Peace - Leo Tolstoy',
      "Uncle Tom's Cabin - Harriet Beetcher Stow",
      'The Stand - Stephen King',
      'Atlas Shrugged - Ayn Rand',
      'Don Quixote - Miguel De Cervantes',
      'All Quiet on the Western Front - Erich Maria',
      'The Poisonwood Bible - Barbara Kingsolver',
      "The Brother's Karamazov - Fyodor Dostoyevsky",
      'Moby Dick - Herman Melville',
      'The Good Earth - Pearl S Buck',
      'I Know Why the Caged Bird Sings - Maya Angelou',
      'Great Expectation - Charles Dickens',
      "A Wrinkle in Time - Madeleine L'Engle",
      'Dracula - Bram Stoker',
      'Matilda - Roald Dahl',
      'The Fault in Our Stars - John Green',
      'Sense and Sensibility - Jane Austen',
      'The Perks of Being a Wallflower - Stephen Chbosky',
      'Complete Tales and Poems - Edgar Allen Poe',
      'The Fountainhead - Ayn Rand',
      'Where the Red Fern Grows - Wilson Rawls',
      'The Princess Bride - William Goldman',
      'East of Eden - John Steinbeck',
      'The Lovely Bones - Alice Sebold',
      'Charlie and the Chocolate Factory - Roald Dahl',
      'Watership Down - Richard Adams',
      'The Curious Incident of the Dog in the Night-Time - Mark Haddon',
      'The Five People You Meet In Heaven - Mitch Albom',
      'A Prayer for Owen Meany - John Irving',
      'Rebecca - Daphne Du Maurier',
      "Angela's Ashes - Frank McCourt",
      'Perfume: The Story of a Murderer - Patrick Suskind',
      'The Bell Jar - Sylvia Plath',
      'The Wonderful Wizard of Oz - L Frank Baum',
      'The Call of the Wild - Jack London',
      'A Game of Thrones - George RR Martin',
      'Dune - Frank Herbert',
      'Bridge to Terabithia - Katherine Paterson',
      'Water for Elephants - Sara Gruen',
      'The Divine Comedy - Dante Alighieri',
      "A Midsummer Night's Dream - William Shakespeare",
      'The Three Musketeers - Alexandre Dumas',
      'The Name of the Rose - Umberto Eco',
      'Persuasion - Jane Austen',
      'The Red Tent - Anita Diamant',
      'The Road - Cormac McCarthy',
      'The Girl With the Dragon Tattoo - Sieg Larsson',
      'The Pillars of the Earth - Ken Follett',
      'Oliver Twist - Charles Dickens',
      'The Canterbury Tales - Geoffrey Chaucer',
      'And Then There Was None - Agatha Christie',
      'The Secret Life of Bees - Sue Monk Kidd',
      'His Dark Materials - Philip Pullman',
      'On the Road - Jack Kerouac',
      'Heart of Darkness - Joseph Conrad',
      'Love in the Time of Cholera - Gabriel Garcia Marquez',
      'The Master and Margarita - Mikhail Bulgakov',
      'The Shadow of the Wind - Carlos Ruiz Zafon',
      'Interview With The Vampire - Anne Rice',
      'Inviisble Man - Ralph Ellison',
      'In Cold Blood - Truman Capote',
      "Aesop's Fables - Aesop",
      "Gulliver's Travels - Jonathan Swift",
      'The Origin of Species - Charles Darwin',
      'Walden - Henry David Thoreau',
      'Roots - Alex Haley',
      'The Glass Castle - Jeannette Walls',
      'The Boy in the Striped Pajamas - John Boyne',
      "Sophie's World - Jostein Gaardner",
      'The Screwtape Letters - CS Lewis',
      'Robinson Crusoe - Daniel Defoe',
      'The Strange Case of Dr. Jekyll and Mr. Hyde - Robert Louis Stevenson',
      'The Prince - Niccolo Machiavelli',
      'The Complete Sherlock Holmes - Sir Arthur Conan Doyle',
      'Fight Club - Chuck Palahniuk',
      'The Art of War - Sun Tzu',
      'The Mists of Avalon - Marion Zimmer Bradley',
      'The Time Machine - HG Wells',
      'Watchmen - Alan Moore',
      'The Godfather - Mario Puzo',
      'The Trial - Franz Kafka',
      'The Sun Also Rises - Ernest Hemingway',
      'Tuck Everlasting - Natalie Babbitt',
      'Stranger in a Strange Land - Robert A Heinlein',
      'Emma - Jane Austen',
      'Atonement - Ian McEwan',
      "The Complete Brother's Grimm Fairy Tales - Grimm",
      'Beloved - Toni Morrison',
      'James and the Giant Peach - Roald Dahl',
      'Leaves of Grass - Walt Whitman',
      'Bury My Heart at Wounded Knee - Dee Brown',
      "The Things They Carried - Tim O'Brien",
      'Their Eyes Were Watching God - Zora Neale Hurston',
      'The Phantom TollBooth - Norton Juster',
      'Number The Stars - Lois Lowry',
      'Middlesex - Jeffrey Eugenides',
      'The World According to Garp - John Irving',
      'A Separate Peace - John Knowles',
      'The Autobiography of Malcom X - Malcolm X',
      'The Wind in the Windows - Kenneth Graham',
      'Speak - Laurie Halse Anderson',
      "A People's History of the United States - Howard Zinn",
      'Into the Wild - Jon Krakauer',
      'The Story of My Life - Helen Keller',
      'Murder on the Orient Express - Agatha Christie',
      'A Farewell to Arms - Ernest Hemingway',
      "Schindler's List - Thomas Keneally",
      'Maus: The Complete Maus - Art Spiegelman',
      "Cat's Cradle - Kurt Vonnegut",
      'Blindness - Jose Saramago',
      'A Short History of Nearly Everything - Bill Bryson',
      "Sophie's Choice - William Styron",
      "Island of the Blue Dolphins - Scott O'dell",
      'Madame Bovary - Gustave Flaubert',
      'Extremely Loud and Incredibly Close - Jonathan Safran Foer',
      'The Phantom of the Opera - Gaston Leroux',
      'Ulysses - James Joyce',
      'American Gods - Neil Gaiman',
      'Holes - Louis Sachar',
      'Paradise Lost - John Milton',
      'The Jungle - Upton Sinclair',
      'A Brief History of Time - Stephen Hawking',
      "Are You There God? It's Me, Margaret - Judy Blume",
      'The God of Small Things - Arundhati Roy',
      'Lonesome Dove - Larry McMurtry',
      'Zen and the Art of Motorcycle Maintenance - Robert M. Pirsig',
      'Death of a Salesman - Arthur Miller',
      'A Walk in the Woods - Bill Bryson',
      'Never Let Me Go - Kazuo Ishiguro',
      'Lamb - Christopher Moore',
      'Norwegian Wood - Haruki Murakami',
      'To the Lighthouse - Virginia Woolf',
      'Native Son - Richard Wright',
      'Go Tell It On The Mountain - James Baldwin',
      'Return of the King - JRR Tolkien',
      'The Two Towers - JRR Tolkien',
      'Fellowship of the Ring - JRR Tolkien',
      'House - Ted Dekker',
      'The Call of Cthulhu - HP Lovecraft',
      'Reaper Man - Terry Pratchett',
      'Kafka on the Shore - Haruki Murakami'],
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
