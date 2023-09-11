import React, {useCallback, useState} from "react";


export default {
    title: 'useCallback demo',

};

export const HelpToUseCallBack = () => {
    console.log('rednder HelpToUseCallBack')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'Redux'])


// для сравнения с useMemo
 // const memoizedAddBook = useMemo(()=>{
 //     return ()=>{
 //         const upDateBook = [...books,  `Figma - ${JSON.stringify( new Date().getTime())} ` ]
 //         setBooks(upDateBook)
 //     }
 // },[books])

    const useCallBackAddBook = useCallback(()=>{
        const upDateBook = [...books,  `Figma - ${JSON.stringify( new Date().getTime())} ` ]
        setBooks(upDateBook)
    }, [books])

    return <  >
        <button onClick={()=>setCount(count +1 )} >+</button>
        {count}
        <Book addBook={useCallBackAddBook} />
    </>
}

const BookSecret = (props: { addBook: ()=> void }) => {
    console.log('rednder BookSecret')
    return <div>
      <button onClick={()=>{props.addBook()}} >add book</button>
    </div>
}
const Book = React.memo(BookSecret)
