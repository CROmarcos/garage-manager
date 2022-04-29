import CarInput from "../components/CarInput/CarInput"
import PageTitle from "../components/PageTitle/PageTitle"

const NewCar = () => {
    return (
        <div className="page">
            <PageTitle title="Add new car" />
            <div className="page__body">
                <CarInput />
            </div>
        </div>
    )
}

export default NewCar