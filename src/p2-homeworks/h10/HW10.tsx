import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from './bll/loadingReducer'
import spinner from '../../assets/Spinner.svg'
import c from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        debugger
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...')
    };
    debugger
    return (
        <div>
            <hr/>
          <div>homeworks 10</div>
            <div className={c.wrapper}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div><img className={c.img} src={spinner} alt="loading-spinner"/></div>
                    ) : (
                        <div>
                            <SuperButton className={c.btn} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
                <hr/>

        </div>
    )
}

export default HW10
