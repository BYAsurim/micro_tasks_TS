import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'


export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <div>
            <NavLink to={'/'}>Home</NavLink>
            </div>
            <div>
            <NavLink to={'/acordion'}>acordion</NavLink>
            </div>
            <NavLink to={'/onOff'}>onOff</NavLink>
            <NavLink to={'/select'}>select</NavLink>
            <NavLink to={'/star'}>star</NavLink>
        </div>
    );
};


