/**
 * Week 7: Game of Life Golf!
 *
 * See https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules for rules reference.
 */

 function gameOfLifeIterator(b) {
   let r=[], y=b.length, x=b[0].length;
   for (let i=0; i<y; i++) {
     r[i]=[];
     for (let j=0; j<x; j++) {
       let c=-b[i][j];
       for (let k=(i>0?-1:0);k<(i<y-1?2:1);k++) {
         for (let l=(j>0?-1:0);l<(j<x-1?2:1);l++) {
           c+=b[i+k][j+l];
         }
       }
       r[i][j]=+(c==3||(b[i][j]==1&&c==2));
     }
   }
   return r;
 }

// Don't edit anything after this line. Tests!

const input1 = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

const output1 = [[0, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0],
                 [0, 0, 1, 0, 0],
                 [0, 0, 1, 0, 0],
                 [0, 0, 0, 0, 0]];

assertEqual(gameOfLifeIterator(input1), output1, "Blinker");

const input2 = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0]];

const output2 = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 1, 1, 0, 0],
                 [0, 1, 1, 0, 0],
                 [0, 0, 0, 0, 0]];

assertEqual(gameOfLifeIterator(input2), output2, "Block");

const input3 = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

const output3 = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0]];

assertEqual(gameOfLifeIterator(input3), output3, "Empty board");


const input4 = [[0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

const output4 = [[0, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0],
                 [0, 1, 0, 1, 0],
                 [0, 0, 1, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0]];

assertEqual(gameOfLifeIterator(input4), output4, "Tub");

const input5 = [[0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0]];

const output5 = [[0, 0, 0, 0, 0],
                 [0, 1, 1, 0, 0],
                 [0, 1, 1, 0, 0],
                 [0, 0, 0, 1, 1],
                 [0, 0, 0, 1, 1],
                 [0, 0, 0, 0, 0]];

assertEqual(gameOfLifeIterator(input5), output5, "Beacon");


console.log("All clear 🎉");

// Assertion library

/**
 * Basic assert.
 *
 * Example: assert(foo == true, "Foo equal true");
 *
 * @param assertion
 * @param message
 */
function assert(assertion, message) {
  if (!assertion) {
    console.trace();
    throw (!!message) ? `Assertion fail: ${message}.` : `Assertion fail.`;
  } else {
    console.log((!!message) ? `Pass: ${message}` : "Assertion passed.");
  }
}

/**
 * Helper function for deep object equal.
 *
 * Example: assertEqual({foo: "bar"}, {foo: "bar"}, "Objects equal.");
 *
 * @param first
 * @param second
 * @param message
 */
function assertObjectEqual(first, second, message) {
  if (!first || !second) {
    throw (!!message) ? `Assertion fail: ${message}.` : `Assertion fail.`;
  }

  let firstKeys = Object.keys(first),
    secondKeys = Object.keys(second);

  if (firstKeys.length !== secondKeys.length) {
    throw (!!message) ? `Assertion fail: ${message}.` : `Assertion fail.`;
  }

  firstKeys.forEach((key) => {
    if (typeof first[key] === "object") {
      assertObjectEqual(first[key], second[key], message);
    } else if (first[key] !== second[key]) {
      throw (!!message) ? `Assertion fail: ${message}.` : `Assertion fail.`;
    }
  });

  console.log((!!message) ? `Pass: ${message}` : "Assertion passed.");
}

/**
 * Assert equal.
 *
 * Example: assertEqual(true, true, "True equals true.");
 *
 * @param first
 * @param second
 * @param message
 */
function assertEqual(first, second, message) {
  if (typeof first === "object") {
    assertObjectEqual(first, second, message);
  } else {
    assert(first === second, message);
  }
}
