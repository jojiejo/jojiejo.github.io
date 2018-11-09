/* Array List */
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

/* Function that makes All string uppercase */
const makeAllCaps = (array) => {
	return new Promise((resolve, reject) => {
		let result = array.map((element) => {
			if(typeof element == 'string'){
				return element.toUpperCase();
			}
			else{
				return element;
			}
		});
		
		resolve(result);
	});
};

/* Function that sorts any array passed */
const sortWords = (array) => {
	return new Promise((resolve, reject) => {
		let result = array.sort();
		
		resolve(result);
	});
};

/* Execution */
console.log(makeAllCaps(arrayOfWords));
console.log(sortWords(arrayOfWords));

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error));

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error));