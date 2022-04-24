import { Link } from 'react-router-dom'
import './BackToHome.scss'
import backArrow from '../../images/back.png'

const BackToHome = () => {
    return(
        <Link className='link' to="/">
            <img className='link__image' src={backArrow} alt='Back to home' />
        </Link>
    )
}

export default BackToHome