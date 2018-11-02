const data = [
  {
    name: 'Super',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 2,
    type: 'cat'
  },
  {
    name: 'Hot',
    age: 2,
    type: 'dog'
  },
  {
    name: 'Purr',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Red',
    age: 4,
    type: 'dog'
  },
  {
    name: 'Besto',
    age: 3,
    type: 'cat'
  },
  {
    name: 'Peppers',
    age: 1,
    type: 'dog'
  },
];

/* Exercise 1 */
let dataExerciseOne = data.filter((dogsData) => dogsData.type === 'dog');
console.log('Result 1 ', dataExerciseOne);

/* Exercise 2 */
let dataExerciseTwo = dataExerciseOne.map((multipliedAges) => multipliedAges.age * 3);
console.log('Result 2 ', dataExerciseTwo);

/* Exercise 3 */
const kali = (finalSum, currentSum) => {
	return finalSum + currentSum;
};

let dataExerciseThree = dataExerciseTwo.reduce(kali, 0);


//let dataExerciseThree = dataExerciseTwo.reduce((finalSum, currentSum) => finalSum + currentSum, 0);
console.log('Result 3 ', dataExerciseThree);