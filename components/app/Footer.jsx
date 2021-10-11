import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScrolled } from '../../redux/actions';

const Footer = () => {
    const massages = useSelector(state => state.massages)

    const dispatch = useDispatch()

    const bgColor = massages.scrolled ? '#FFE6CB' : '#c4c4c466'
    const color = massages.scrolled ? 'black' : 'white'
    const shadowClass = massages.scrolled ? 'shadow' : ''
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) dispatch(setScrolled(false))
            else if (window.scrollY > 0) dispatch(setScrolled(true))
        };
    
        window.addEventListener("scroll", handleScroll)

        return () => {
          window.removeEventListener("scroll", handleScroll)
        };
    }, []);

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

    return (
        <div className={`footer ${shadowClass}`} style={{backgroundColor: bgColor, color: color}}>
            <div className="clickable" onClick={() => setScroll('landing')}>
                <p>Дома</p>
                <i className="fas fa-home"></i>
            </div>
            <div className="clickable" onClick={() => setScroll('aboutUs')}>
                <p>За Нас</p>
                <i className="fas fa-address-card"></i>
            </div> 
            <div className="clickable" onClick={() => setScroll('massages')}>
                <p>Масажи</p>
                <i className="fas fa-praying-hands"></i>
            </div>
            <div className="clickable" onClick={() => setScroll('contact')}>
                <p>Контакт</p>
                <i className="fas fa-phone-square"></i>
            </div>   
        </div>
    )
}

export default Footer
