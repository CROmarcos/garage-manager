import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { bindActionCreators } from "redux"
import { FuelType } from "../../interface/ICars"
import * as actionCreators from '../../state/actionCreators'
import './CarInput.scss'

const CarInput = () => {

    const [input, setInput] = useState({
        make: '',
        model: '',
        power: 0
    })

    const [year, setYear] = useState(1970)
    const [fuelType, setFuelType] = useState("gasoline")
    const [hitch, setHitch] = useState(false)

    let years = []
    for (let i = 1970; i <= 2022; i++) {
        years.push(i)
    }

    const { addNewCar } = bindActionCreators(actionCreators, useDispatch())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const selectYear = () => {
        let yr: HTMLSelectElement = document.getElementById("chooseYear") as HTMLSelectElement
        let selectedYear = yr.value.toString()
        setYear(parseInt(selectedYear))
    }

    const selectFuel = () => {
        let fuel: HTMLSelectElement = document.getElementById("chooseFuel") as HTMLSelectElement
        let selectedFuel = fuel.value.toString()
        setFuelType(selectedFuel)
    }

    const selectHitch = () => {
        let hitchCb: HTMLInputElement = document.getElementById("chooseHitch") as HTMLInputElement
        if (hitchCb.checked) {
            setHitch(true)
        }
        else {
            setHitch(false)
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
                            <select id="chooseYear" onChange={selectYear}>
                                {years.map(
                                    yr => <option key={yr}>{yr}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Fuel type</div>
                            <select className="fuel" id="chooseFuel" onChange={selectFuel}>
                                {(Object.values(FuelType) as Array<keyof typeof FuelType>).map(fuelType => <option key={fuelType}>{fuelType}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Trailer hitch</div>
                            <input type="checkbox" id="chooseHitch" onChange={selectHitch} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="bottom">
                <Link to="/mycars"><button className="action" onClick={() => {
                    addNewCar({
                        id: Date.now(),
                        make: input.make,
                        model: input.model,
                        year: year,
                        fuel: fuelType,
                        power: input.power,
                        trailerHitch: hitch,
                        tires: []
                    })
                }}>Save</button></Link>
                <Link to="/mycars"><button className="action">Cancel</button></Link>
            </div>
        </>
    )
}

export default CarInput