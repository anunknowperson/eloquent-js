class Group {
  #elements;

  constructor () {
  	this.#elements = [];


  }

  add (el) {
  	if (!this.#elements.includes(el)) {
  		this.#elements.push(el);
  	}
  }

  delete(el) {
  	if (this.#elements.includes(el)) {
  		let index = this.#elements.indexOf(el);
  		this.#elements.splice(index, 1);
  	}
  }

  has(el) {
  	return this.#elements.includes(el);
  }

  static from(arr) {
  	let result = new this();
  	for (let el of arr) {
  		result.add(el);
  	} 
  	return result;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false