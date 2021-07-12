const { Book } = require('../models/book');

const BookData = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    title: 'The Hobbit',
    author: 'JRR Tolkien'
  },
  {
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'JD Salinger'
  },
  {
    title: 'The Little Prince',
    author: 'Antoine De Saint-Exupery'
  },
  {
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte'
  },
  {
    title: 'The Lord of the Rings',
    author: 'JRR Tolkien'
  },
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare'
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'CS Lewis'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding'
  },
  {
    title: 'The Book Thief',
    author: 'Marcus Zusak'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry'
  },
  {
    title: 'Kite Runner',
    author: 'Khaled Hosseini'
  },
  {
    title: `Charlotte's Web`,
    author: 'EB White'
  },
  {
    title: 'Alice in Wonderland',
    author: 'Lewis Carroll'
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott'
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Bronte'
  },
  {
    title: 'Night',
    author: 'Elie Wiesel'
  },
  {
    title: 'Gone With the Wind',
    author: 'Margaret Mitchell'
  },
  {
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain'
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde'
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare'
  },
  {
    title: `The Hitchhiker's Guide to the Galaxy`,
    author: 'Douglas Adams'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    title: 'Les Miserables',
    author: 'Victor Hugo'
  },
  {
    title: 'Memoirs of a Geisha',
    author: 'Arthur Golden'
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky'
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    title: 'A Christmas Carol',
    author: 'Charles Dickens'
  },
  {
    title: 'The Color Purple',
    author: 'Alice Walker'
  },
  {
    title: 'The Help',
    author: 'Kathryn Stockett'
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck'
  },
  {
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain'
  },
  {
    title: `Ender's Game`,
    author: 'Orson Scott Card'
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez'
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens'
  },
  {
    title: 'The Outsiders',
    author: 'SE Hinton'
  },
  {
    title: 'Anne of Green Gables',
    author: 'LM Montgomery'
  },
  {
    title: 'Winnie the Pooh',
    author: 'AA Milne'
  },
  {
    title: 'A Thousand Splendid',
    author: 'Khaled Hosseini'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom'
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas'
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller'
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy'
  },
  {
    title: 'Flowers for Algernon',
    author: 'Daniel Keyes'
  },
  {
    title: 'Slaughterhouse Five',
    author: 'Kurt Vonnegut'
  },
  {
    title: 'The Scarlet Letter',
    author: 'Nathanial Hawthorne'
  },
  {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway'
  },
  {
    title: `The Time Traveler's Wife`,
    author: 'Audrey Niffenegger'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley'
  },
  {
    title: 'Macbeth',
    author: 'William Shakespeare'
  },
  {
    title: 'Lolita',
    author: 'Vladimir Nabokov'
  },
  {
    title: `The Handmaid's Tale`,
    author: 'Margaret Atwood'
  },
  {
    title: 'Siddhartha',
    author: 'Herman Hesse'
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka'
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus'
  },
  {
    title: 'A Tree Grows in Brooklyn',
    author: 'Betty Smith'
  },
  {
    title: 'A Clockwork Orange',
    author: 'Anthony Burgess'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy'
  },
  {
    title: `Uncle Tom's Cabin`,
    author: 'Harriet Beetcher Stow'
  },
  {
    title: 'The Stand',
    author: 'Stephen King'
  },
  {
    title: 'Atlas Shrugged',
    author: 'Ayn Rand'
  },
  {
    title: 'Don Quixote',
    author: 'Miguel De Cervantes'
  },
  {
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria'
  },
  {
    title: 'The Poisonwood Bible',
    author: 'Barbara Kingsolver'
  },
  {
    title: `The Brother's Karamazov`,
    author: 'Fyodor Dostoyevsky'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville'
  },
  {
    title: 'The Good Earth',
    author: 'Pearl S Buck'
  },
  {
    title: 'I Know Why the Caged Bird Sings',
    author: 'Maya Angelou'
  },
  {
    title: 'Great Expectation',
    author: 'Charles Dickens'
  },
  {
    title: 'A Wrinkle in Time',
    author: `Madeleine L'Engle`
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker'
  },
  {
    title: 'Matilda',
    author: 'Roald Dahl'
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green'
  },
  {
    title: 'Sense and Sensibility',
    author: 'Jane Austen'
  },
  {
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky'
  },
  {
    title: 'Complete Tales and Poems',
    author: 'Edgar Allen Poe'
  },
  {
    title: 'The Fountainhead',
    author: 'Ayn Rand'
  },
  {
    title: 'Where the Red Fern Grows',
    author: 'Wilson Rawls'
  },
  {
    title: 'The Princess Bride',
    author: 'William Goldman'
  },
  {
    title: 'East of Eden',
    author: 'John Steinbeck'
  },
  {
    title: 'The Lovely Bones',
    author: 'Alice Sebold'
  },
  {
    title: 'Charlie and the Chocolate Factory',
    author: 'Roald Dahl'
  },
  {
    title: 'Watership Down',
    author: 'Richard Adams'
  },
  {
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon'
  },
  {
    title: 'The Five People You Meet In Heaven',
    author: 'Mitch Albom'
  },
  {
    title: 'A Prayer for Owen Meany',
    author: 'John Irving'
  },
  {
    title: 'Rebecca',
    author: 'Daphne Du Maurier'
  },
  {
    title: `Angela's Ashes`,
    author: 'Frank McCourt'
  },
  {
    title: 'Perfume: The Story of a Murderer',
    author: 'Patrick Suskind'
  },
  {
    title: 'The Bell Jar',
    author: 'Sylvia Plath'
  },
  {
    title: 'The Wonderful Wizard of Oz',
    author: 'L Frank Baum'
  },
  {
    title: 'The Call of the Wild',
    author: 'Jack London'
  },
  {
    title: 'A Game of Thrones',
    author: 'George RR Martin'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: 'Bridge to Terabithia',
    author: 'Katherine Paterson'
  },
  {
    title: 'Water for Elephants',
    author: 'Sara Gruen'
  },
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri'
  },
  {
    title: `A Midsummer Night's Dream`,
    author: 'William Shakespeare'
  },
  {
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas'
  },
  {
    title: 'The Name of the Rose',
    author: 'Umberto Eco'
  },
  {
    title: 'Persuasion',
    author: 'Jane Austen'
  },
  {
    title: 'The Red Tent',
    author: 'Anita Diamant'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy'
  },
  {
    title: 'The Girl With the Dragon Tattoo',
    author: 'Sieg Larsson'
  },
  {
    title: 'The Pillars of the Earth',
    author: 'Ken Follett'
  },
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens'
  },
  {
    title: 'The Canterbury Tales',
    author: 'Geoffrey Chaucer'
  },
  {
    title: 'And Then There Was None',
    author: 'Agatha Christie'
  },
  {
    title: 'The Secret Life of Bees',
    author: 'Sue Monk Kidd'
  },
  {
    title: 'His Dark Materials',
    author: 'Philip Pullman'
  },
  {
    title: 'On the Road',
    author: 'Jack Kerouac'
  },
  {
    title: 'Heart of Darkness',
    author: 'Joseph Conrad'
  },
  {
    title: 'Love in the Time of Cholera',
    author: 'Gabriel Garcia Marquez'
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov'
  },
  {
    title: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafon'
  },
  {
    title: 'Interview With The Vampire',
    author: 'Anne Rice'
  },
  {
    title: 'Inviisble Man',
    author: 'Ralph Ellison'
  },
  {
    title: 'In Cold Blood',
    author: 'Truman Capote'
  },
  {
    title: `Aesop's Fables`,
    author: 'Aesop'
  },
  {
    title: `Gulliver's Travels`,
    author: 'Jonathan Swift'
  },
  {
    title: 'The Origin of Species',
    author: 'Charles Darwin'
  },
  {
    title: 'Walden',
    author: 'Henry David Thoreau'
  },
  {
    title: 'Roots',
    author: 'Alex Haley'
  },
  {
    title: 'The Glass Castle',
    author: 'Jeannette Walls'
  },
  {
    title: 'The Boy in the Striped Pajamas',
    author: 'John Boyne'
  },
  {
    title: `Sophie's World`,
    author: 'Jostein Gaardner'
  },
  {
    title: 'The Screwtape Letters',
    author: 'CS Lewis'
  },
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe'
  },
  {
    title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson'
  },
  {
    title: 'The Prince',
    author: 'Niccolo Machiavelli'
  },
  {
    title: 'The Complete Sherlock Holmes',
    author: 'Sir Arthur Conan Doyle'
  },
  {
    title: 'Fight Club',
    author: 'Chuck Palahniuk'
  },
  {
    title: 'The Art of War',
    author: 'Sun Tzu'
  },
  {
    title: 'The Mists of Avalon',
    author: 'Marion Zimmer Bradley'
  },
  {
    title: 'The Time Machine',
    author: 'HG Wells'
  },
  {
    title: 'Watchmen',
    author: 'Alan Moore'
  },
  {
    title: 'The Godfather',
    author: 'Mario Puzo'
  },
  {
    title: 'The Trial',
    author: 'Franz Kafka'
  },
  {
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway'
  },
  {
    title: 'Tuck Everlasting',
    author: 'Natalie Babbitt'
  },
  {
    title: 'Stranger in a Strange Land',
    author: 'Robert A Heinlein'
  },
  {
    title: 'Emma',
    author: 'Jane Austen'
  },
  {
    title: 'Atonement',
    author: 'Ian McEwan'
  },
  {
    title: `The Complete Brother's Grimm Fairy Tales`,
    author: 'Grimm'
  },
  {
    title: 'Beloved',
    author: 'Toni Morrison'
  },
  {
    title: 'James and the Giant Peach',
    author: 'Roald Dahl'
  },
  {
    title: 'Leaves of Grass',
    author: 'Walt Whitman'
  },
  {
    title: 'Bury My Heart at Wounded Knee',
    author: 'Dee Brown'
  },
  {
    title: 'The Things They Carried',
    author: `Tim O'Brien`
  },
  {
    title: 'Their Eyes Were Watching God',
    author: 'Zora Neale Hurston'
  },
  {
    title: 'The Phantom TollBooth',
    author: 'Norton Juster'
  },
  {
    title: 'Number The Stars',
    author: 'Lois Lowry'
  },
  {
    title: 'Middlesex',
    author: 'Jeffrey Eugenides'
  },
  {
    title: 'The World According to Garp',
    author: 'John Irving'
  },
  {
    title: 'A Separate Peace',
    author: 'John Knowles'
  },
  {
    title: 'The Autobiography of Malcom X',
    author: 'Malcolm X'
  },
  {
    title: 'The Wind in the Windows',
    author: 'Kenneth Graham'
  },
  {
    title: 'Speak',
    author: 'Laurie Halse Anderson'
  },
  {
    title: `A People's History of the United States`,
    author: 'Howard Zinn'
  },
  {
    title: 'Into the Wild',
    author: 'Jon Krakauer'
  },
  {
    title: 'The Story of My Life',
    author: 'Helen Keller'
  },
  {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie'
  },
  {
    title: 'A Farewell to Arms',
    author: 'Ernest Hemingway'
  },
  {
    title: `Schindler's List`,
    author: 'Thomas Keneally'
  },
  {
    title: 'Maus: The Complete Maus',
    author: 'Art Spiegelman'
  },
  {
    title: `Cat's Cradle`,
    author: 'Kurt Vonnegut'
  },
  {
    title: 'Blindness',
    author: 'Jose Saramago'
  },
  {
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson'
  },
  {
    title: `Sophie's Choice`,
    author: 'William Styron'
  },
  {
    title: 'Island of the Blue Dolphins',
    author: `Scott O'dell`
  },
  {
    title: 'Madame Bovary',
    author: 'Gustave Flaubert'
  },
  {
    title: 'Extremely Loud and Incredibly Close',
    author: 'Jonathan Safran Foer'
  },
  {
    title: 'The Phantom of the Opera',
    author: 'Gaston Leroux'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce'
  },
  {
    title: 'American Gods',
    author: 'Neil Gaiman'
  },
  {
    title: 'Holes',
    author: 'Louis Sachar'
  },
  {
    title: 'Paradise Lost',
    author: 'John Milton'
  },
  {
    title: 'The Jungle',
    author: 'Upton Sinclair'
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking'
  },
  {
    title: `Are You There God? It's Me, Margaret`,
    author: 'Judy Blume'
  },
  {
    title: 'The God of Small Things',
    author: 'Arundhati Roy'
  },
  {
    title: 'Lonesome Dove',
    author: 'Larry McMurtry'
  },
  {
    title: 'Zen and the Art of Motorcycle Maintenance',
    author: 'Robert M. Pirsig'
  },
  {
    title: 'Death of a Salesman',
    author: 'Arthur Miller'
  },
  {
    title: 'A Walk in the Woods',
    author: 'Bill Bryson'
  },
  {
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro'
  },
  {
    title: 'Lamb',
    author: 'Christopher Moore'
  },
  {
    title: 'Norwegian Wood',
    author: 'Haruki Murakami'
  },
  {
    title: 'To the Lighthouse',
    author: 'Virginia Woolf'
  },
  {
    title: 'Native Son',
    author: 'Richard Wright'
  },
  {
    title: 'Go Tell It On The Mountain',
    author: 'James Baldwin'
  },
  {
    title: 'Return of the King',
    author: 'JRR Tolkien'
  },
  {
    title: 'The Two Towers',
    author: 'JRR Tolkien'
  },
  {
    title: 'Fellowship of the Ring',
    author: 'JRR Tolkien'
  },
  {
    title: 'House',
    author: 'Ted Dekker'
  },
  {
    title: 'The Call of Cthulhu',
    author: 'HP Lovecraft'
  },
  {
    title: 'Reaper Man',
    author: 'Terry Pratchett'
  },
  {
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami'
  }
];

const SeedBook = () => Book.bulkCreate(BookData);

module.exports = SeedBook;
