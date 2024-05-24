import React, {useReducer, useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";

import {reducer} from "./reduserAcordion";



export const Accordion = () => {


    const users = [
        {
            id: 1,
            name: 'Марк'
        },
        {
            id: 2,
            name: 'София'
        },
        {
            id: 3,
            name: 'Александр'
        }
    ];
    // const [state, setState] = useState(true)
    const [state, dispatch] = useReducer(reducer, {OpenClose:true})
    const [title, setTitle] = useState('Users')
    const clickHandler = () => {
        // setState(!state)
        dispatch({type:'Open'})
    }

    return (
        <div>
            <AccordionTitle title={title} clickHandler={clickHandler}/>

            {state.OpenClose && users.map(el => {
                const titleClickHandler = ()=>{
                    setTitle(el.name)
                    // setState(false)
                    dispatch({type:'Open'})

                }
              return  <li onClick={titleClickHandler} key={el.id}>{'--' + el.name}</li>

            })}

        </div>
    );
};





