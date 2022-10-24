



export let checkElBeforeAddToBasket = (item, state, action, changeText) => {
    if (state.length != 0) {
        if (state.some((element) => element.id == item.id)) {
            return null
        }
        else {
            action(item)
        }
    }
    else if (state.length === 0) {
        action(item)
    }
}

export let checkElBeforeAddToFavourites = (item, state, action) => {
    if (state.length != 0) {
        if (state.some((element) => element.id == item.id)) {
            return null
        }
        else {
            action(item)
        }
    }
    else if (state.length === 0) {
        action(item)
    }
}