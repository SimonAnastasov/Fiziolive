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

    return (
        <div className={`header ${shadowClass}`} style={{backgroundColor: bgColor, color: color}}>
            <div className="left">
                <Image className="clickable" width="60" height="60" src="/media/logo.png"/>
                <p className="clickable underline">Fiziolive</p>
            </div>
            <div className="right">
                <p className="clickable underline">Масажи</p>
                <p className="clickable underline">За Нас</p>
                <p className="clickable underline">Контакт</p>
                <p className="clickable underline">Закажи</p>
            </div>
        </div>
    )
}

export default Header
