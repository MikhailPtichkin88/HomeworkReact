const initState = {
    colorsPool: ['dark', 'red', 'some', 'default'] as Array<ColorType>,
    themeColor: 'default' as ColorType
};

export type ColorType = 'dark' | 'red' | 'some' | 'default'
type initialStateType = typeof initState


export const themeReducer = (state: initialStateType = initState, action: changeThemeACType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME-COLOR": {
            return {...state, themeColor: action.payload.color}
        }
        default:
            return state;
    }
};

type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (color: ColorType) => {
    return {
        type: "CHANGE-THEME-COLOR",
        payload: {
            color
        }
    } as const
}; // fix any