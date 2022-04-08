enum fuelType {
    gasoline = "GASOLINE",
    diesel = "DIESEL",
    electric = "ELECTRIC",
    hybridG = "GASOLINE HYBRID",
    hybridD = "DIESEL HYBRID",
    LPG = "LPG"
}

interface ICars {
    cars: {
        id: number,
        make: string,
        model: string,
        year: number,
        fuel: fuelType,
        power: number,
        trailerHitch: boolean,
        tires: string[]
    }
}

export default ICars