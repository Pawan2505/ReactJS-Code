import React, { useState } from 'react'

const InputExample2 = () => {
    const [text, setText] = useState('')
    
    const handleClick = (e) => {
        setText(e.target.value);
    }
  return (
      <div>
          <input type="text" value={text} onChange={handleClick} placeholder='Enter Username...' />
          <p>Text : { text}</p>
    </div>
  )
}

export default InputExample2