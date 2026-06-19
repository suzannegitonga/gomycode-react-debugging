import { useState } from 'react'

function Counter() {
  // BUG 2 IS HERE: Look closely at how the state is being updated
  const [count, setCount] = useState(0)

  const increment = () => {
  setCount(count + 1)
}

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter