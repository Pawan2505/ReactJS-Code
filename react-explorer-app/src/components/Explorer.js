import React, { useState } from 'react'

const Explorer = ({ data }) => {
    // Track whether folder is open or closed
    const [isOpen, setIsOpen] = useState(false);


    // if it's not a folder, return file

    if (!data.isFolder) {
        return <div style={{paddingLeft:20}}>📝{data.name}</div>
    }

    //if it's a folder
  return (
      <div style={{ paddingLeft: 20 }}>
          {/* Folder Name - click to open/close */}

          <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>📁 {data.name}</div>
          
          {/* show child items if open */}
          {
              isOpen && data.items.map((item, index) => (
                  <Explorer key={index} data={item}/>
              ))
          }
          
    </div>
  )
}

export default Explorer