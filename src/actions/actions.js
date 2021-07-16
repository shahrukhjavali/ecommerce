export const add_to_cart = (product) => {
    return{
        type:'add_to_cart',
        payload:product
    }
}

export const remove_from_cart = (product) => {
    return{
        type:'remove_from_cart',
        payload:product
    }
}

export const increment = (product) => {
    return {
        type:'increment',
        payload:product
    }
}

export const decrement = (product) => {
    return {
        type:'decrement',
        payload:product
    }
}