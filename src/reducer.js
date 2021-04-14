
export const initialState = {
    basket: [],
    user: null,
    retailer: [],
    shop: [],
    cbasket: []
};

export const getBasketTotal = (cbasket) => 
    cbasket?.reduce((amount,item) => item.price + amount,0); 


const reducer = (state,action) => {
    switch(action.type) {
        case "ADD_TO_SHOP":
            return {
                ...state,
                shop: action.products
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        case "ADD_TO_RETAILER":
                return{
                    ...state,
                    retailer: [action.shop]
                }
            
            
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "ADD_TO_CBASKET":
            return {
                ...state,
                cbasket: [...state.cbasket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn("Cannot find id");
            }

            return {...state, basket: newBasket};

        case "REMOVE_FROM_CBASKET":
            let newcBasket = [...state.cbasket];
            const cindex = state.cbasket.findIndex((basketItem) => basketItem.id === action.id);

            if(cindex >= 0){
                newcBasket.splice(cindex,1);
            }else{
                console.warn("Cannot find id");
            }

            return {...state, cbasket: newcBasket};
            
        default: 
        return state;
            
        
    }
}

export default reducer;