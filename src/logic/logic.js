// const testCase1 = [
//   [3, 2],
//   [4, 3],
// ];

const AirPlaneSeating = (testCase1, wpI) => {
  let errors = [];

  if (testCase1.length < 1) {
    errors.push(`you must enter one parent array`);
    return { result: null, errors: errors };
  }
  if (+wpI < 1 || !!!wpI) {
    errors.push(`you must enter at least one passenger`);

    return { result: null, error: errors };
  }

  let wp = +wpI + 1;

  /// a function to define

  const longest = +testCase1.reduce((acc, cur) => {
    if (+cur[1] > +acc[1]) {
      return cur;
    } else {
      return acc;
    }
  })[1];

  let structuredSeetsMatrix = testCase1.map((element, index, array) => {
    //construct the over all shape of seets which will be a custom matrix
    if (typeof +element[1] !== `number` || typeof +element[0] !== `number`) {
      errors.push(`you must enter a valid number`);
    }

    const enhancedEmpty = new Array(+element[1]).fill(
      Array(+element[0]).fill(1)
    );
    //
    // a function to define what is the place of every seet (a,c or w)
    const enhancedFill = enhancedEmpty.map((e) =>
      e.map((e, i, arr) => {
        if (index == 0) {
          return i == 0 ? `w` : i == arr.length - 1 ? `a` : `c`;
        } else if (index == array.length - 1) {
          return i == 0 ? `a` : i == arr.length - 1 ? `w` : `c`;
        } else {
          return i == 0 || i == arr.length - 1 ? `a` : `c`;
        }
      })
    );
    return enhancedFill;
  });

  ///////////////////////////////////////////

  // -- function to structure the input herozontally so the numbering of the seets would be applied correct

  const newStructured = new Array(longest).fill([]);
  structuredSeetsMatrix.forEach((element, index, array) => {
    element.forEach((e, i, arr) => {
      if (i == 0 && index == 0) {
        newStructured[i] = [
          ...newStructured[i],
          `breack`,
          ...e,
          `${index}index`,
        ];
      } else {
        newStructured[i] = [
          ...newStructured[i],
          `breack`,
          ...e,
          `${index}index`,
        ];
      }
    });
  });

  /////////////////////////////////////////

  // adding waiting  passengers to their seets (giving its seet its number)

  let sp = 0;

  let finalOutput = newStructured
    .map((element) => {
      return element.map((e, i, arr) => {
        if (e === `a`) {
          wp--;
          sp++;
          return wp > 0 ? sp : e;
        } else {
          return e;
        }
      });
    })
    .map((element, index, array) => {
      return element.map((e, i, arr) => {
        if (e === `w`) {
          wp--;
          sp++;
          return wp > 0 ? sp : e;
        } else {
          return e;
        }
      });
    })
    .map((element, index, array) => {
      return element.map((e, i, arr) => {
        if (e === `c`) {
          wp--;
          sp++;
          return wp > 0 ? sp : e;
        } else {
          return e;
        }
      });
    });

  ////////////////////////////////////////////

  //returning the final output to its original structure
  // after adding the right number to every seet

  const editedFinal = finalOutput.map((element) => {
    return element
      .toString()
      .split(`breack`)
      .map((e) => e.split(`,`).filter((e) => e !== ``))
      .filter((e) => e.length !== 0);
  });

  let finalfinal = Array(testCase1.length).fill([]);

  //////////////////////////////////
  editedFinal.forEach((ele, index) => {
    ele.forEach((e, i) => {
      const num = +e[e.length - 1].split(`i`)[0];
      const e2 = e
        .map((e) => (e == `c` || e == `w` || e == `a` ? e : +e))
        .filter((e) => !!e);
      finalfinal[num] = [...finalfinal[num], [...e2]];
    });
  });
  ///////////////////////

  return { result: finalfinal, error: null };
};



// console.log(
//   AirPlaneSeating(
//     [
//       ["3", "2"],
//       [4, 3],
//       [2, 3],
//       [3, 4]
//     ],
//     30
//   )
// );

export default AirPlaneSeating;
