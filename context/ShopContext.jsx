import {createContext } from "react";
import { products } from "../src/assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'रु'
    const deliveryfee = 100;
    const value = {
        products, currency, deliveryfee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;