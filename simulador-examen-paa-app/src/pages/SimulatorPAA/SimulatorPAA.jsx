import { increment, decrement, reset } from "../../redux/slices/counter";
import { useDispatch, useSelector } from "react-redux";
import ResetNumber from "./ResetNumber";

function SimulatorPAA() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Profile</h1>
      <h3>Counter</h3>
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <ResetNumber />
    </div>
  );
}

export default SimulatorPAA;
