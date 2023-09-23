import React, {useState} from 'react';

export default {
    title: 'useState demo'
}

function generationDate() {
    console.log('generationDate')
    return 1
}

export const ReactUseState = () => {
    console.log('ReactUseState')
    // const init = generationDate()
    const [count, setCount] = useState(generationDate)

    return (

        <div>
            {count}
            <button onClick={() => setCount(state => state + 1)}>+</button>
        </div>
    );
};

