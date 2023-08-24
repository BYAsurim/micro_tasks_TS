import React from 'react';


type AcordionBodyPropsType = {
    users: {
        id: number
        name: string
    }[]
}
export const AcordionBody = (props: AcordionBodyPropsType) => {
    return (
        <div>
            <ul>
                {props.users.map(el => <li key={el.id}>{'--' + el.name}</li>)}

            </ul>
        </div>
    );
};
