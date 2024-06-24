import React, {useState, useEffect} from 'react'

function UseEffectCount() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    useEffect(()=>{
        console.log('creating timer')
        const interval = setInterval(()=>{
            setTime(time => time + 1)
        },1000)
    },[])
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('count 2 effect');
        document.title = count2;
    }, [count2]);
   
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            increment count ({count})
        </button>
         <button onClick={
            () => setCount2(count2 => count2 + 1)
        }>
            increment count ({count2})
        </button>
        <h1>Time is {time}</h1>
    </div>
  )
}

export default UseEffectCount