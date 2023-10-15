import React from 'react';
import {BaseClock} from "./BaseClock";
import AnalogClock from "./AnalogClock";

type PropsType = {
    mode: 'base' | 'analog'
}


export const Clock: React.FC<PropsType> = ({mode}) => {
    let view;
    switch (mode) {
        case "base":
            return view = <BaseClock/>
        case 'analog':
        default:
            return view = <AnalogClock/>
    }

    return view
};

