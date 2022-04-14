import CarList from "../components/CarList/CarList"
import PageTitle from "../components/PageTitle/PageTitle"

const GarageList = () => {
    return (
        <div className="Page">
            <PageTitle title="My cars" />
            <CarList />
        </div>
    )
}

export default GarageList