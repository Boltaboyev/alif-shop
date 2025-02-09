import {createContext, useReducer} from "react"

const ShopContext = createContext({})

const ShopContextProvider = ({children}) => {
    const initialState = {
        shop: JSON.parse(localStorage.getItem("shop")) || [],
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                if (
                    state.shop.find((value) => value.id === action.product.id)
                ) {
                    let newDate = state.shop.map((value) =>
                        value.id === action.product.id
                            ? {...value, counter: value.counter + 1}
                            : value
                    )
                    localStorage.setItem("shop", JSON.stringify(newDate))
                    return {...state, shop: newDate}
                }
                let newDate = {
                    ...state,
                    shop: [...state.shop, {...action.product, counter: 1}],
                }
                localStorage.setItem("shop", JSON.stringify(newDate.shop))
                return newDate

            case "delete":
                let deletedData = state.shop.filter(
                    (value) => value.id !== action.deletedId
                )
                localStorage.setItem("shop", JSON.stringify(deletedData))
                return {...state, shop: deletedData}
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ShopContext.Provider value={{state, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}

export {ShopContextProvider, ShopContext}
