export const SET_SCROLLED = 'SET_SCROLLED'
export const INCREMENT_MASSAGE_CURRENT = 'INCREMENT_MASSAGE_CURRENT'
export const DECREMENT_MASSAGE_CURRENT = 'DECREMENT_MASSAGE_CURRENT'
export const SET_MASSAGE_CURRENT = 'SET_MASSAGE_CURRENT'

export const INCREMENT_CARDS_CURRENT = 'INCREMENT_CARDS_CURRENT'
export const DECREMENT_CARDS_CURRENT = 'DECREMENT_CARDS_CURRENT'

export const CHANGE_CONTACT_WAY = 'CHANGE_CONTACT_WAY'

export const setScrolled = (scrolled) => {
    return {
        type: SET_SCROLLED,
        payload: scrolled
    }    
}

export const incrementMassageCurrent = () => {
    return {
        type: INCREMENT_MASSAGE_CURRENT
    }
}

export const decrementMassageCurrent = () => {
    return {
        type: DECREMENT_MASSAGE_CURRENT
    }
}

export const setMassageCurrent = (i) => {
    return {
        type: SET_MASSAGE_CURRENT,
        payload: i
    }
}

export const incrementCardsCurrent = () => {
    return {
        type: INCREMENT_CARDS_CURRENT
    }
}

export const decrementCardsCurrent = () => {
    return {
        type: DECREMENT_CARDS_CURRENT
    }
}

export const changeContactWay = (way) => {
    return {
        type: CHANGE_CONTACT_WAY,
        payload: way
    }
}