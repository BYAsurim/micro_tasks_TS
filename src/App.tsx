import React from 'react';
import './App.css';
import {Accordion} from "./acordion/Acordion";
import {Star} from "./star/Star";
import {OnOff} from "./onOff/OnOff";
import {Select} from "./select/Select";


function App() {


    return (
        <div className="App">
            <Accordion/>
            <Star/>
            <OnOff/>
            <Select/>
        </div>
    );
}

export default App;