import './Home.scss'
import LinkToPage from '../LinkToPage/LinkToPage'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home-Navigation'>
                <LinkToPage url='/mycars' alt='Open garage' description='Look at my cars' />
                <LinkToPage url='/newcar' alt='Add new car' description='Add new car' />
            </div>
        </div>
    )
}

export default Home