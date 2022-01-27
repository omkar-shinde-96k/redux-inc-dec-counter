export const incrementby = (incBy) => {
    return {
        type: 'INCREMENTBY',
        payload: incBy
    }
}
export const decrementby = (incBy) => {
    return {
        type: 'DECREMENTBY',
        payload: incBy
    }
}

export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
} 