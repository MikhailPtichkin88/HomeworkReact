import React, {SelectHTMLAttributes, MouseEvent, DetailedHTMLProps, ChangeEvent, useState} from 'react'
import c from './SuperSelect.module.scss'
import {ColorType} from "../../../h12/bll/themeReducer";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    selectClass?: string
    optionsClass?: string
    optionsClassesArray?: string[]
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        optionsClass,
        optionsClassesArray,
        selectClass,
        value,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const [menuList, setMenuList] = useState(false)

    const dropDownIconClass = menuList ? `${c.dropdown__title} ${c.dropdown__title_active}` : `${c.dropdown__title}`

    const dropDownMenuClass = menuList ? `${c.dropdown__menu} ${c.dropdown__menu_active}` : `${c.dropdown__menu}`


    const mappedOptions: any[] = options ? options.map((opt, i) => {

        return (<option key={"option" + '-' + i}
                        value={opt}
                        selected={opt == value}
            >{opt}</option>
        )
    }) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }
    const openMenuHandler = () => {
        setMenuList(!menuList)
    }
    const chooseSelect = (event: MouseEvent<HTMLLIElement>) => {
        setMenuList(!menuList)
        console.log(event)
        onChangeOption && onChangeOption(event.currentTarget.getAttribute('value'))
    }

    return (
        <div className={c.wrapper}>

            <select onChange={onChangeCallback} className={c.select} {...restProps}>
                {mappedOptions}
            </select>

            <ul className={c.dropdown}>

                <li className={dropDownIconClass + ` ${selectClass}`}>
                    <button className={c.dropdown__title_link}
                            type="button"
                            onClick={openMenuHandler}>
                        {value}
                    </button>

                    <ul className={dropDownMenuClass}>

                        {
                            options && options?.map((el, i) => {

                                let optionClasses = optionsClassesArray && optionsClassesArray.find(className => className.includes(el))

                                return <li key={"option" + "-" + el}
                                           className={c.dropdown__item + ` ${optionsClass} ${optionClasses}`}
                                           onClick={chooseSelect}
                                           value={el}>
                                    {el}
                                </li>
                            })
                        }

                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SuperSelect
