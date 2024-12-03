// import { useState } from "react";
//import InputField from "./InputField";

export default function UserInput({ onChange, inputData }) {
  //   const [inputData, setInputData] = useState({
  //     initialInvestment: 10000,
  //     annualInvestment: 1200,
  //     expectedReturn: 6,
  //     duration: 10,
  //   });

  //   function onChange(inputIdentifier, newValue) {
  //     setInputData((prevUserData) => {
  //       return {
  //         ...prevUserData,
  //         [inputIdentifier]: newValue,
  //       };
  //     });
  //   }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
              value={inputData.initialInvestment}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
              value={inputData.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
              value={inputData.expectedReturn}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              onChange={(event) => onChange("duration", event.target.value)}
              value={inputData.duration}
            />
          </p>
        </div>
      </div>
    </>
  );
}
