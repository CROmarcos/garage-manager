import { Link } from "react-router-dom"
import carKey from '../../images/car_key.png'
import ILinks from "../../interface/ILinks"
import './LinkToPage.scss'

const LinkToPage = ({ url, alt, description }: ILinks) => {
    return (
        <div className='Link'>
            <Link to={url}>
                <img className='Link-image' src={carKey} alt={alt} />
                <label className='Link-description'>{description}</label>
            </Link>
        </div >
    )
}

export default LinkToPage