import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <input
          type="text"
          // value={incrementAmount}
          // onChange={(e) => setIncrementAmount(e.target.value)}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={resetAll}>Reset</button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(addValue));
            setIncrementAmount(0);
          }}
        >
          Add Amount
        </button>
      </div>
    </section>
  );
};

export default Counter;
