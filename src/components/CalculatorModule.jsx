import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiDelete, FiDivide, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuDot, LuEqual, LuMinus, LuPlus } from "react-icons/lu";
import { PiPiBold } from "react-icons/pi";
import { RxRotateCounterClockwise } from "react-icons/rx";
import { TiPlus } from "react-icons/ti";

const CalculatorModule = () => {
  return (
    <>
      <div className="sm:hidden h-[94dvh]">
        <CalculatorMobile />
      </div>
      <div className="hidden sm:flex h-[90vh] w-full justify-center items-center">
        <CalculatorPc />
      </div>
    </>
  );
};

export default CalculatorModule;

const CalculatorMobile = () => {
  const [taggleSwitch, settaggleSwitch] = useState(false);
  const [equvation, SetEquvation] = useState("");
  const [answer, Setanswer] = useState(0);
  const [previous, setPrevious] = useState([]);

  // const addString = (str) => {
  //   console.log("string is", str);

  //   let char = false;

  //   if (str === "=") {
  //     char = str;
  //     // SetEquvation("")
  //     // Setanswer(0)
  //     // setPrevious((prev) => {
  //     // return [...prev, { equ: equvation, ans: answer }]
  //     // })
  //   } else if (str === "Del") {
  //     char = str;
  //     var showQuery = equvation;
  //     var equ = equvation;
  //   } else {
  //     char = str;
  //     var showQuery = !equvation ? str : equvation + str;
  //     var equ = !equvation ? str : equvation + str;
  //   }

  //   console.log("equvation is", equ);

  //   console.log("char is", char);

  //   if (char) {
  //     switch (char) {
  //       case "c":
  //         SetEquvation(0);
  //         Setanswer();
  //         setPrevious([]);
  //         break;
  //       case "Del":
  //         equ = equvation.slice(0, -1);
  //         !equ.length ? (equ = 0) : null;
  //         showQuery = equvation.slice(0, -1);
  //         calValue(equ, showQuery);
  //         break;
  //       case "=":
  //         if (answer) {
  //           setPrevious((prev) => {
  //             return [...prev, { equ: equvation, ans: answer }];
  //           });
  //           equ = "";
  //           calValue(equ, showQuery);
  //         } else {
  //           SetEquvation(0);
  //           calValue(equ, showQuery);
  //         }
  //         break;
  //       default:
  //         console.log("this default");
  //         calValue(equ, showQuery);
  //         break;
  //     }
  //   }
  // };

  // const calValue = (equ, showQuery) => {
  //   let ans = calc(equ);
  //   console.log("the ans is", ans);
  //   Setanswer(ans);
  //   SetEquvation(showQuery);
  // };

  // function calc(fn) {
  //   // Basic validation to check for incomplete expressions
  //   if (/[\+\-\*\=\%\/]$/.test(fn)) {
  //     console.log(fn, "this is incomplete function ");
  //     return fn === "=" ? "Error" : answer;
  //   } else {
  //     return new Function("return " + fn)();
  //   }
  // }

  const addString = (str) => {
    console.log("string is", str);

    let char = false;

    if (str === "Del") {
      char = str;
      var showQuery = equvation;
      var equ = equvation;
    } else {
      char = str;
      var showQuery = !equvation ? str : equvation + str;
      var equ = !equvation ? str : equvation + str;
    }

    console.log("equvation is", equ);

    console.log("char is", char);

    if (char) {
      switch (char) {
        case "c":
          SetEquvation(0);
          Setanswer();
          setPrevious([]);
          break;
        case "Del":
          equ = equvation.slice(0, -1);
          !equ.length ? (equ = 0) : null;
          showQuery = equvation.slice(0, -1);
          calValue(equ, showQuery);
          break;
        case "=":
          if (answer) {
            setPrevious((prev) => {
              return [...prev, { equ: equvation, ans: answer }];
            });
            let ans = calValue(equ, showQuery);
            if (ans !== "Error") {
              SetEquvation(0);
              Setanswer();
            }
          } else {
            SetEquvation(0);
            calValue(equ, showQuery);
          }
          break;
        default:
          console.log("this default");
          calValue(equ, showQuery);
          break;
      }
    }
  };

  const calValue = (equ, showQuery) => {
    let ans = calc(equ);
    Setanswer(ans);
    SetEquvation(showQuery);
    return ans;
  };

  function calc(fn) {
    if (/[\+\-\*\=\%\(\)\/]$/.test(fn)) {
      if (fn.slice(-1) === "=") {
        return /[\+\-\*\%\/\/]$/.test(fn[fn.length - 2]) ? "Error" : answer;
      } else {
        return answer;
      }
    } else {
      console.log(fn);
      try {
        return new Function("return " + fn)();
      } catch (err) {
        console.log(err);
        return answer
      }
    }
  }



  console.log("this is previous", previous);

  return (
    <>
      <section className="flex flex-col h-full w-full overflow-auto">

        <div className="bg-white flex flex-col justify-end  items-end p-4 sm:p-1 gap-2 h-full overflow-y-auto">

          <div className="overflow-auto pr-4">
            {previous.map((i, index) => {
              return (
                  <div className="flex flex-col items-end gap-2 overflow-auto" key={index}>
                    <p className="tracking-[.12em] text-sm font-semibold text-gray-500">{i.equ}</p>
                    <p className="tracking-[.12em] text-sm font-semibold text-purple-500">{i.ans.toFixed(2)}</p>
                  </div>

              );
            })}
          </div>
          <div className="pt-4 pr-4">
            <p className="font-bold tracking-[.12em] text-base">{equvation}</p>
            <p className="font-bold tracking-[.12em] text-purple-600 text-base">{answer ? parseFloat(answer.toFixed(4)) : null}</p>
          </div>
        </div>

        <div
          className={` bg-white p-4  text-white grid ${taggleSwitch ? "grid-cols-5" : "grid-cols-4"
            } justify-items-center gap-2 p-0 w-full h-full`}
        >
          {taggleSwitch ? (
            <>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("2nd")}
              >
                2nd
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("deg")}
              >
                deg
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("sin")}
              >
                sin
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("cos")}
              >
                cos
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("tan")}
              >
                ton
              </div>

              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("X^y")}
              >
                X<sup>y</sup>
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("lg")}
              >
                lg
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("In")}
              >
                In
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString(")")}
              >
                (
              </div>
              <div
                className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
                onClick={() => addString("(")}
              >
                )
              </div>
            </>
          ) : (
            <></>
          )}

          {taggleSwitch ? (
            <div
              className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
              onClick={() => addString("sqrt X")}
            >
              &#8730;
              <span>X</span>
            </div>
          ) : (
            <></>
          )}

          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("c")}
          >
            C
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("Del")}
          >
            <FiDelete size={18} />
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("%")}
          >
            %
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("/")}
          >
            <FiDivide />
          </div>

          {taggleSwitch ? (
            <div
              className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
              onClick={() => addString("X!")}
            >
              X!
            </div>
          ) : (
            <></>
          )}

          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("7")}
          >
            7
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("8")}
          >
            8
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("9")}
          >
            9
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("*")}
          >
            <IoClose />
          </div>

          {taggleSwitch ? (
            <div
              className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
              onClick={() => addString("1/x")}
            >
              I/x
            </div>
          ) : (
            <></>
          )}

          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("4")}
          >
            4
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("5")}
          >
            5
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("6")}
          >
            6
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("-")}
          >
            <LuMinus />
          </div>

          {taggleSwitch ? (
            <div
              className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
              onClick={() => addString("3.14")}
            >
              <PiPiBold />
            </div>
          ) : (
            <></>
          )}

          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("1")}
          >
            1
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString(2)}
          >
            2
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString(3)}
          >
            3
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("+")}
          >
            <LuPlus />
          </div>

          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => settaggleSwitch(!taggleSwitch)}
          >
            <RxRotateCounterClockwise />
          </div>

          {taggleSwitch ? (
            <div
              className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200"
              onClick={() => addString("e")}
            >
              e
            </div>
          ) : (
            <></>
          )}

          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("0")}
          >
            0
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString(".")}
          >
            .
          </div>
          <div
            className="w-full p-3 text-base rounded text-center  text-purple-600 font-bold cursor-pointer bg-purple-200 flex items-center justify-center"
            onClick={() => addString("=")}
          >
            <LuEqual />
          </div>
        </div>
      </section>
    </>
  );
};

