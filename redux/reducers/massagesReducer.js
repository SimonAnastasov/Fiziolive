import { CHANGE_CARDS_LIMIT, CHANGE_CONTACT_WAY, DECREMENT_CARDS_CURRENT, DECREMENT_MASSAGE_CURRENT, INCREMENT_CARDS_CURRENT, INCREMENT_MASSAGE_CURRENT, SET_CARDS_CURRENT, SET_MASSAGE_CURRENT, SET_SCROLLED } from "../actions"

const massages = {
    scrolled: false,
    contact: 'phone',
    current: 0,
    cardsCurrent: 0,
    cardsLimit: 4,
    massages: [
        {
            title: 'Класична Масажа',
            explanation: 'Класичната масажа ги ублажува стресот и напнатоста, ја подобрува циркулацијата, му помага на телото полесно да ги исфрли токсините од кожата и добро влијае врз работата на дигестивниот тракт. Масажата ја ослободува напнатоста и болката во мускулите, влева самодоверба и го поттикнува расположението. Истовремено враќа дел од изгубената енергија, која најчесто се троши поради напнатост и создава чувство на благосостојба.',
            img: './media/landing/klasicna.png',
            // img: './media/landing/1klasicna.jpg',
            cardImg: './media/cards/klasicna.png'
        },
        {
            title: 'Релакс Масажа',
            explanation: 'Секојдневието ја исцрпува нашата енергија и виталност. Масажата на нервниот систем делува смирувачки, ја подобрува циркулацијата, секрецијата на различни жлезди, го подобрува тонусот на кожата и мускулите и дава чувство на опуштање и хармонија.',
            img: './media/landing/relaks.png',
            // img: './media/landing/1relaks.jpg',
            cardImg: './media/cards/relaks.png'
        },
        {
            title: 'Парцијална Масажа',
            explanation: 'Намалувањето на стресот и целосното опуштање на дел од телото ја зголемува флексибилноста, овозможува длабока релаксација и дава чувство на леснотија. Кај парцијалната масажа се масираат само одредени делови на телото како што се: масажа на грб, раце, абдомен, глава или лице и масажа на нозе во зависност од барањата на клиентот.',
            img: './media/landing/parcijalna.png',
            // img: './media/landing/1parcijalna.jpg',
            cardImg: './media/cards/parcijalna.png'
        },
        {
            title: 'Ароматична Масажа',
            explanation: 'Ароматичната масажа користи ароматични масла кои имаат способност да влијаат на духовните состојби, но и на физичките потреби на секој поединец. Оваа масажа дава можност на сопствена кожа да ги испробате моментите на длабоко опуштање на духот и телото, а исто така делува и на емотивните промени, на намалување на стресот, опуштање на целото тело, како и на ослободување од воздржаните чувства, што помага за надминување на негативната енергија.',
            img: './media/landing/aromaticna.png',
            // img: './media/landing/1aromaticna.jpg',
            cardImg: './media/cards/aromaticna.png'
        },
        {
            title: 'Антистрес Масажа',
            explanation: 'Стресот и забрзаниот начин на живот може да ја зголеми мускулната напнатост, посебно во вратот, бидејќи емоциите се потиснуваат со стегање, на мускулите. Масажата добро влијае на телото, духот, умот и емоциите. Ја подобрува циркулацијата и снабдувањето со кислород до органите, а телото на тој начин се релаксира и ослободува од стресот.',
            img: './media/landing/antistres.png',
            // img: './media/landing/1antistres.jpg',
            cardImg: './media/cards/antistres.png'
        },
        {
            title: 'Антицелулитна Масажа',
            explanation: 'Антицелулитната масажа е масажа со посебна техника на работа со која се овозможува ослободување на заробениот (наталожен) целулит и помага во негово брзо елиминирање. Рачната антицелулитна масажа е доста ефективен третман со сигурни и долготрајни резултати. Со нејзина помош се подобруваат крвната и лимфната циркулацијата и целулитот се намалува или исчезнува за одреден период.',
            img: './media/landing/anticelulitna.png',
            // img: './media/landing/1anticelulitna.jpg',
            cardImg: './media/cards/anticelulitna.png'
        },
        {
            title: 'Спортска Масажа',
            explanation: 'Може да се практикува пред и после спортска активност. Како дел од масажата се користат техники дизајнирани за зголемување на издржливоста и перформансите. Истата ги минимизира шансите за повреда, но и го намалува времето предвидено за закрепнување. Во корист е на сите оние кои практикуваат физички активности.',
            img: './media/landing/sportska.png',
            // img: './media/landing/1sportska.jpg',
            cardImg: './media/cards/sportska.png'
        },
    ]
}

const massagesReducer = (state = massages, action) => {
    switch(action.type) {
        case SET_SCROLLED:
            return {...state, scrolled: action.payload}
        case CHANGE_CONTACT_WAY:
            return {...state, contact: action.payload}
        case CHANGE_CARDS_LIMIT:
            return {...state, cardsLimit: action.payload}
        case INCREMENT_MASSAGE_CURRENT:
            return {...state, current: (state.current+1 >= state.massages.length) ? 0 : state.current+1}
        case DECREMENT_MASSAGE_CURRENT:
            return {...state, current: (state.current-1 < 0) ? state.massages.length-1 : state.current-1}
        case SET_MASSAGE_CURRENT: 
            return {...state, current: action.payload}
        case INCREMENT_CARDS_CURRENT:
            return {...state, cardsCurrent: (state.cardsCurrent+1 >= state.massages.length) ? 0 : state.cardsCurrent+1}
        case DECREMENT_CARDS_CURRENT:
            return {...state, cardsCurrent: (state.cardsCurrent-1 < 0) ? state.massages.length-1 : state.cardsCurrent-1}
        case SET_CARDS_CURRENT:
            return {...state, cardsCurrent: action.payload}
        default:
            return state
    }
}

export default massagesReducer