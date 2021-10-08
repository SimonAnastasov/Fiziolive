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
        <div className={`header ${shadowClass}`} style={{backgroundColor: bgColor, color: color}}>
            <div className="left">
                <Image onClick={() => setScroll('landing')} className="clickable" width="60" height="60" src="/media/logo.png"/>
                <p onClick={() => setScroll('landing')} className="clickable underline">Fiziolive</p>
            </div>
            <div className="right">
                <p onClick={() => setScroll('aboutUs')} className="clickable underline">За Нас</p>
                <p onClick={() => setScroll('massages')} className="clickable underline">Масажи</p>
                <p onClick={() => setScroll('contact')} className="clickable underline">Контакт</p>
                <p className="clickable underline">Закажи</p>
            </div>
        </div>
    )
}

export default Header
