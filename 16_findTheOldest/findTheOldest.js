const findTheOldest = function (people = []) {
  let oldest = { name: "", age: -1 };

  //   people.forEach((person, _, arr) => {
  //     let age = -1;
  //     if ("yearOfDeath" in person) {
  //       age = person.yearOfDeath - person.yearOfBirth;
  //     } else {
  //       age = new Date().getFullYear() - person.yearOfBirth;
  //     }
  //     if (age > oldest.age) oldest = { name: person.name, age: age };
  //   });

  oldest = people.reduce((oldOne, person) => {
    let age = -1;
    if ("yearOfDeath" in person) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = new Date().getFullYear() - person.yearOfBirth;
    }
    if (age > oldOne.age) oldOne = { name: person.name, age: age };

    return oldOne;
  }, oldest);

  console.log(oldest);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
// console.log(
//   findTheOldest([
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ])
// );
