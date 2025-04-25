import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './redux/counter/CounterSlice'

const Child = () => {
    const dispatch = useDispatch()
  return (
    <div>
      {/* <h1>{count}</h1> */}
            <button onClick={()=>dispatch(increment())}>+by child</button>
    </div>
  )
}

export default Child
