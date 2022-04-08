import { combineReducers } from "redux";
import ICars from "../interface/ICars";
import { Action, ActionType } from "./actions";

const initialState: ICars["cars"][] = []

const reducer = (state: ICars["cars"][] = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD:
            return [
                ...state,
                action.payload
            ]
        case ActionType.UPDATE:
            return state.map(car => car.id === action.payload.id ? action.payload : car)
        case ActionType.SELL:
            return state.filter(car => car.id !== action.payload)
        case ActionType.ADD_TIRES:
            return state.map(car => car.id === action.payload.car ? car.tires.push(action.payload.tire) : car)
        case ActionType.REMOVE_TIRES:
            return state.map(car => car.id === action.payload.car ? car.tires.filter(tire => tire !== action.payload.tire) : car)
        default:
            return state
    }
}

const reducers = combineReducers({ reducer })

export default reducers

export type State = ReturnType<typeof reducers>