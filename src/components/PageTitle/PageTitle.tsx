import './PageTitle.scss'

interface IProps {
    title: string
}

const PageTitle = ({ title }: IProps) => {
    return (
        <div className="title">
            <h1 className="title-text">{title}</h1>
        </div>
    )
}

export default PageTitle