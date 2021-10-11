import { useEffect } from 'react'

import Image from 'next/image'

const Welcome = () => {
    useEffect(() => {
        let i = 1
        const int = setInterval(() => {
            if (document.getElementsByClassName(`p${i}`)[0] !== undefined) {
                document.getElementsByClassName(`p${i}`)[0].style.opacity = '1'
                i++
            }
            else {
                document.getElementsByClassName('welcome')[0].style.top = '-120vh'
                document.getElementsByClassName('welcome')[0].style.opacity = '0'

                document.getElementsByClassName('landing')[0].style.opacity = '1'
                document.querySelector('body').style.overflowY = 'scroll'
                clearInterval(int)
            }
        }, 200)
    }, [])

    return (
        <div className="welcome">
            <div className="container">
                <Image width="80" height="80" src="/media/logo.png"/>
                <p className="p1">ДОБРЕДОЈДОВТЕ</p>
                <p className="p2">Разгледајте го нашиот широк избор на масажи и одлучете која најмногу ќе ви одговара.</p>
                <p className="p3">Ве очекуваме,</p>
                <p className="p4">Затоа што секој заслужува да ужива ♥</p>
            </div>
        </div>
    )
}

export default Welcome
