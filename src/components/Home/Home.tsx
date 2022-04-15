import './Home.scss'
import carKey from '../../images/car_key.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='Home'>
            <div className='ActionIcon'>
                <Link to="/mycars">
                    <img className='ActionIcon-image' src={carKey} alt='Open garage' />
                    <label className='ActionIcon-description'>See my cars</label>
                </Link>
            </div>
        </div>
    )
}

export default Home