const initalState = []

const deleteItem = (a, index) => {
    let array = [...a]
    array.splice(index, 1)
    return array;
}

const inc = (a, index) => {
    let array = [...a]
    array[index].qty += 1;
    return array;
}

const dec = (a, index) => {
    let array = [...a]
    if(array[index].qty > 1){
        array[index].qty -= 1;
    }
    return array;
}

const addtocart = (state=initalState, action) => {
    switch (action.type) {
        case 'add_to_cart':
            let item_added = false;
            state.forEach(item => {
                if(item.id === action.payload.id){
                    item_added = true;
                }    
            })
            if(item_added === false){
                return state.concat(action.payload);
            }else{
                return state;
            }
        case 'remove_from_cart':
            let index = state.indexOf(action.payload);
            return deleteItem(state, index);
        case 'increment':
            let i = state.indexOf(action.payload);
            state = inc(state, i); 
            return state;
        case 'decrement':
            let x = state.indexOf(action.payload);
            state = dec(state, x);
            return state;
        default:
            return state;
    }
}
export default addtocart;