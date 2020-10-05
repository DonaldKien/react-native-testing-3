const initialState = {
    allProducts: []
}

number = 0;

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            const newProduct = {
                id: { value: action.create.id.value },
                name: { value: action.create.name.value },
                image: { value: action.create.image.value },
                description: { value: action.create.description.value },
                price: { value: action.create.price.value },
                units: { value: action.create.units.value },
                quantity: { value: action.create.quantity.value }
            };
            const allProducts = [...state.allProducts, newProduct];
            return {allProducts: allProducts};
        case 'DELETE_PRODUCT':
            return {
                allProducts: state.allProducts.filter((product) => product.id !== action.itemId )
            }
        default:
            return state;
    }
}

export default reducer;