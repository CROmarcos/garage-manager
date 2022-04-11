import { useSelector } from "react-redux"
import { State } from '../../state/reducer'
import ICars from "../../interface/ICars"
import './CarList.scss'

const CarList = () => {
    let carList: ICars["cars"][] = useSelector((state: State) => state.reducer)
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
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.fuel}</td>
                            <td>{car.power} kW</td>
                            <td>{car.trailerHitch ? "+" : "-"}</td>
                            <td>{car.tires.map(tire => <section>{tire}</section>)}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default CarList