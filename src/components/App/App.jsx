import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trigger } from "../../store/actions/actions";

const App = () => {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const rnd = Math.floor(Math.random() * 51);

  const onIncrement = () => dispatch(trigger(1));
  const onDecrement = () => dispatch(trigger(-1));
  const onRandomPlus = () => dispatch(trigger(rnd));
  const onRandomMinus = () => dispatch(trigger(-rnd));

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
      <button onClick={onRandomPlus}>+RND</button>
      <button onClick={onRandomMinus}>-RND</button>
    </div>
  );
};

export default App;
