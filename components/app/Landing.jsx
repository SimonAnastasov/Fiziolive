import Main from '../landing/Main'
import Dots from '../landing/Dots'

import Image from 'next/image'

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

    function setScroll(elm) {
        const bodyRect = document.body.getBoundingClientRect()

        const element = document.getElementsByClassName(elm)[0]
        const rect = element.getBoundingClientRect()

        const vh = window.innerHeight * 0.01
        const scroll = rect.top - bodyRect.top - 15*vh

        window.scroll({
            top: scroll,
            behavior: 'smooth'
        })
    }

    // style={{backgroundImage: `url(${bg})`}}

    return (
        <div className="landing">
            <Image
                src={bg}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <Main/>
            <Dots/>
            <div className="explore">
                <p>Истражи Повеќе</p>
                <i onClick={() => setScroll('aboutUs')} className="clickable far fa-arrow-alt-circle-down"></i>
            </div>
        </div>
    )
}

export default Landing
