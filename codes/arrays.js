// Array declarations:
// create an array of zero length
// output => []
const emptyArray = [];

// create an array of size 5 without any values,
// output => [ <5 empty items> ]
const fiveContentEmptyArray = new Array(5);

// create an array of size 5, all has value 0,
// output => [ 0, 0, 0, 0, 0 ]
const fiveZerosArray = new Array(0, 0, 0, 0, 0);

// create and array from a value,
// output => [ 'a', 'r', 'r', 'a', 'y' ]
const fiveContentFilledArray = Array.from("array");

// create and array from a value,
// output => [ 'a', 'a', 'a', 'a', 'a' ]
const fiveContentFilledArray2 = Array.from({ length: 5 }, () => "a");

// create a boolean array of 5, initialize with true,
// output => [true, true, true, true, true]
const fiveBoolArray = Array(5).fill(true);

// create a 2-dim array, 5(rows)x4(cols), fill all with false
// output => [
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ]
//          ]
const twoDimBoolArray = new Array(5).fill().map(() => new Array(4).fill(false));
twoDimBoolArray[0][0] = true;
// output => [
//            [ true, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ]
//          ]

// !!Warning!!: create a 2-dim array, 5(rows)x4(cols), fill all with false without map will not create a matrix,
// all the rows are filled with ref to 1 array
// output => [
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ],
//            [ false, false, false, false ]
//          ]
const notTwoDimBoolArray = new Array(5).fill(new Array(4).fill(false));
twoDimBoolArray4[0][0] = true;
// output => [
//            [ true, false, false, false ],
//            [ true, false, false, false ],
//            [ true, false, false, false ],
//            [ true, false, false, false ],
//            [ true, false, false, false ]
//          ]
