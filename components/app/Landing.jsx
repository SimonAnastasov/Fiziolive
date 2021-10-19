import Main from '../landing/Main'
import Dots from '../landing/Dots'

import Image from 'next/image'

import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrementMassageCurrent, incrementMassageCurrent, incrementMassageCurrentAuto } from '../../redux/actions'

const Landing = () => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[massages.current]
    const bg = massage.img

    const dispatch = useDispatch()

    let start = 0, end = 0

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(incrementMassageCurrentAuto())
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [massages])

    useEffect(() => {
        window.addEventListener('touchstart', e => {
            if (e.touches[0] !== undefined) {
                start = e.touches[0].screenX
            }
            else start = 0
        })

        window.addEventListener('touchend', e => {
            let diff = end - start

            if (e.changedTouches[0] !== undefined) {
                end = e.changedTouches[0].screenX
                diff = end - start
            }
            else {
                end = 0
                diff = 0
            }

            if (diff === 0) {

            }
            else if (diff < 0) {
                dispatch(incrementMassageCurrent())
            }
            else {
                dispatch(decrementMassageCurrent())
            }
        })
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
