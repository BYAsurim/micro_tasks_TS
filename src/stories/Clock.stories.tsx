import React from 'react';
import {Clock} from "../clock/Clock";

export default {
    title: 'Hours stories',
    component: Clock
}


export const ClockStories = () => {

    return <Clock  mode={'base'}/>
};
export const AnalogClockStories = () => {

    return <Clock mode={'analog'}/>
};

