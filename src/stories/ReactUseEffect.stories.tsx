import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const ReactUseEffect= () => {
    console.log('ReactUseEffect component render')
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    useEffect(()=>{
        document.title = count.toString()
        console.log('useEffect firs render and render with dependencies ')
    },[count])
    useEffect(()=>{
        setFake(fake + 42)
        console.log('useEffect one times render')
    },[])
    useEffect(()=>{
        console.log('useEffect every render')
    },)

    return (<>
            Hello, {count}
        <button onClick={() => setCount(count + 1)}>count</button>
        <br/>
        Hello,  {fake}
            <button onClick={() => setFake(fake + 1)}>fake</button>


        </>);
};

export const SetTimeOutexample = ()=>{
    const [count, setCount] = useState(1)
    const [second, setsecond] = useState(1)

useEffect(()=>{
    setTimeout(()=>{
        console.log('setTimeot with useEffect')
        document.title = count.toString()
    }, 1000)
}, [count])

    useEffect(()=>{
        setInterval(()=>{
            console.log('setInterval with useEffect:  ' + second)
        setsecond(state => state + 1)
        }, 1000)
    },[])
    return<>
        Hello, {count}
        <button onClick={() => setCount(count + 1)}>count</button>
        <br/>
        O'clock {second}

    </>
}

