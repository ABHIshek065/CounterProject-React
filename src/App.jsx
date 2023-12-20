import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 const addValue = ()=>{
console.log(count);
if (count < 20 ) {
  setCount(count + 1)
  
}
  }
 const removeValue = ()=>{
console.log(count);
if (count > 0 ) {
  setCount(count - 1)
  
}
  }

  return (
    <>
      <h1>Counter Project</h1>
      <div>
        <h3>Counter Value {count}</h3>

        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <div>
        <h4>cart Value is {count}</h4>
      </div>
      <p>The value can reach up to 20 but will not go below 0.</p>
    </>
  )
}

export default App
