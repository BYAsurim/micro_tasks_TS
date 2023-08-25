import React, {useState} from 'react';


export const OnOff = () => {
    const [onOff, setOnOff] = useState(false)
    const chengeOn = () => {
        setOnOff(true)
    }
    const chengeOff = () => {
        setOnOff(false)
    }
    const main = {
        display:'flex'
    }
    const on = {
        width: '50px',
        height: '20px',
        border: '2px solid black',
        backgroundColor: onOff ? 'green' : ''
    }
    const off = {
        width: "50px",
        height: "20px",
        border: "2px solid black",
        backgroundColor: !onOff ? 'red' : ''
    }
    const indicate = {
        width: "20px",
        height: "20px",
        border: "2px solid black",
        borderRadius: "50px",
        marginLeft: "15px",
        backgroundColor:onOff ? 'green' : 'red'
    }

    return (
        <div>
            <div style={main}>
                <div style={on} onClick={chengeOn}></div>
                <div style={off} onClick={chengeOff}></div>
                <div style={indicate}></div>
            </div>
        </div>
    );
};

