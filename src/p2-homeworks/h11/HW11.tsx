import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeDoubleRange = (values:[number,number])=>{
        setValue1(values[0])
        setValue2(values[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{margin:"10px 0"}}>
                <span className={styles.label}>{value1}</span>
                <SuperRange value={value1} onChangeRange={onChangeRange}
                            className={styles.range}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={styles.doubleRangeBlock}>
                <span className={styles.label}>{value1}</span>
                <SuperDoubleRange
                   value={[value1,value2]}
                   onChangeDoubleRange={onChangeDoubleRange}

                />
                <span className={styles.label}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
