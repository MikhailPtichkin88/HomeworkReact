import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './HW9.css'


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())


        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    let hours = (date && date.getHours() < 10) ? "0" + date?.getHours() : date?.getHours()
    let minute = (date && date.getMinutes() < 10) ? "0" + date?.getMinutes() : date?.getMinutes()
    let seconds = (date && date.getSeconds() < 10) ? "0" + date?.getSeconds() : date?.getSeconds()


    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let day = date && days[date.getDay()]
    let dateDay = (date && date?.getDate() < 10) ? "0" + date?.getDate() : date?.getDate()
    let dateMonth = (date && date?.getMonth() < 10) ? "0" + date?.getMonth() : date?.getMonth()
    let dateYear = date?.getFullYear()

    return (
        <div className="clockWrapper">
            <div className="clockTimeWrapper"
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <span className="clockTime">{hours}</span>
                <span className="clockTime">{minute}</span>
                <span className="clockTime">{seconds}</span>
            </div>

            <div className='clockDateWrapper'
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {show && (
                    <div>
                        <span className="clockDate">{dateDay && dateDay + " ."}</span>
                        <span className="clockDate">{dateMonth && dateMonth + " ."}</span>
                        <span className="clockDate">{dateYear && dateYear + ' -'}</span>

                        <span className="clockDay">{day}</span>
                    </div>
                )}
            </div>
            <div className="clockBtnWrapper">
                <SuperButton className="clockBtn" onClick={start}>start</SuperButton>
                <SuperButton className="clockBtn" onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
