import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    // let x = 0;
    let x = useRef(0)
    useEffect(() => {
        x.current = x.current + 1;
        alert(`x : ${x.current}`)
    },[count])
    
  return (
      <div>
          <button onClick={()=>setCount(count+1)}>Counter : {count}</button>
    </div>
  )
}

export default Counter