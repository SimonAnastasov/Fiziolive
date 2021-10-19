import { useSelector, useDispatch } from "react-redux"
import { decrementShowMoreCurrent, incrementShowMoreCurrent, setLastLookedAt, setShowMoreCurrent, toggleShowMore } from "../../redux/actions"

const ShowMore = () => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[massages.showMoreCurrent]

    const dispatch = useDispatch()

    const dots = massages.massages.map((m, i) => {
        const active = i === massages.showMoreCurrent ? 'active' : ''
        return (
            <div onClick={() => dispatch(setShowMoreCurrent(i))} key={`dotKey${i}`} className={`dot clickable ${active}`}></div>
        )
    })

    function setScroll(elm) {
        const bodyRect = document.body.getBoundingClientRect()

        const element = document.getElementsByClassName(elm)[0]
        const rect = element.getBoundingClientRect()

        const extra = (elm === 'contact') ? 20 : 0

        const vh = window.innerHeight * 0.01
        const scroll = rect.top + extra - bodyRect.top - 15*vh

        window.scroll({
            top: scroll,
            behavior: 'smooth'
        })
    }

    function showMoreMassages() {
        dispatch(toggleShowMore(false))

        setScroll('massages')
    }

    function action() {
        dispatch(setLastLookedAt(massages.showMoreCurrent))
        dispatch(toggleShowMore(false))
        setScroll('contact')
    }

    return (
        <div className="showMore">
            <div className="showMoreContainer shadow">
                <i onClick={() => dispatch(toggleShowMore(false))} className="clickable fas fa-close"></i>
                <p className="title">{massage.title}</p>
                <div className="mainContainer">
                    <div className="left">
                        <div className="up">
                            <p className="explanation">{massage.explanation}</p>
                        </div>
                        <div className="down">
                            <p className="price">Цена: {massage.price}мкд</p>
                            <button onClick={() => action()}>Закажи Термин</button>
                        </div>
                    </div>
                    <div className="right" style={{backgroundImage: `url('${massage.cardImg}')`}}>

                    </div>
                </div>
                <div className="dots">
                    <i onClick={() => dispatch(decrementShowMoreCurrent())} className="clickable far fa-arrow-alt-circle-left"></i>
                    {dots}
                    <i onClick={() => dispatch(incrementShowMoreCurrent())} className="clickable far fa-arrow-alt-circle-right"></i>
                </div>
                <div className="options">
                    <p onClick={showMoreMassages} className="clickable">Разгледај други масажи</p>
                    <p onClick={() => dispatch(toggleShowMore(false))} className="clickable">Затвори</p>
                </div>
            </div>
        </div>
    )
}

export default ShowMore
