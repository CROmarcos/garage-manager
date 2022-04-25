import CarList from "../components/CarList/CarList"
import LinkToPage from "../components/LinkToPage/LinkToPage"
import PageTitle from "../components/PageTitle/PageTitle"

const GarageList = () => {
    return (
        <div className="Page">
            <PageTitle title="My cars" />
            <CarList />
            <LinkToPage url='/newcar' alt='Add new car' description='Add new car' />
        </div>
    )
}

export default GarageList