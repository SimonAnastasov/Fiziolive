import { useSelector, useDispatch } from "react-redux"
import { decrementMassageCurrent, incrementMassageCurrent, setMassageCurrent } from "../../redux/actions"

const Dots = () => {
    const massages = useSelector(state => state.massages)
    
    const dispatch = useDispatch()

    const dots = massages.massages.map((m, i) => {
        const active = i === massages.current ? 'active' : ''
        return (
            <div onClick={() => dispatch(setMassageCurrent(i))} key={`key${i}`} className={`dot clickable ${active}`}></div>
        )
    })

    return (
        <div className="dots">
            <i onClick={() => dispatch(decrementMassageCurrent())} className="clickable far fa-arrow-alt-circle-left"></i>
            {dots}
            <i onClick={() => dispatch(incrementMassageCurrent())} className="clickable far fa-arrow-alt-circle-right"></i>
        </div>
    )
}

export default Dots
