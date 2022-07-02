export type initStateType = {
    loading: boolean
}

 const initState = {
    loading: false
}

export const loadingReducer = (state:initStateType = initState, action: loadingACType):initStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading:action.payload.loading}
        }
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: "SET-LOADING",
        payload: {
            loading
        }
    } as const
}