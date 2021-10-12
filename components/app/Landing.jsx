import Main from '../landing/Main'
import Dots from '../landing/Dots'

import Image from 'next/image'

import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { incrementMassageCurrentAuto } from '../../redux/actions'

const Landing = () => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[massages.current]
    const bg = massage.img

    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(incrementMassageCurrentAuto())
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [massages])

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

    const allImages = massages.massages.map((m, i) => {
        return (
            <Image
                src={m.img}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority="true"
                className={i === massages.current ? 'img active' : 'img'}
                key={`imgKey${i}`}
            />
        )
    })

    return (
        <div className="landing">
            {allImages}
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
