export enum FuelType {
    gasoline = "gasoline",
    diesel = "diesel",
    electric = "electric",
    hybridG = "gasoline hybrid",
    hybridD = "diesel hybrid",
    LPG = "LPG"
}

interface ICars {
    cars: {
        id: number,
        make: string,
        model: string,
        year: number,
        fuel: string,
        power: number,
        trailerHitch: boolean,
        tires: string[]
    }
}

export default ICars