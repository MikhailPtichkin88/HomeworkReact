import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ColorType} from "./bll/themeReducer";


function HW12() {

    const theme = useSelector<AppStoreType, ColorType>((state) => state.theme.themeColor)
    const themes = useSelector<AppStoreType, ColorType[]>((state) => state.theme.colorsPool)
    const dispatch = useDispatch()

    const onChangeOption = (color: ColorType) => {
        dispatch(changeThemeAC(color))
    }
    let classArray = themes.map((color: ColorType) => s[color])

    console.log(classArray)
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeOption}
                         optionsClass={s.optionsBorderColor}
                         selectClass={s.selectBorderColor}
                         optionsClassesArray={classArray}
            />
            <hr/>
        </div>
    );
}

export default HW12;
