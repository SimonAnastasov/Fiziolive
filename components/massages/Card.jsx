import { useSelector, useDispatch } from "react-redux"
import { setShowMoreCurrent, toggleShowMore } from "../../redux/actions"

const Card = ({i}) => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[i]
    const title = massage.title
    const explanation = massage.explanation.substr(0, 89) + '...'
    const bg = massage.cardImg

    const dispatch = useDispatch()

    function showMore(i) {
        dispatch(toggleShowMore(true))
        dispatch(setShowMoreCurrent(i))
    }

    return (
        <div className="card shadow">
            <div className="img" style={{backgroundImage: `url(${bg})`}}></div>
            <div className="content">
                <p>{title}</p>
                <p>{explanation}</p>
                <button onClick={() => showMore(i)}>Разгледај</button>
            </div>
        </div>
    )
}

export default Card
