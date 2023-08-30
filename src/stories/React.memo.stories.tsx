import React, {useState} from 'react'


export default {
    title: 'react.memo demo',

};

const Obj1 = (props: { count:number }) => {
    console.log('rednder count')
    return <div>{props.count}</div>
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
const Secretobj1 = React.memo(Obj1)
const Secretobj2 = React.memo(Obj2)


export const Example1 = () => {
    console.log('rednder Example1')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Valera', 'Lena', 'Sasha'])
    const addUser = ()=>{
        const upDateUSers = [...users,  `Katya - ${JSON.stringify( new Date().getTime())} ` ]
        setUsers(upDateUSers)

    }
   return <  >
       <button onClick={()=>setCount(count +1 )} >+</button>
        <Secretobj1 count={count}/>
       <Secretobj2 users={users}/>
       <button onClick={addUser}>add user</button>
    </>
}



