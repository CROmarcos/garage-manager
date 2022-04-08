import ICars from "../Interface";

enum ActionType {
    ADD = "addNewCar",
    UPDATE = "updateTheCar",
    SELL = "sellTheCar",
    ADD_TIRES = "addTireSize",
    REMOVE_TIRES = "removeTireSize"
}

interface AddNewCar {
    type: ActionType.ADD,
    payload: ICars["cars"]
}

interface UpdateTheCar {
    type: ActionType.UPDATE,
    payload: ICars["cars"]
}

interface SellTheCar {
    type: ActionType.SELL,
    payload: number //ID of the car
}

interface AddTires {
    type: ActionType.ADD_TIRES,
    payload: string
}

interface RemoveTires {
    type: ActionType.ADD_TIRES,
    payload: string
}

export type Action = AddNewCar | UpdateTheCar | SellTheCar | AddTires | RemoveTires