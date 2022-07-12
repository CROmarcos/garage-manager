import CarList from "../components/CarList/CarList"
import LinkButton from "../components/LinkButton/LinkButton"
import PageTitle from "../components/PageTitle/PageTitle"

const GarageList = () => {
    return (
        <div className="page">
            <PageTitle title="My cars" />
            <div className="page__body">
                <CarList />
                <LinkButton src='/newcar' alt='Add new car' description='Add new car' />
            </div>
        </div>
    )
}

export default GarageList