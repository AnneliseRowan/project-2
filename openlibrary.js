//open library api

// function ratatouilleRecipe() {
// 	$.ajax({
// 		url: mealAPI + frenchID,
// 		method: 'GET'
// 	}).then(function (data) {
// 		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
// 		$('#recipe-title').text(data.meals[0].strMeal);
// 		$('#instructions').text(data.meals[0].strInstructions);
// 		$('#ingredients-list li').remove();
// 		for (let index = 1; index <= 15; index++) {
// 			var x = 'strMeasure' + index
// 			var y = 'strIngredient' + index
// 			if (data.meals[0][x] !== null) {
// 				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
// 			}
// 		}
// 		return;
// 	})
// }
//GET book title and author
const libraryapi = 'https://openlibrary.org/books/OL31905946M.json';

function getBookTitle() {
    $.ajax({
        url: libraryapi,
        method: 'GET'
    }).then(function (data) {
        console.log('TITLE:', data.works.title)
    })
}

getBookTitle();



/* Project Books
API call – openlibrary.org/books/OL24839567M.json

•	Lex
1.	1Q84– Haruki Murakami
	OL24839567M

2.	Kitchen – Banana Yoshimoto 
    OL1710941M

3.	Middlesex -  Jeffrey Euginides 
	OL3558698M

4.	Ender’s Game – Orson Scott Card 
	OL9708865M

5.	I’ll Be Gone in the Dark – Michelle McNamara
	OL28700643M

======================
•	Annelise
1.	Lord of the Rings: Return of the King – J.R.R. Tolkien
	OL 31905946M
	****double check printed in Slovak????

2.	The Two Towers
	OL31879906M

3.	Fellowship of the Rings
	OL28255957M

4.	The Count of Monte Cristo – Alexander Dumas
	OL25985047M	

5.	House – Ted Dekker, Frank Peretti
	OL9682830M

======================
•	James
1.	Dune – Frank Herbert

2.	Slouching Towards Bethlehem – Joan Didion

3.	All Quiet on the Western Front – Erich Maria Remarque

4.	At the Mountains of Madness – HP Lovecraft

5.	The Silmarillion – J.R.R. Tolkien

======================
•	Naomi
1.	Where the Red Fern Grows – Wilson Rawls

======================
•	Rachael
1.	The Call of Cthulhu – H.P. Lovecraft
2.	1984 – George Orwell
3.	To Kill a Mockingbird – Harper Lee
4.	Reaper Man – Terry Pratchett
5.	Fahrenheit 451 – Ray Bradbury */
