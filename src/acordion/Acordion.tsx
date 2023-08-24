import React, {useState} from 'react';
import {AcordionTitle} from "./AcordionTitle";
import {AcordionBody} from "./AcordionBody";

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
    const [state, setState] = useState(true)
    const clickHandler = () => {
        setState(!state)
    }
    return (
        <div>
            <AcordionTitle title={'Users :'} clickHandler={clickHandler}/>

            {state && <AcordionBody users={users}/>}
        </div>
    );
};





