import React, {useEffect, useState} from 'react'

const TimeComponent = () => {

    const [count, setCount] = useState(0);
    
    // unmounting

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Component unmounted, count clear!");
        };
    },[])

  return (
      <div>
          <h2>Counter : { count}</h2>
    </div>
  )
}

export default TimeComponent