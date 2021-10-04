export const INCREMENT_MASSAGE_CURRENT = 'INCREMENT_MASSAGE_CURRENT'
export const DECREMENT_MASSAGE_CURRENT = 'DECREMENT_MASSAGE_CURRENT'
export const SET_MASSAGE_CURRENT = 'SET_MASSAGE_CURRENT'

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