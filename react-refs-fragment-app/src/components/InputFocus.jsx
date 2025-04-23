import React,{useEffect, useRef} from 'react'

const InputFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])

  return (
      <div>
          <input type="text" ref={inputRef} placeholder='Type here...'/>
    </div>
  )
}

export default InputFocus

// useRef(null) -> ek ref object banata hai.
// ref={inputRef} -> input element ko ek ref se connect kar diya
//   inputRef.current.focus() -> input element ko direct focus kr diya hai.