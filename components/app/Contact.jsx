import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux'
import { changeContactWay } from '../../redux/actions'

const Contact = () => {
    const massages = useSelector(state => state.massages)

    const dispatch = useDispatch()

    return (
        <div className="contact">
            <div className="titleAndHr">
                <p>Контакт</p>
                <hr/>
            </div>
            <div className="shadow container">
                <div>
                    <p>Телефон:<br/>071 888 334</p>
                    <p>Меил:<br/>anil@gmail.com</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.5787292230056!2d22.509695829227336!3d41.886083998701366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUzJzA5LjkiTiAyMsKwMzAnMzYuOSJF!5e0!3m2!1sen!2smk!4v1634198960195!5m2!1sen!2smk" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact
