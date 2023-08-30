import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./acordion/Acordion";
import {Star} from "./star/Star";
import {OnOff} from "./onOff/OnOff";
import {Select} from "./select/Select";


function App() {
    const [star, setStar] = useState(0)

    return (
        <div className="App">
            <Accordion/>
            <Star star={star} setStar={setStar}/>
            <OnOff/>
            <Select/>
        </div>
    );
}

export default App;