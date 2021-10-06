import Main from '../landing/Main'
import Dots from '../landing/Dots'

import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { incrementMassageCurrent } from '../../redux/actions'

const Landing = () => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[massages.current]
    const bg = massage.img

    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(incrementMassageCurrent())
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="landing" style={{backgroundImage: `url(${bg})`}}>
            <Main/>
            <Dots/>
            <div className="explore">
                <p>Истражи Повеќе</p>
                <i onClick={() => {}} className="clickable far fa-arrow-alt-circle-down"></i>
            </div>
        </div>
    )
}

export default Landing
