import { useSelector } from "react-redux"
import { increment,decrement,incrementByAmount } from "./redux/counter/CounterSlice"
import { useDispatch } from "react-redux"
import Child from "./Child"
const App = () => {
  const count=useSelector(state=>state.counter.value)
  const dispatch=useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>incrementByAmount+5</button>
      <Child/>
    </div>
  )
}

export default App
