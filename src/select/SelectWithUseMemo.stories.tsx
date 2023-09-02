import React, {useMemo, useState} from 'react';
import s from './Selected.module.css'



export default {
    title: 'SelectWithUseMemo',

};
type PropsType = {
    id:number
    country:string
    city: string

}
type ArrayPropsType = {
    cities:PropsType[]
}
const citiesArray = [
    {
        country: 'Russia',
        id: 1,
        city: 'Moscow'
    },
    {
        country: 'Russia',
        id: 2,
        city: 'Saint Petersburg'
    },
    {
        country: 'Russia',
        id: 3,
        city: 'Novosibirsk'
    },

    {
        country: 'Germany',
        id: 4,
        city: 'Berlin'
    },
    {
        country: 'Germany',
        id: 5,
        city: 'Hamburg'
    },
    {
        country: 'Germany',
        id: 6,
        city: 'Munich'
    },

    {
        country: 'USA',
        id: 7,
        city: 'New York'
    },
    {
        country: 'USA',
        id: 8,
        city: 'Los Angeles'
    },
    {
        country: 'USA',
        id: 9,
        city: 'Chicago'
    },

    {
        country: 'Russia',
        id: 10,
        city: 'Kazan'
    },
    {
        country: 'Russia',
        id: 11,
        city: 'Nizhny Novgorod'
    },
    {
        country: 'Germany',
        id: 12,
        city: 'Cologne'
    }
]


export const AnySelect = (props:ArrayPropsType) => {
    console.log('render SelectWithUseMemoStories')
    const [state, setState] = useState(false)
    const [title, setTitle] = useState("cities:")

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
                    {props.cities.map(el => {
                        return <div
                            onClick={() => {
                                titleClickHandler(el.country)
                            }} key={el.id}>{el.city}</div>

                    })}
                </div>
            }

        </div>
    );
};
const SelectWithHelpReactMemo = React.memo(AnySelect)

export const SelectWithUseMemoStories = ()=>{
    const [cities, setSities] = useState<Array<PropsType>>(citiesArray)
    const [count, setCount] = useState(0)
    console.log('render AnySelect')

    const resultUSA = useMemo(()=>{
        const countryUSA = cities.filter(el=> el.country === 'USA')
        return countryUSA
    },[cities])
    const resultGermany = useMemo(()=>{
        const countryGermany = cities.filter(el=> el.country === 'Germany')
        return countryGermany
    },[cities])
    const resultRussia = useMemo(()=>{
        const countryRussia = cities.filter(el=> el.country === 'Russia')
        return countryRussia
    },[cities])


    const styles = {
        marginRight: 20
    }

    return <div style={{
        display: 'flex',
        color: 'blue',
        fontSize: 20,

    }}>
      <div style={styles}>
    <SelectWithHelpReactMemo cities={resultUSA} />
</div>
        <div  style={styles}>
    <SelectWithHelpReactMemo cities={resultGermany}/>
        </div>
        <div  style={styles}>
    <SelectWithHelpReactMemo cities={resultRussia}/>
        </div>
        <div  style={styles}>
        {count}
        <button onClick={()=>{setCount(count+ 1)}}>+</button>
        </div>
    </div>
}





