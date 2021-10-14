import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="titleAndHr">
                <p>Др. Анил Кадриов</p>
                <hr/>
            </div>
            <div className="container">
                <Image width="160" height="160" src="/media/anil.png"/>
                <p>Др. Анил Кадриов е физиотерапевт.</p>
            </div>
        </div>
    )
}

export default AboutUs
