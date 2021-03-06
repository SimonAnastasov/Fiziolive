import { CHANGE_CARDS_LIMIT, CHANGE_CONTACT_WAY, DECREMENT_CARDS_CURRENT, DECREMENT_MASSAGE_CURRENT, DECREMENT_SHOW_MORE_CURRENT, INCREMENT_CARDS_CURRENT, INCREMENT_MASSAGE_CURRENT, INCREMENT_MASSAGE_CURRENT_AUTO, INCREMENT_SHOW_MORE_CURRENT, SET_CARDS_CURRENT, SET_LAST_LOOKED_AT, SET_MASSAGE_CURRENT, SET_SCROLLED, SET_SHOW_MORE_CURRENT, TOGGLE_SHOW_MORE } from "../actions"

const massages = {
    showMore: false,
    showMoreCurrent: 0,
    scrolled: false,
    contact: 'phone',
    current: 0,
    cardsCurrent: 0,
    cardsLimit: 4,
    lastLookedAt: 2,
    massages: [
        {
            title: 'Релакс Масажа',
            explanation: 'Секојдневието ја исцрпува нашата енергија и виталност. Масажата на нервниот систем делува смирувачки, ја подобрува циркулацијата, секрецијата на различни жлезди, го подобрува тонусот на кожата и мускулите и дава чувство на опуштање и хармонија.',
            price: 700,
            img: '/media/landing/1relaks.jpg',
            cardImg: '/media/landing/1relaks.jpg'
        },
        {
            title: 'Парцијална Масажа',
            explanation: 'Намалувањето на стресот и целосното опуштање на дел од телото ја зголемува флексибилноста, овозможува длабока релаксација и дава чувство на леснотија. Кај парцијалната масажа се масираат само одредени делови на телото како што се: масажа на грб, раце, абдомен, глава или лице и масажа на нозе во зависност од барањата на клиентот.',
            price: 800,
            img: '/media/landing/1parcijalna.jpg',
            cardImg: '/media/landing/1parcijalna.jpg'
        },
        {
            title: 'Класична Масажа',
            explanation: 'Класичната масажа ги ублажува стресот и напнатоста, ја подобрува циркулацијата, му помага на телото полесно да ги исфрли токсините од кожата и добро влијае врз работата на дигестивниот тракт. Масажата ја ослободува напнатоста и болката во мускулите, влева самодоверба и го поттикнува расположението. Истовремено враќа дел од изгубената енергија, која најчесто се троши поради напнатост и создава чувство на благосостојба.',
            price: 600,
            img: '/media/landing/1klasicna.jpg',
            cardImg: '/media/landing/1klasicna.jpg'
        },
        {
            title: 'Ароматична Масажа',
            explanation: 'Ароматичната масажа користи ароматични масла кои имаат способност да влијаат на духовните состојби, но и на физичките потреби на секој поединец. Оваа масажа дава можност на сопствена кожа да ги испробате моментите на длабоко опуштање на духот и телото, а исто така делува и на емотивните промени, на намалување на стресот, опуштање на целото тело, како и на ослободување од воздржаните чувства, што помага за надминување на негативната енергија.',
            price: 500,
            img: '/media/landing/1aromaticna.jpg',
            cardImg: '/media/landing/1aromaticna.jpg'
        },
        {
            title: 'Антистрес Масажа',
            explanation: 'Стресот и забрзаниот начин на живот може да ја зголеми мускулната напнатост, посебно во вратот, бидејќи емоциите се потиснуваат со стегање, на мускулите. Масажата добро влијае на телото, духот, умот и емоциите. Ја подобрува циркулацијата и снабдувањето со кислород до органите, а телото на тој начин се релаксира и ослободува од стресот.',
            price: 1000,
            img: '/media/landing/1antistres.jpg',
            cardImg: '/media/landing/1antistres.jpg'
        },
        {
            title: 'Антицелулитна Масажа',
            explanation: 'Антицелулитната масажа е масажа со посебна техника на работа со која се овозможува ослободување на заробениот (наталожен) целулит и помага во негово брзо елиминирање. Рачната антицелулитна масажа е доста ефективен третман со сигурни и долготрајни резултати. Со нејзина помош се подобруваат крвната и лимфната циркулацијата и целулитот се намалува или исчезнува за одреден период.',
            price: 650,
            img: '/media/landing/1anticelulitna.jpg',
            cardImg: '/media/landing/1anticelulitna.jpg'
        },
        {
            title: 'Спортска Масажа',
            explanation: 'Може да се практикува пред и после спортска активност. Како дел од масажата се користат техники дизајнирани за зголемување на издржливоста и перформансите. Истата ги минимизира шансите за повреда, но и го намалува времето предвидено за закрепнување. Во корист е на сите оние кои практикуваат физички активности.',
            price: 550,
            img: '/media/landing/1sportska.jpg',
            cardImg: '/media/landing/1sportska.jpg'
        },
    ]
}

const massagesReducer = (state = massages, action) => {
    switch(action.type) {
        case TOGGLE_SHOW_MORE:
            return {...state, showMore: action.payload}
        case INCREMENT_SHOW_MORE_CURRENT:
            return {...state, showMoreCurrent: (state.showMoreCurrent+1 >= state.massages.length) ? 0 : state.showMoreCurrent+1}
        case DECREMENT_SHOW_MORE_CURRENT:
            return {...state, showMoreCurrent: (state.showMoreCurrent-1 < 0) ? state.massages.length-1 : state.showMoreCurrent-1}
        case SET_SHOW_MORE_CURRENT:
            return {...state, showMoreCurrent: action.payload}
        case SET_SCROLLED:
            return {...state, scrolled: action.payload}
        case CHANGE_CONTACT_WAY:
            return {...state, contact: action.payload}
        case CHANGE_CARDS_LIMIT:
            return {...state, cardsLimit: action.payload}
        case INCREMENT_MASSAGE_CURRENT_AUTO:
            return {...state, current: (state.current+1 >= state.massages.length) ? 0 : state.current+1}
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
        case SET_LAST_LOOKED_AT:
            return {...state, lastLookedAt: action.payload}
        default:
            return state
    }
}

export default massagesReducer