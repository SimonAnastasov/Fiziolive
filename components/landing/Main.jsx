import { useSelector, useDispatch } from "react-redux"
import { decrementMassageCurrent, incrementMassageCurrent, setShowMoreCurrent, toggleShowMore } from "../../redux/actions"

const Main = () => {
    const massages = useSelector(state => state.massages)

    const massage = massages.massages[massages.current]
    const title = massage.title
    const explanation = massage.explanation.substr(0, 89) + '...'

    const dispatch = useDispatch()

    function showMore(i) {
        dispatch(toggleShowMore(true))
        dispatch(setShowMoreCurrent(i))
    }

    return (
        <div className="main">
            <i onClick={() => dispatch(decrementMassageCurrent())} className="clickable far fa-arrow-alt-circle-left"></i>
            <div className="container">
                <p>{title}</p>
                <p>{explanation}</p>
                <button onClick={() => showMore(massages.current)}>Дознај Повеќе...</button>
            </div>
            <i onClick={() => dispatch(incrementMassageCurrent())} className="clickable far fa-arrow-alt-circle-right"></i>
        </div>
    )
}

export default Main
