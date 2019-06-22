
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 * 
 * NOTE: Feel free to add any extra member variables/functions you like.
 */

  
class RangeList {
  
 constructor() {
    this.list = [];
 }
 
 
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add([start, end]) {
    // Looping through the given range, adding it to the existing list through boolean checking
    for (let i = start; i < end; i++) {
      if (!this.list[i]) {
        this.list[i] = true;
      }
    }
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove([start, end]) {
    // Loops through the list and removes the range of numbers specified 
    for (let i = start; i < end; i++) {
      if (this.list[i]) {
        this.list[i] = undefined;
      }
    }
  }

  /**
   * Prints out the list of ranges in the range list by gathering a list of ranges 
   */
  print() {
	var result = '';
    const {length}  = this.list;
    var previousExists = false;
    var rangeStart;
    
    // Range Creation by looping through the list by checking boolean values
    for (i = 0; i <= length; i++) {
      
      // If a number to the left of i doesn't exist, set start of a new range 
      if (this.list[i] && (!i || !previousExists)) {
        rangeStart = i;
      }
      
      // If number to the left of i is exists, but i doesn't end the range  
      if (previousExists && !this.list[i]) {
        result += `[${rangeStart}, ${i}) `;
      }
      previousExists = this.list[i];
    }

    console.log(result);
  }
}

// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)