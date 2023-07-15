import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  console.log(data);
  return (
    <div>
      <SliderComponent
        amount={data.homeValue}
        unit="$"
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        label="Home Value"
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
          })
        }
      />
      <SliderComponent
        amount={data.downPayment}
        unit="$"
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={1000}
        max={data.homeValue}
        step={100}
        label="Down Payment"
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value,
          })
        }
      />
      <SliderComponent
        amount={data.loanAmount}
        unit="$"
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={1000}
        max={data.homeValue}
        step={100}
        label="Loan Amount"
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,
          })
        }
      />
      <SliderComponent
        amount={data.interestRate}
        unit="%"
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        step={0.5}
        label="Interest Rate"
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
      />
    </div>
  );
};

export default SliderSelect;
