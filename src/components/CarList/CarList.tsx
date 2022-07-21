import { useSelector, useDispatch } from "react-redux"
import { State } from '../../state/reducer'
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"
import * as actionCreators from '../../state/actionCreators'

import ICars from "../../interface/ICars"

import checkmark from '../../images/checkmark.svg'
import notchecked from '../../images/not.png'
import trashcan from '../../images/trashcan.png'
import edit from '../../images/edit.png'

import './CarList.scss'
import TireInput from "../TireInput/TireInput"

const CarList = () => {
    let carList: ICars["cars"][] = useSelector((state: State) => state.reducer)
    const { sellTheCar, setTireSize } = bindActionCreators(actionCreators, useDispatch())

    return (
        <div className="TableHolder">
            <table>
                <thead>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Fuel</th>
                    <th>Engine power</th>
                    <th>Trailer hitch</th>
                    <th>Tire size</th>
                    <th className="modify">Modify</th>
                </thead>
                <tbody>
                    {carList.map(car =>
                        <tr key={car.id}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.fuel}</td>
                            <td>{car.power} kW</td>
                            <td><div className="icon"><img className="icon-image" src={car.trailerHitch ? checkmark : notchecked} alt="yes" /></div></td>
                            <td className="tires-field">
                                <section id={`input-${car.id}`} className="tire-input">
                                    <TireInput car={car} />
                                </section>
                                {car.tires?.map(tire => <section>
                                    {tire}
                                    <button className="tires-btn tires-btn--remove" onClick={() => {
                                        let tiresField = car.tires
                                        tiresField = tiresField.filter(x => x !== tire)
                                        setTireSize({ car: car.id, tires: tiresField })
                                    }}>X</button>
                                </section>)}
                                <button className="tires-btn" onClick={() => {
                                    let inputForm = document.getElementById(`input-${car.id}`)
                                    if (inputForm) inputForm.style.display = "flex"
                                }}>Add tire size</button>
                            </td>
                            <td>
                                <div className="modify__field">
                                    <section className="half">
                                        <Link className="crud" to={`/edit/${car.id}`}><img className="crud--src" src={edit} alt="Edit car" /><p>edit&nbsp;</p></Link>
                                    </section>
                                    <section className="half">
                                        <button className="crud" onClick={() => sellTheCar(car.id)}><img className="crud--src" src={trashcan} alt="Delete car" /><p>delete</p></button>
                                    </section>
                                </div>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default CarList