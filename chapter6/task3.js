/*class GroupIterator {
	#arr;
	#i;

  	constructor(arr) {
  		this.#arr = arr;
  		this.#i = 0;
  	}

  	next() {
  		return {value: this.#arr[this.#i++], done: this.#i  == this.#arr.length + 1};
  	}
}*/

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

  /*[Symbol.iterator]() {
  	return new GroupIterator(this.#elements);
  }*/

  /*[Symbol.iterator]() {
  	let i = 0;

  	return {
  		next: () =>  {
  			return {value: this.#elements[i++], done: i  == this.#elements.length + 1};
  		}
  	}
  }*/

  /*[Symbol.iterator]() {
  	return this.#elements[Symbol.iterator]();
  }*/

  /**[Symbol.iterator]() {
  	yield* this.#elements;
  }*/

  *[Symbol.iterator]() {
  	for (const el of this.#elements) {
  		yield el;
  	}
  }


  static from(arr) {
  	let result = new this();
  	for (const el of arr) {
  		result.add(el);
  	} 
  	return result;
  }


}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}