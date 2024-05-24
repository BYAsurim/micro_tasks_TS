import React, {useCallback} from 'react';


function Checkbox() {
    return <input id="checkbox" type="checkbox"/>;
}

function RadioButton() {
    return <input id="radio" type="radio"/>;
}

function Input() {
    return <input id="text" type="text"/>;
}

const CountButton = React.memo(({onClick, count}: { onClick: () => void, count: number }) => {
    return <button onClick={onClick}>{count}</button>
})
const constants = [<Checkbox/>, <RadioButton/>, <Input/>]
const DualCounter = () => {
    const [count1, setCount1] = React.useState(0)
    const increment1 = useCallback(() => setCount1(count1 + 1), [count1])

    const [count2, setCount2] = React.useState(0)
    const increment2 = useCallback(() => {
        setCount2(prevState => ++prevState)
        setCount2(prevState => ++prevState)
    }, [count2])

    const constantsIterable = constants.map((component, index) => (
            component && <React.Fragment key={index}>{component}</React.Fragment>
        )
    )

    return <div>
        <div style={{marginLeft: '100px', display: 'flex', gap: '20px'}}>
            <CountButton count={count1} onClick={increment1}/>
            <CountButton count={count2} onClick={increment2}/>
        </div>

        {
            constantsIterable
        }
    </div>

}


export const TestCount = () => {
    return (
        <div>
            <DualCounter/>
        </div>
    );
};

