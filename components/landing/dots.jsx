import { useSelector, useDispatch } from "react-redux"
import { setMassageCurrent } from "../../redux/actions"

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
            {dots}
        </div>
    )
}

export default Dots
