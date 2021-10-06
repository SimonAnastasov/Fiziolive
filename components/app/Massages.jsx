import Card from "../massages/Card"

import { useDispatch, useSelector } from "react-redux"
import { decrementCardsCurrent, incrementCardsCurrent } from "../../redux/actions"

const Massages = () => {
    const massages = useSelector(state => state.massages)
    
    let added = 0
    let limit = 4
    let cards1 = massages.massages.map((m, i) => {
        if (i >= massages.cardsCurrent && i < massages.cardsCurrent+4) {
            added++
            return (
                <Card key={`card${i}`} i={i}/>
            )
        }
    })
    let cards2
    if (added < limit) {
        cards2 = massages.massages.map((m, i) => {
            if (i < limit-added) {
                return (
                    <Card key={`card${i}`} i={i}/>
                )
            }
        })
    }

    const dispatch = useDispatch()

    return (
        <div className="massages">
            <div className="titleAndHr">
                <p>Масажи</p>
                <hr/>
            </div>
            <div className="container">
                <i onClick={() => dispatch(decrementCardsCurrent())} className="clickable far fa-arrow-alt-circle-left"></i>
                <div className="cards">
                    {cards1}
                    {cards2}
                </div>
                <i onClick={() => dispatch(incrementCardsCurrent())} className="clickable far fa-arrow-alt-circle-right"></i>
            </div>
        </div>
    )
}

export default Massages
