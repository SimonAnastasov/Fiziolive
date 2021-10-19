import { useSelector } from "react-redux"

const Contact = () => {
    const massages = useSelector(state => state.massages)
    const massage = massages.massages[massages.lastLookedAt]

    return (
        <div className="contact">
            <div className="titleAndHr">
                <p>Контакт</p>
                <hr/>
            </div>
            <div className="shadow bigContainer">
                <p>Последно разгледувавте: <span>{massage.title.toLowerCase()} - {massage.price}мкд</span>. Контактирајте нè и закажете термин.</p>
                <div className="container">
                    <div>
                        <a href="tel:075-789-781"><p className="clickable"><i className="fas fa-phone-square phone"></i> 075 789 781</p></a>
                        <a href="mailto:anilkadriov5@gmail.com"><p className="clickable"><i className="fas fa-envelope-square mail"></i> anilkadriov5@gmail.com</p></a>
                        <a href="https://www.facebook.com/FizioLiveTherapy" target="_blank"><p className="clickable"><i className="fab fa-facebook-square"></i> <span className="facebook">Fiziolive</span></p></a>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.5787292230056!2d22.509695829227336!3d41.886083998701366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUzJzA5LjkiTiAyMsKwMzAnMzYuOSJF!5e0!3m2!1sen!2smk!4v1634198960195!5m2!1sen!2smk" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
