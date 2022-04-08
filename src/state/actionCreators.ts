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

export const addTireSize = (payload: ITires) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TIRES,
            payload
        })
    }
}

export const removeTireSize = (payload: ITires) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_TIRES,
            payload
        })
    }
}