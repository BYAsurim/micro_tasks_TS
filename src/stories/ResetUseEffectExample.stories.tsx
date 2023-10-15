import React, {useEffect, useState} from "react";

export default {
    title: 'ResetUseEffectExample'
}

export const ResetUseEffectExample = () => {
    const [count, setCount] = useState(1)

    console.log(`component render ${count}`)
    useEffect(() => {
        console.log(` useEffect is call ${count}`)
        return () => {
            console.log(`Reset Effect ${count}`)
        }
    }, [count])

    const increase = () => setCount(count + 1)

    return <>
        Hello, {count}
        <button onClick={increase}>count</button>
        <br/>


    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log(`component render ${text}`)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])
    return <>
        typed, {text}
    </>
}
export const SetIntervalExample = () => {
    const [text, setText] = useState('')

    console.log(`component render ${text}`)
    useEffect(() => {
       const intervalId =  setInterval(() => {
            setText(`3 second passed`)
        }, 3000)
        return () => {
            clearInterval(intervalId)
        }
    }, [text])
    return <>
        typed, {text}
    </>
}