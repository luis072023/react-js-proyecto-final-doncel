import { createContext, useContext, useState } from "react";

export const CartContext= createContext ([])

export const useCartContext = () => useContext (CartContext)


export const CartContextProvider = ({children})=>{
const[cartList, setCartList]= useState ([])

const addProduct=(newProduct) =>{

    const index = cartList.findIndex (product => product.id === newProduct.id)

    if(index!== -1){
        cartList[index].quantity += newProduct.quantity
        setCartList ([...cartList])
    }else{
        setCartList([
        ...cartList,
        newProduct
    ])
    }
}
const totalQuantity= ()=> cartList.reduce((count,objProduct)=>count+=  objProduct.quantity,0)

const totalPrice= () => cartList.reduce((count, objProduct) => count += (objProduct.quantity * objProduct.price), 0)


const deleteCart= ()=>{
    setCartList([])
}

const deleteItem = id =>setCartList(cartList.filter (product => product.id !== id))
    return(
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            totalQuantity,
            totalPrice,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )

}
