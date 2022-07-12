import './Home.scss'
import LinkButton from '../LinkButton/LinkButton'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home-Navigation'>
                <LinkButton src='/mycars' alt='Open garage' description='Look at my cars' />
                <LinkButton src='/newcar' alt='Add new car' description='Add new car' />
            </div>
        </div>
    )
}

export default Home