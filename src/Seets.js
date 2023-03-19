import React, { useState } from "react";
import logic from "./logic/logic";

function Seets(props) {
  let seetsArray = props.arr;
  let passengersNumber = props.number;

  console.log(seetsArray);

  console.log(logic);

  if (seetsArray.length > 0 && passengersNumber > 0) {
    const finalArray = logic(seetsArray, passengersNumber);
    console.log(`finalArray:`, finalArray);
  }

  return (
    <div className="container">
      {seetsArray &&
        passengersNumber &&
        seetsArray.length > 0 &&
        passengersNumber > 0 &&
        logic(seetsArray, passengersNumber).result.map((element, index) => (
          <div
            className="singleHall"
            key={`${index}`}
            style={{
                // border:`2px solid brown`,
                display:`grid`

            }}
         
          >
            {element.map((ele, ind) => (
              <div
                 style={{
              display: `grid`,
              gridTemplateColumns: `repeat(${element[0].length}, 1fr)`,
              gap:`5px`
            }}
              
              >
                {/* gridTemplateColumns:`repeat(${}, 1fr);`  */}
                {ele.map((e, i) => (
                  <div
                    key={`${index}${ind}${i}`}
                    className="singleSeet"
                    style={{
                        width: `30px`,
                      //   minWidth: `${80 / ele.length}%`,
                      //   minHeight: `${80 / ele.length}%`,
                      borderColor: `${
                        e === "c"
                          ? "red"
                          : e === "a"
                          ? "blue"
                          : e === "w"
                          ? "green"
                          : "black"
                      }`,
                    }}
                  >
                    <p>{e}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Seets;

{
  /* console.log(`logic:`,logic); */
}

{
  /* console.log(logic(seetsArray, passengersNumber)) */
}
{
  /* console.log(`passengersNumber:`,passengersNumber); */
}

////////////////////////////////////////

{
  /* .result.map((element, index) => (
    <div className="singleHall" key={`${index}`}>
      {element.map((ele, ind) =>
        ele.map((e, i) => (
          <div
            key={`${index}${ind}${i}`}
            className="singleSeet"
            style={{
              width: `${90 / ele.length}%`,
              minWidth: `${90 / ele.length}%`,
              minHeight: `${90 / ele.length}%`,
              borderColor: `${
                e === "c"
                  ? "red"
                  : e === "a"
                  ? "blue"
                  : e === "w"
                  ? "green"
                  : "black"
              }`,
            }}
          >
            <p>{e}</p>
          </div>
        ))
      )}
    </div>
  ))
   */
}
