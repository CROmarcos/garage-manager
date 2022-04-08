import ICars from "../interface/ICars";
import ITires from "../interface/ITires";

export enum ActionType {
    ADD = "addNewCar",
    UPDATE = "updateTheCar",
    SELL = "sellTheCar",
    ADD_TIRES = "addTireSize",
    REMOVE_TIRES = "removeTireSize"
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

interface AddTiresAction {
    type: ActionType.ADD_TIRES,
    payload: ITires
}

interface RemoveTiresAction {
    type: ActionType.REMOVE_TIRES,
    payload: ITires
}

export type Action = AddNewCarAction | UpdateTheCarAction | SellTheCarAction | AddTiresAction | RemoveTiresAction