import CarList from "../components/CarList/CarList"
import PageTitle from "../components/PageTitle/PageTitle"

const HomePage = () => {
    return (
        <div className="Page">
            <PageTitle title="My cars"/>
            <CarList />
        </div>
    )
}

export default HomePage