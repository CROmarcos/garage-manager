import './PageTitle.scss'
import BackToHome from '../BackToHome/BackToHome'

interface IProps {
    title: string
}

const PageTitle = ({ title }: IProps) => {
    return (
        <div className="title">
            <h1 className="title-text">{title}</h1>
            <BackToHome />
        </div>
    )
}

export default PageTitle