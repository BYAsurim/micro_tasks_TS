import React, {useEffect, useState} from 'react';

type PropsType = {}

const getLongDate = (number:number)=> number < 10 ? `0${number}` : number


export const Clock:React.FC<PropsType> = (props) => {
    const getTime = () => {
        let date = new Date()
        let hours = getLongDate( date.getHours())
        let minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
        let seconds = getLongDate( date.getSeconds())
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let dayOfWeek = date.getDay()

        return {year, month, day, dayOfWeek, hours, minutes, seconds}
    }
    const [time, setTime] = useState(getTime)
    useEffect(() => {
        const intervalId1 =  setInterval(() => {
            console.log('tick')
            setTime(getTime)
        }, 1000)
        return ()=> clearInterval(intervalId1)
    }, [])

    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    // let   fullDate = "Сегодня: " + time.getDate() + " " + months[time.getMonth()] +
    //       " " + time.getFullYear() + ", " + days[time.getDay()];


    return (
        <div>

            {`Сегодня: ${days[time.dayOfWeek]} ${time.day} ${months[time.month]} 
             ${time.hours} : ${time.minutes} : ${time.seconds}
               ${time.year} года
             `}

        </div>
    );
};

