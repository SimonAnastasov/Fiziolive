import Card from "../massages/Card"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeCardsLimit, decrementCardsCurrent, incrementCardsCurrent, setCardsCurrent } from "../../redux/actions"

const Massages = () => {
    const massages = useSelector(state => state.massages)

    const dispatch = useDispatch()
    
    let added = 0
    let arrAdded = []
    let limit = massages.cardsLimit

    useEffect(() => {
        const mediaBig = window.matchMedia('(max-width: 1100px)')
        const mediaMedium = window.matchMedia('(max-width: 700px)')
        if (mediaMedium.matches) {
            dispatch(changeCardsLimit(1))
        }
        else if (mediaBig.matches) {
            dispatch(changeCardsLimit(2))
        }
    }, [])

    let cards1 = massages.massages.map((m, i) => {
        if (i >= massages.cardsCurrent && i < massages.cardsCurrent+limit) {
            added++
            arrAdded.push(i)
            return (
                <Card key={`card${i}`} i={i}/>
            )
        }
    })
    let cards2
    if (added < limit) {
        cards2 = massages.massages.map((m, i) => {
            if (i < limit-added) {
                arrAdded.push(i)
                return (
                    <Card key={`card${i}`} i={i}/>
                )
            }
        })
    }

    const dots = massages.massages.map((m, i) => {
        const active = i === massages.cardsCurrent ? 'active' : ''
        return (
            <div onClick={() => dispatch(setCardsCurrent(i))} key={`key${i}`} className={`dot clickable ${active}`}></div>
        )
    })

    return (
        <div className="massages">
            <div className="titleAndHr">
                <p>Избор на масажи</p>
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
            <div className="dots">
                <i onClick={() => dispatch(decrementCardsCurrent())} className="clickable far fa-arrow-alt-circle-left"></i>
                {dots}
                <i onClick={() => dispatch(incrementCardsCurrent())} className="clickable far fa-arrow-alt-circle-right"></i>
            </div>
        </div>
    )
}

export default Massages
