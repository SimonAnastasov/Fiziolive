import { useSelector } from "react-redux"

const Card = ({i}) => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[i]
    const title = massage.title
    const explanation = massage.explanation.substr(0, 89) + '...'
    const bg = massage.cardImg

    return (
        <div className="card shadow">
            <div className="img" style={{backgroundImage: `url(${bg})`}}></div>
            <div className="content">
                <p>{title}</p>
                <p>{explanation}</p>
                <button>Дознај Повеќе...</button>
            </div>
        </div>
    )
}

export default Card
