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
            <NavLink to={'/acсordion'}>Acсordion</NavLink>
            </div>
            <NavLink to={'/onOff'}>OnOff</NavLink>
            <NavLink to={'/select'}>Select</NavLink>
            <NavLink to={'/star'}>Star</NavLink>
        </div>
    );
};


