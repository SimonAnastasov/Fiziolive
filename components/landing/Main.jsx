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

    function decrement() {
        dispatch(decrementMassageCurrent())
    }

    function increment() {
        dispatch(incrementMassageCurrent())
    }

    return (
        <div className="main">
            <i onClick={() => decrement()} className="clickable far fa-arrow-alt-circle-left"></i>
            <div className="container">
                <p>{title}</p>
                <p>{explanation}</p>
                <button onClick={() => showMore(massages.current)}>Дознај Повеќе...</button>
            </div>
            <i onClick={() => increment()} className="clickable far fa-arrow-alt-circle-right"></i>
        </div>
    )
}

export default Main
