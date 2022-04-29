import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { FuelType } from "../../interface/ICars"
import * as actionCreators from '../../state/actionCreators'
import store from "../../state/store"
import './CarInput.scss'

const CarInput = () => {

    const [input, setInput] = useState({
        make: '',
        model: '',
        year: 1970,
        fuel: FuelType.gasoline,
        power: 0,
        trailerHitch: false,
        tires: ['']
    })

    let years = []
    for (let i = 1970; i <= 2022; i++) {
        years.push(i)
    }

    const { addNewCar } = bindActionCreators(actionCreators, useDispatch())

    const handleChange = () => { }

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
                            <input type="number" name="power" value={input.power} onChange={handleChange} />
                        </div>
                    </div>
                </form>
                <form className="input__form">
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Year</div>
                            <select id="chooseYear" name="year" onSelect={handleChange}>
                                {years.map(
                                    yr => <option key={yr}>{yr}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Fuel type</div>
                            <select id="chooseFuel" name="fuel"></select>
                        </div>
                    </div>
                    <div className="input__row">
                        <div className="input__row--field">
                            <div className="input__row--label">Trailer hitch</div>
                            <input type="checkbox" id="trailerHitch" name="trailerHitch" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CarInput