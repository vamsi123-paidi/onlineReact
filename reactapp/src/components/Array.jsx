import React, { useState } from 'react'

const Array = () => {
    const [item,setItems] = useState(["apple","banana"])
    function handleItem(){
        setItems([...item,"orange"])
    }
  return (
    <>
        <ul>
            {item.map((items)=>(
                <li>{items}</li>
            ))}
        </ul>
        <button onClick={handleItem}>Add item</button>
    </>
  )
}

export default Array