const CalculatorPc = () => {
  const [equvation, SetEquvation] = useState("");
  const [answer, Setanswer] = useState(0);
  const [previous, setPrevious] = useState([]);

  const addString = (str) => {
    console.log("string is", str);

    let char = false;

    if (str === "Del") {
      char = str;
      var showQuery = equvation;
      var equ = equvation;
    } else {
      char = str;
      var showQuery = !equvation ? str : equvation + str;
      var equ = !equvation ? str : equvation + str;
    }

    console.log("equvation is", equ);

    console.log("char is", char);

    if (char) {
      switch (char) {
        case "c":
          SetEquvation(0);
          Setanswer();
          setPrevious([]);
          break;
        case "Del":
          equ = equvation.slice(0, -1);
          !equ.length ? (equ = 0) : null;
          showQuery = equvation.slice(0, -1);
          calValue(equ, showQuery);
          break;
        case "=":
          if (answer) {
            setPrevious((prev) => {
              return [...prev, { equ: equvation, ans: answer }];
            });
            let ans = calValue(equ, showQuery);
            if (ans !== "Error") {
              SetEquvation(0);
              Setanswer();
            }
          } else {
            SetEquvation(0);
            calValue(equ, showQuery);
          }
          break;
        default:
          console.log("this default");
          calValue(equ, showQuery);
          break;
      }
    }
  };

  const calValue = (equ, showQuery) => {
    let ans = calc(equ);
    Setanswer(ans);
    SetEquvation(showQuery);
    return ans;
  };

  function calc(fn) {
    if (/[\+\-\*\=\%\(\)\/]$/.test(fn)) {
      if (fn.slice(-1) === "=") {
        return /[\+\-\*\%\/\/]$/.test(fn[fn.length - 2]) ? "Error" : answer;
      } else {
        return answer;
      }
    } else {
      console.log(fn);
      try {
        return new Function("return " + fn)();
      } catch (err) {
        console.log(err);
        return answer
      }
    }
  }

  return (
    <>
      <section className="flex flex-col h-5/6 w-3/4 lg:w-5/12 shadow">

        <div className="bg-white rounded-t-lg  overflow-auto flex flex-col justify-end  items-end p-1 gap-2  min-h-[30dvh]">
          <div className="overflow-auto pr-4">
            {previous.map((i, index) => {
              return (
                <div className="flex flex-col items-end gap-2" key={index}>
                  <p className="tracking-[.12em] text-gray-500 font-semibold">{i.equ}</p>
                  <p className="tracking-[.12em] font-semibold text-purple-500">= {i.ans.toFixed(2)}</p>
                </div>
              );
            })}

          </div>

          <div className="pt-4 pr-4">
            <p className="font-bold tracking-[.12em]">{equvation}</p>
            <p className="font-bold tracking-[.12em] text-purple-600">{answer ? parseFloat(answer.toFixed(4)) : null}</p>
          </div>




        </div>

        <div
          className={`bg-white rounded-b-lg grid grid-cols-7 justify-items-center items-center gap-2 p-2 h-full md:min-h-1/2  flex-1 `}
        >
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("2nd")}
          >
            2nd
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("X^y")}
          >
            X<sup>y</sup>
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("sqrt X")}
          >
            &#8730;
            <span>X</span>
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("c")}
          >
            C
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => (equvation ? addString("Del") : null)}
          >
            <FiDelete className="m-0.5" size={18} />
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => equvation ? addString("%") : null}
          >
            %
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => (equvation ? addString("/") : null)}
          >
            <FiDivide className="m-0.5" size={20} />
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("deg")}
          >
            deg
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("lg")}
          >
            lg
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("X!")}
          >
            X!
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("7")}
          >
            7
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("8")}
          >
            8
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("9")}
          >
            9
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => (equvation ? addString("*") : null)}
          >
            <IoClose className="m-0.5" size={20} />
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("sin")}
          >
            sin
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("In")}
          >
            In
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("1/x")}
          >
            I/x
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("4")}
          >
            4
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("5")}
          >
            5
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("6")}
          >
            6
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => (equvation ? addString("-") : null)}
          >
            <LuMinus className="m-0.5" size={20} />
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("cos")}
          >
            cos
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("(")}
          >
            (
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString(")")}
          >
            )
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("1")}
          >
            1
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString(2)}
          >
            2
          </div>
          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString(3)}
          >
            3
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-full flex items-center justify-center rounded text-center row-span-2 p-0 cursor-pointer font-semibold"
            onClick={() => equvation ? addString("+") : null}
          >
            <LuPlus size={22} />
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("tan")}
          >
            ton
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("3.14")}
          >
            <PiPiBold className="m-0.5" size={20} />
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("2.71828")}
          >
            e
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString("0")}
          >
            0
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => addString(".")}
          >
            <LuDot className="m-0.5" size={20} />
          </div>

          <div
            className="bg-purple-500 text-white w-3/4 h-3/4 min-h-10 flex items-center justify-center rounded text-center cursor-pointer font-semibold"
            onClick={() => (equvation ? addString("=") : null)}
          >
            <LuEqual className="m-0.5" size={20} />
          </div>
        </div>
      </section>
    </>
  );
};

// if (/[\+\-\*\=\%\/]$/.test(str)) {
// equ = answer ? answer + equvation.slice(-1) + str : str
// } else {
// equ = equvation === 0 ? str : equvation + str
// }
