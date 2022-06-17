import React, {useReducer, useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './HW8.module.css'

export type UsersType = Array<UserType>
export type UserType = {
    _id: number
    name: string
    age: number
}
const initialPeople: UsersType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]


function HW8() {
    const [people, dispatchPeople] = useReducer(homeWorkReducer, initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={c.line}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => dispatchPeople(sortAC("up"))
    const sortDown = () => dispatchPeople(sortAC("down"))
    const check = () => dispatchPeople(checkAC())

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={c.wrapper}>
                {/*should work (должно работать)*/}
                {finalPeople}
            </div>

            <div className={c.btn_wrapper}>
                <div><SuperButton className={c.button} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton className={c.button} onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton className={c.button} onClick={check}>check18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
