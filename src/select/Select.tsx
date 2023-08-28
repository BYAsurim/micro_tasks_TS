import React, {useState} from 'react';
import s from './Selected.module.css'


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
    const [state, setState] = useState(false)
    const [title, setTitle] = useState(users[0].name)

    const clickHandler = () => setState(!state)
    const titleClickHandler = (name: string) => {
        setTitle(name)
        setState(false)
    }


    return (

        <div>


            <div className={s.styleImputAndImg}>
                <div onClick={clickHandler} className={s.styleInput}>
                    <div>{title}</div>
                    <img
                        alt={''}
                        className={s.styleImg}
                        src='https://img1.freepng.ru/20180304/ije/kisspng-black-triangle-download-icon-black-triangle-5a9c96611ca0c5.3754695915202115531173.jpg'/>
                </div>
            </div>

            {state &&
                <div className={s.items}>
                    {users.map(el => {
                        return <div
                            onClick={() => {
                                titleClickHandler(el.name)
                            }} key={el.id}>{el.name}</div>

                    })}
                </div>
            }


            <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">sasha</option>
            </select>
        </div>
    );
};





