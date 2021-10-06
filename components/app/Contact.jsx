import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux'
import { changeContactWay } from '../../redux/actions'

const Contact = () => {
    const massages = useSelector(state => state.massages)

    const dispatch = useDispatch()

    const phone = (
        <div className="phone">
            <p>071 888 334</p>
        </div>
    )
    const email = (
        <div className="email">
            <p>email@email.com</p>
        </div>
    )
    const message = (
        <div className="message">
            <p>Message</p>
        </div>
    )

    const class1 = massages.contact === 'phone' ? 'active' : ''
    const class2 = massages.contact === 'email' ? 'active' : ''
    const class3 = massages.contact === 'message' ? 'active' : ''

    return (
        <div className="contact">
            <div className="titleAndHr">
                <p>Контакт</p>
                <hr/>
            </div>
            <div className="shadow container">
                <p>Избери начин на контактирање:</p>                
                <div className="ways">
                    <p className={`clickable ${class1}`} onClick={() => dispatch(changeContactWay('phone'))}>Телефон</p>
                    <p className={`clickable ${class2}`} onClick={() => dispatch(changeContactWay('email'))}>Е-маил</p>
                    <p className={`clickable ${class3}`} onClick={() => dispatch(changeContactWay('message'))}>Порака</p>
                </div>
                <div className="triangles">
                    <Image className={class1} width="50" height="30" src="/media/triangle.png"/>
                    <Image className={class2} width="50" height="30" src="/media/triangle.png"/>
                    <Image className={class3} width="50" height="30" src="/media/triangle.png"/>
                </div>
                <div className="chosen">
                    {massages.contact === 'phone' ? phone : massages.contact === 'email' ? email : message}
                </div>
            </div>
        </div>
    )
}

export default Contact
