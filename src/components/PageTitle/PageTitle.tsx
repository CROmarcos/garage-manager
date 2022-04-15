import './PageTitle.scss'
import backArrow from '../../images/back.png'
import { Link } from 'react-router-dom'

interface IProps {
    title: string
}

const PageTitle = ({ title }: IProps) => {
    return (
        <div className="title">
            <h1 className="title-text">{title}</h1>
            <Link to="/">
                <img className='Action' src={backArrow} alt='Back to home' />
            </Link>
        </div>
    )
}

export default PageTitle