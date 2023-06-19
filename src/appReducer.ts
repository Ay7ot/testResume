import { AppActionType, AppContextType } from "./types";

export function appReducer(state: AppContextType, action: AppActionType){
    switch(action.type){
        
        case 'setFirstName':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    firstName: action.payload?.firstName ?? ''
                }
            }
        case 'setLastName':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    lastName: action.payload?.lastName ?? ''
                }
            }
        case 'setEmail':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    email: action.payload?.email ?? ''
                }
            }
        case 'setPhone':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    phone: action.payload?.phone ?? ''
                }
            } 
        case 'setCountry':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    country: action.payload?.country ?? ''
                }
            }
        case 'setCity':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    city: action.payload?.city ?? ''
                }
            }
        case 'setJob':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    jobTitle: action.payload?.jobTitle ?? ''
                }
            }
        default :
            return state
    }
}