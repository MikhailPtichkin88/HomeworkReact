import React from 'react'
import {TwoThumbInputRange} from "react-two-thumb-input-range"
import styles from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeDoubleRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    let thumbStyle = {
        "height": "24px",
        "width": "16px",
        "borderRadius": "6px",
        "background": "#1672EC",
        "cursor": "pointer",
        "border": "1px solid #0F56B3",
    }
    let thumbFocusStyle = {
        "boxShadow": "0px 4px 8px rgba(80, 150, 241, 0.18), 0px 4px 8px rgba(80, 150, 241, 0.36)",
    }
    let labelStyle = {
        "width": "25px",
        "height": "20px",
        "color": "#fff",
        "backgroundColor": "#1672EC",
        "transform":"translateX(10px)",
        "borderRadius": "8px",
        "border":"1px solid #0F56B3",
        "padding":"5px",
        "&::after":`{
        display: none;
        }`
    }
    let inputStyle = {
       "height":"5px",
        "width":"250px"
    }
    return (
        <div className={styles.doubleRange}>
            <TwoThumbInputRange onChange={onChangeDoubleRange}
                                values={value}
                                min={0} max={100}
                                thumbStyle={thumbStyle}
                                thumbFocusStyle={thumbFocusStyle}
                                labelStyle={labelStyle}
                                inputStyle={inputStyle}

            />
        </div>
    )
}

export default SuperDoubleRange
