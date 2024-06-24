import React, {useState, useEffect} from 'react'

function UseEffectCount() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    });
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            increment count ({count})

        </button>
    </div>
  )
}

export default UseEffectCount