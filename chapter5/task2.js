const ancestry = JSON.parse(require("./ancestry.js"));


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

const mother_present = ancestry.filter((val) => val.mother in byName);

console.log(average(mother_present.map( function (val, i) {

	return (val.born - byName[val.mother].born);

})))

// → 31.2