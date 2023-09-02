import React, {useMemo, useState} from 'react'


export default {
    title: 'useMemo demo',

};

export const DificultCounting = () => {
    console.log('rednder Example1')
const [a,setA] = useState(1)
const [b,setB] = useState(5)

    // let resultA = 1
    let resultB = 1
    const resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i<=a; i++){
            let fakeValue = 0
            while (fakeValue < 1000000000){
                fakeValue++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    },[a])

    for (let i = 1; i<=b; i++){
        resultB *= i
    }

    return <div>
<input onChange={(e)=>{setA(Number(e.currentTarget.value))}}/>
<input onChange={(e)=>{setB(Number(e.currentTarget.value))}}/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </div>
}



const Obj2 = (props: { users: Array<string> }) => {
    console.log('rednder users')
    return <div>
        {props.users.map((u, i) => {
            return (
                <div key={i}>{u}</div>
            )
        })}
    </div>
}
const Secretobj2 = React.memo(Obj2)
export const HelpToUseMemo = () => {
    console.log('rednder HelpToUseMemo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Valera', 'Lena', 'Sasha', 'Sveta'])
    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('s') > -1)
    },[users])
    const addUser = ()=>{
        const upDateUSers = [...users,  `Sirena - ${JSON.stringify( new Date().getTime())} ` ]
        setUsers(upDateUSers)
    }

    return <  >
        <button onClick={()=>setCount(count +1 )} >+</button>
        {count}
        <Secretobj2 users={newArray}/>
        <button onClick={addUser}>add user</button>
    </>
}