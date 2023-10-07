import React, { useState } from "react";
import { incrementByAmount } from "../../redux/slices/counter";
import { useDispatch, useSelector } from "react-redux";

const ResetNumber = () => {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(incrementByAmount(Number(incrementAmount)));
  };

  return (
    <div>
      <h2>Current Count: {count} </h2>
      <label>
        Increment Amount:
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <h3>{incrementAmount}</h3>
      </label>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ResetNumber;
