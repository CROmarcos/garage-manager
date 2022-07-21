import { Dispatch } from "react";
import ICars from "../interface/ICars";
import ITires from "../interface/ITires";
import { Action, ActionType } from './actions'

export const addNewCar = (payload: ICars["cars"]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload
        })
    }
}

export const updateTheCar = (payload: ICars["cars"]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload
        })
    }
}

export const sellTheCar = (payload: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELL,
            payload
        })
    }
}

export const setTireSize = (payload: ITires) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_TIRES,
            payload
        })
    }
}
