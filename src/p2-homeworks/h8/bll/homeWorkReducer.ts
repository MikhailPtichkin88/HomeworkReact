import {UsersType} from "../HW8";


export const homeWorkReducer = (state: UsersType, action: ACType): UsersType => { // need to fix any
    switch (action.type) {

        case 'sort': {
            if(action.payload.value === "up"){
                return [...state].sort((a,b)=>b.age-a.age)
            }else if(action.payload.value === "down"){
                return [...state].sort((a,b)=>a.age-b.age)
            }else{
                return state
            }
        }

        case 'check': {
            // need to fix
            return state.filter(el=>el.age>=18)
        }
        default: return state
    }
}

type ACType = sortACType | checkACType

type sortACType = ReturnType<typeof sortAC>
export const sortAC = (value:string) =>{
    return {
        type: "sort",
        payload:{
            value
        }
    }as const
}

type checkACType = ReturnType<typeof checkAC>
export const checkAC = () =>{
    return {
        type: "check",
        payload:{

        }
    }as const
}