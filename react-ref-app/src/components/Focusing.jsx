import React, { useRef } from 'react'

const Focusing = () => {
    const inputRef = useRef(null)
    function handleClick() {
        inputRef.current.focus()
    }
  return (
      <>
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>Focus the input</button>
     </>
  )
}

export default Focusing