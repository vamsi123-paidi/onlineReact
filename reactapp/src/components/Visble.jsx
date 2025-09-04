import React, { useState } from 'react'

const Visble = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?'hide':'show'}</button>
            {isVisible && <p>This is the toggle content</p>}
        </>
    )
}

export default Visble