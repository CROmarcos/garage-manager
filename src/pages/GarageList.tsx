import CarList from "../components/CarList/CarList"
import LinkToPage from "../components/LinkToPage/LinkToPage"
import PageTitle from "../components/PageTitle/PageTitle"

const GarageList = () => {
    return (
        <div className="page">
            <PageTitle title="My cars" />
            <div className="page__body">
                <CarList />
                <LinkToPage url='/newcar' alt='Add new car' description='Add new car' />
            </div>
        </div>
    )
}

export default GarageList