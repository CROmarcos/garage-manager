import { Link } from "react-router-dom"
import carKey from '../../images/car_key.png'
import IButtons from "../../interface/IButtons"
import './LinkButton.scss'

const LinkButton = ({ src, alt, description }: IButtons) => {
    return (
        <div className='Link'>
            <Link to={src}>
                <img className='Link-image' src={carKey} alt={alt} />
                <label className='Link-description'>{description}</label>
            </Link>
        </div >
    )
}

export default LinkButton