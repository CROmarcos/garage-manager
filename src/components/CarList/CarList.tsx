import { useSelector, useDispatch } from "react-redux"
import { State } from '../../state/reducer'
import ICars from "../../interface/ICars"
import './CarList.scss'
import checkmark from '../../images/checkmark.svg'
import notchecked from '../../images/not.png'
import trashcan from '../../images/trashcan.png'
import * as actionCreators from '../../state/actionCreators'
import { bindActionCreators } from "redux"

const CarList = () => {
    let carList: ICars["cars"][] = useSelector((state: State) => state.reducer)
    const { sellTheCar } = bindActionCreators(actionCreators, useDispatch())

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
                </thead>
                <tbody>
                    {carList.map(car =>
                        <tr key={car.id}>
                            <td>
                                <section className="half">
                                    {car.make}
                                </section>
                                <section className="half">
                                    <button className="crud" onClick={() => sellTheCar(car.id)}><img className="crud--src" src={trashcan} alt="Delete car" /></button>
                                </section>
                            </td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.fuel}</td>
                            <td>{car.power} kW</td>
                            <td><div className="icon"><img className="icon-image" src={car.trailerHitch ? checkmark : notchecked} alt="yes" /></div></td>
                            <td>{car.tires.map(tire => <section>{tire}</section>)}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default CarList