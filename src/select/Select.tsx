import React, {useState} from 'react';


export const Select = () => {
    const users = [
        {
            id: 1,
            name: 'Марк'
        },
        {
            id: 2,
            name: 'София'
        },
        {
            id: 3,
            name: 'Александр'
        }
    ];
    const [state, setState] = useState(true)
    const [title, setTitle] = useState('Users')
    const clickHandler = () => {
        setState(!state)
    }
    const styleInput = {
        display: 'flex'
    }
    const styleImg = {
        width: '15px',
        height: '15px',
        marginTop: '5px'
    }

    return (
        <div>
            <div onClick={clickHandler} style={styleInput}>
                <div>{title}</div>
                <img
                    alt={''}
                    style={styleImg}
                    src='https://img1.freepng.ru/20180304/ije/kisspng-black-triangle-download-icon-black-triangle-5a9c96611ca0c5.3754695915202115531173.jpg'/>
            </div>

            {state && users.map(el => {
                const titleClickHandler = () => {
                    setTitle(el.name)
                    setState(false)
                }
                return <div onClick={titleClickHandler} key={el.id}>{el.name}</div>

            })}

        </div>
    );
};





