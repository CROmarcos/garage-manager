import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { bindActionCreators } from "redux"
import { FuelType } from "../../interface/ICars"
import * as actionCreators from '../../state/actionCreators'
import store from "../../state/store"
import './CarInput.scss'

const CarInput = () => {

    const { id } = useParams()

    let make = ''
    let model = ''
    let power = 0
    let year = 1970
    let fuel = 'gasoline'
    let trailerHitch = false
    let tires: string[] = []

    if (id) {
        let car = store.getState().reducer.find(x => x.id === parseInt(id))
        if (car) {
            make = car.make
            model = car.model
            power = car.power
            year = car.year
            fuel = car.fuel
            trailerHitch = car.trailerHitch
            tires = car.tires
        }
    }

    const [input, setInput] = useState({
        make,
        model,
        power,
        year,
        fuel,
        trailerHitch,
        tires
    })

    let years = []
    for (let i = 1970; i <= 2022; i++) {
        years.push(i)
    }

    const { addNewCar, updateTheCar } = bindActionCreators(actionCreators, useDispatch())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const selectYear = () => {
        let yr: HTMLSelectElement = document.getElementById("chooseYear") as HTMLSelectElement
        let selectedYear = yr.value.toString()
        setInput({ ...input, year: parseInt(selectedYear) })
    }

    const selectFuel = () => {
        let fuel: HTMLSelectElement = document.getElementById("chooseFuel") as HTMLSelectElement
        let selectedFuel = fuel.value.toString()
        setInput({ ...input, fuel: selectedFuel })
    }

    const selectHitch = () => {
        let hitchCb: HTMLInputElement = document.getElementById("chooseHitch") as HTMLInputElement
        if (hitchCb.checked) {
            setInput({ ...input, trailerHitch: true })
        }
        else {
            setInput({ ...input, trailerHitch: false })
        }
    }

    return (
        <>
            <div className="input">
                <form className="input__form">
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Make</div>
                            <input type="text" name="make" value={input.make} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Model</div>
                            <input type="text" name="model" value={input.model} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Power (kW)</div>
                            <input type="number" name="power" value={input.power === 0 ? '' : input.power} onChange={handleChange} />
                        </div>
                    </div>
                </form>
                <form className="input__form">
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Year</div>
                            <select id="chooseYear" onChange={selectYear} value={input.year}>
                                {years.map(
                                    yr => <option key={yr}>{yr}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Fuel type</div>
                            <select className="fuel" id="chooseFuel" onChange={selectFuel} value={input.fuel}>
                                {(Object.values(FuelType) as Array<keyof typeof FuelType>).map(fuelType => <option key={fuelType}>{fuelType}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Trailer hitch</div>
                            <input type="checkbox" id="chooseHitch" onChange={selectHitch} checked={input.trailerHitch ? true : false} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="bottom">
                <Link to="/mycars"><button className="action" onClick={() => {
                    (!id) ?
                        addNewCar({
                            id: Date.now(),
                            make: input.make,
                            model: input.model,
                            year: input.year,
                            fuel: input.fuel,
                            power: input.power,
                            trailerHitch: input.trailerHitch,
                            tires: []
                        })
                        : updateTheCar({
                            id: parseInt(id),
                            make: input.make,
                            model: input.model,
                            year: input.year,
                            fuel: input.fuel,
                            power: input.power,
                            trailerHitch: input.trailerHitch,
                            tires: input.tires
                        })
                }}>Save</button>
                </Link>
                <Link to="/mycars"><button className="action">Cancel</button></Link>
            </div>
        </>
    )
}

export default CarInput