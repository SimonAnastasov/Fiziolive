import Image from 'next/image'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScrolled } from '../../redux/actions';

const Header = () => {
    const massages = useSelector(state => state.massages)

    const dispatch = useDispatch()

    const bgColor = massages.scrolled ? '#FFE6CB' : '#c4c4c466'
    const color = massages.scrolled ? 'black' : 'white'
    const shadowClass = massages.scrolled ? 'shadow' : ''
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                dispatch(setScrolled(false))

                document.getElementsByClassName('landing')[0].style.transition = 'none'
                document.getElementsByClassName('landing')[0].style.opacity = '1'
            }
            else if (window.scrollY > 0) {
                dispatch(setScrolled(true))

                const landingOpacity = 1 - (window.scrollY / window.innerHeight)
                document.getElementsByClassName('landing')[0].style.transition = 'none'
                document.getElementsByClassName('landing')[0].style.opacity = landingOpacity
            }
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

        const extra = (elm === 'contact') ? 20 : 0

        const vh = window.innerHeight * 0.01
        const scroll = rect.top + extra - bodyRect.top - 15*vh

        window.scroll({
            top: scroll,
            behavior: 'smooth'
        })
    }

    return (
        <div className={`header ${shadowClass}`} style={{backgroundColor: bgColor, color: color}}>
            <div className="left">
                <Image onClick={() => setScroll('landing')} className="clickable" width="60" height="60" src="/media/logo.png"/>
                <p onClick={() => setScroll('landing')} className="clickable underline">Fiziolive</p>
            </div>
            <div className="right">
                <p onClick={() => setScroll('landing')} className="clickable underline">Дома</p>
                <p onClick={() => setScroll('aboutUs')} className="clickable underline">За Нас</p>
                <p onClick={() => setScroll('massages')} className="clickable underline">Масажи</p>
                <p onClick={() => setScroll('contact')} className="clickable underline">Контакт</p>
            </div>
        </div>
    )
}

export default Header
