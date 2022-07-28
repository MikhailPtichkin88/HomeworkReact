import React, {ChangeEvent, useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestAPI} from "./api";
import s from "../h4/HW4.module.css";
import styles from './HW13.module.css'

type ResponseDataType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}


const Hw13 = () => {
    const [auth, setAuth] = useState(false)
    const [data, setData] = useState<ResponseDataType>({
        errorText: "",
        info: "",
        yourBody: {success: false},
        yourQuery: {}
    })

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAuth(e.currentTarget.checked)
    }
    const onClickHandler = () => {
        RequestAPI.authMe(auth)
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
                setData(err.response.data)
            })
    }
    return (
        <div style={{padding: '10px'}}>
            <SuperCheckbox checked={auth} onChange={onChangeHandler} className={s.altCheckbox}></SuperCheckbox>
            <div style={{padding: '10px'}}/>
            <SuperButton onClick={onClickHandler}>Post</SuperButton>
            <div className={styles.textField}>
                <div className={styles.textItem}><span>ErrorText:</span>{` ${data.errorText}`}</div>
                <div className={styles.textItem}><span>Info:</span>{` ${data.info}`}</div>
                <div className={styles.textItem}><span>Success:</span>{` ${data.yourBody.success}`}</div>
            </div>
        </div>
    );
};

export default Hw13;