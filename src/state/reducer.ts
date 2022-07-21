import { combineReducers } from "redux";
import ICars, { FuelType } from "../interface/ICars";
import { Action, ActionType } from "./actions";

const initialState: ICars["cars"][] = [
    {
        id: 1,
        make: "Mercedes-Benz",
        model: "W211",
        year: 2007,
        fuel: FuelType.diesel.toString(),
        power: 125,
        trailerHitch: false,
        tires: [
            "205/60 R16",
            "225/55 R16",
            "245/45 R17"
        ]
    },
    {
        id: 2,
        make: "Toyota",
        model: "Avensis",
        year: 2004,
        fuel: FuelType.diesel.toString(),
        power: 93,
        trailerHitch: true,
        tires: [
            "205/55 R16",
            "215/50 R17"
        ]
    },
    {
        id: 3,
        make: "Opel",
        model: "Astra",
        year: 2001,
        fuel: FuelType.gasoline.toString(),
        power: 74,
        trailerHitch: false,
        tires: [
            "185/70 R14",
            "195/60 R15",
            "205/50 R16"
        ]
    }
]

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
        case ActionType.SET_TIRES:
            return state.map(car => car.id === action.payload.car ? { ...car, tires: action.payload.tires } : car)
        default:
            return state
    }
}

const reducers = combineReducers({ reducer })

export default reducers

export type State = ReturnType<typeof reducers>