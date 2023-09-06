import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./acordion/Accordion";
import {Star} from "./star/Star";
import {OnOff} from "./onOff/OnOff";
import {Select} from "./select/Select";
import {Navigation} from "./navigation/Navigation";
import {Route, Routes} from "react-router-dom";


function App() {
    const [star, setStar] = useState(0)

    return (
        <div className="App">
            <div>
            <Navigation/>
            </div>
            <div className="content">
            <Routes>
                <Route path={'/'} element={<div>выбери что нибудь </div>}/>
                <Route path={'/select'} element={<Select/>}/>
                <Route path={'/acсordion'} element={<Accordion/>}/>
                <Route path={'/star'} element={<Star star={star} setStar={setStar}/>}/>
                <Route path={'/onOff'} element={ <OnOff/>}/>
            </Routes>
            </div>




        </div>
    );
}

export default App;