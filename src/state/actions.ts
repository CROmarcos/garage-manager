import ICars from "../interface/ICars";
import ITires from "../interface/ITires";

export enum ActionType {
    ADD = "addNewCar",
    UPDATE = "updateTheCar",
    SELL = "sellTheCar",
    SET_TIRES = "setTireSize"
}

interface AddNewCarAction {
    type: ActionType.ADD,
    payload: ICars["cars"]
}

interface UpdateTheCarAction {
    type: ActionType.UPDATE,
    payload: ICars["cars"]
}

interface SellTheCarAction {
    type: ActionType.SELL,
    payload: number //ID of the car
}

interface SetTiresAction {
    type: ActionType.SET_TIRES,
    payload: ITires
}

export type Action = AddNewCarAction | UpdateTheCarAction | SellTheCarAction | SetTiresAction