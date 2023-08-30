import React from 'react';
import s from './Star.module.css'
import {StarImg} from "./StarImg";


type starPropsType = {
    star:number
    setStar: (number:number)=> void
}

export const Star = (props:starPropsType) => {
    // const [star, setStar] = useState(0)
    return (
        <div className={s.body}>
            <StarImg star={props.star > 0} setStar={() =>props.setStar(1)}/>
            <StarImg star={props.star > 1} setStar={() => props.setStar(2)}/>
            <StarImg star={props.star > 2} setStar={() => props.setStar(3)}/>
            <StarImg star={props.star > 3} setStar={() => props.setStar(4)}/>
            <StarImg star={props.star > 4} setStar={() => props.setStar(5)}/>
        </div>
    );
};




