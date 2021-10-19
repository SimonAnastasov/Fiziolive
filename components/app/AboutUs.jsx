import Image from 'next/image'

const AboutUs = () => {
    let status = 'отворено'
    let color = 'green'

    function setOpened() {
        let isOpened = true

        const date = new Date()

        const day = date.getDay()

        const time = date.getHours() + 1

        if (day >= 1 && day <= 5) {
            if ((time >= 11 && time <= 14) || (time >= 16 && time <= 20)) {

            }
            else {
                isOpened = false
            }
        }
        else if (day === 6) {
            if (time >= 10 && time <= 15) {

            }
            else {
                isOpened = false
            }
        }
        else {
            isOpened = false
        }

        if (!isOpened) {
            status = 'затворено'
            color = 'red'
        }
    }
    setOpened()

    return (
        <div className="aboutUs">
            <div className="titleAndHr">
                <p>За нас</p>
                <hr/>
            </div>
            <div className="bigContainer">
                <div className="columnContainer">
                    <div>
                        <p>Работни часови:  </p>
                        <p style={{color: color}}>(моментално {status})</p>
                    </div>
                    <div>
                        <p>Понеделник - Петок:</p>
                        <p>11:00 - 14:00</p>
                        <p>16:00 - 20:00</p>
                    </div>
                    <div>
                        <p>Сабота:</p>
                        <p>10:00 - 15:00</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <Image width="120" height="120" src="/media/anil.png"/>
                    <p>Др. Анил Кадриов е физиотерапевт со долгогодишно искуство во киропрактиката.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
