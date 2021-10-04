import Image from 'next/image'

const Welcome = () => {
    return (
        <div className="welcome">
            <Image width="80" height="80" src="/media/logo.png"/>
            <p>ДОБРЕДОЈДОВТЕ</p>
            <p>Разгледајте го нашиот широк избор на масажи и одлучете која најмногу ќе ви одговара.</p>
            <p>Ве очекуваме,</p>
            <p>Затоа што секој заслужува да ужива ♥</p>
        </div>
    )
}

export default Welcome
