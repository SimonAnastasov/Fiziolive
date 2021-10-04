import Main from '../landing/main'
import Dots from '../landing/dots'

import { useSelector } from "react-redux"

const Landing = () => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[massages.current]
    const bg = massage.img

    return (
        <div className="landing" style={{backgroundImage: `url(${bg})`}}>
            <Main/>
            <Dots/>
        </div>
    )
}

export default Landing
