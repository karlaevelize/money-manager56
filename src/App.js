import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { selectAmount } from "./store/balance/selector"
import { deposit } from "./store/balance/actions"

function App() {

  const amount = useSelector(selectAmount)
  // console.log("amount", amount)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>My Redux App</h1>
      <p>Total amount: <b>{amount}</b></p>
      <button onClick={() => dispatch(deposit(10))}>+ 10</button>
      <button onClick={() => dispatch(deposit(-10))}>- 10</button>

    </div>
  );
}

export default App;
