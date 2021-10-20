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

    let start = 0, end = 0, minDiff = 30

    useEffect(() => {
        const mediaBig = window.matchMedia('(max-width: 1100px)')
        const mediaMedium = window.matchMedia('(max-width: 700px)')
        if (mediaMedium.matches) {
            dispatch(changeCardsLimit(1))
        }
        else if (mediaBig.matches) {
            dispatch(changeCardsLimit(2))
        }

        document.getElementsByClassName('massages')[0].addEventListener('touchstart', e => {
            if (e.touches[0] !== undefined) {
                start = e.touches[0].screenX
            }
            else start = 0
        })

        document.getElementsByClassName('massages')[0].addEventListener('touchend', e => {
            let diff = end - start

            if (e.changedTouches[0] !== undefined) {
                end = e.changedTouches[0].screenX
                diff = end - start
            }
            else {
                end = 0
                diff = 0
            }

            if (Math.abs(diff) <= minDiff) {

            }
            else if (diff < 0) {
                dispatch(incrementCardsCurrent())
            }
            else {
                dispatch(decrementCardsCurrent())
            }
        })
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
