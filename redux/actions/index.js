export const SET_SCROLLED = 'SET_SCROLLED'
export const INCREMENT_MASSAGE_CURRENT = 'INCREMENT_MASSAGE_CURRENT'
export const INCREMENT_MASSAGE_CURRENT_AUTO = 'INCREMENT_MASSAGE_CURRENT_AUTO'
export const DECREMENT_MASSAGE_CURRENT = 'DECREMENT_MASSAGE_CURRENT'
export const SET_MASSAGE_CURRENT = 'SET_MASSAGE_CURRENT'

export const INCREMENT_CARDS_CURRENT = 'INCREMENT_CARDS_CURRENT'
export const DECREMENT_CARDS_CURRENT = 'DECREMENT_CARDS_CURRENT'
export const SET_CARDS_CURRENT = 'SET_CARDS_CURRENT'

export const CHANGE_CONTACT_WAY = 'CHANGE_CONTACT_WAY'

export const CHANGE_CARDS_LIMIT = 'CHANGE_CARDS_LIMIT'

export const TOGGLE_SHOW_MORE = 'TOGGLE_SHOW_MORE'
export const SET_SHOW_MORE_CURRENT = 'SET_SHOW_MORE_CURRENT'
export const INCREMENT_SHOW_MORE_CURRENT = 'INCREMENT_SHOW_MORE_CURRENT'
export const DECREMENT_SHOW_MORE_CURRENT = 'DECREMENT_SHOW_MORE_CURRENT'

export const SET_LAST_LOOKED_AT = 'SET_LAST_LOOKED_AT'

export const setShowMoreCurrent = (i) => {
    return {
        type: SET_SHOW_MORE_CURRENT,
        payload: i
    }
}

export const incrementShowMoreCurrent = () => {
    return {
        type: INCREMENT_SHOW_MORE_CURRENT,
    }
}

export const decrementShowMoreCurrent = () => {
    return {
        type: DECREMENT_SHOW_MORE_CURRENT,
    }
}

export const toggleShowMore = (val) => {
    return {
        type: TOGGLE_SHOW_MORE,
        payload: val
    }
}

export const setScrolled = (scrolled) => {
    return {
        type: SET_SCROLLED,
        payload: scrolled
    }    
}

export const incrementMassageCurrentAuto = () => {
    return {
        type: INCREMENT_MASSAGE_CURRENT_AUTO
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

export const setCardsCurrent = (i) => {
    return {
        type: SET_CARDS_CURRENT,
        payload: i
    }
}

export const changeContactWay = (way) => {
    return {
        type: CHANGE_CONTACT_WAY,
        payload: way
    }
}

export const changeCardsLimit = (limit) => {
    return {
        type: CHANGE_CARDS_LIMIT,
        payload: limit
    }
}

export const setLastLookedAt = (val) => {
    return {
        type: SET_LAST_LOOKED_AT,
        payload: val
    }
}