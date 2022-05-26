import React from 'react'
import {AffairType} from "./HW2";
import c from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (

        <div className={c.affair}>
            <span className={c.affair_name}>{props.affair.name}</span>
            <span className={c.affair_prior}>{props.affair.priority}</span>

            <button className={c.del_btn} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
