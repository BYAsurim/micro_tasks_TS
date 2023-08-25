import React, {useState} from 'react';
import s from './Star.module.css'
import {StarImg} from "./StarImg";

export const Star = () => {
    const [star, setStar] = useState(0)

    return (
        <div className={s.body}>
            <StarImg star={star > 0} setStar={() => {
                setStar(1)
            }}/>
            <StarImg star={star > 1} setStar={() => {
                setStar(2)
            }}/>
            <StarImg star={star > 2} setStar={() => {
                setStar(3)
            }}/>
            <StarImg star={star > 3} setStar={() => {
                setStar(4)
            }}/>
            <StarImg star={star > 4} setStar={() => {
                setStar(5)
            }}/>

        </div>
    );
};




