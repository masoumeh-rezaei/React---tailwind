import { createContext, useState } from "react";
import { getProductData } from "../data";


export const CartContex = createContext({
    items : [],
    getProductQuantity : ()=> {},
    addItemToCart : ()=> {},
    removeItemFromCart : ()=> {},
    deleteFromCart : ()=> {},
    getTotalAmount : ()=> {},
})

export function CartProvider ({children}){
    const [cartProduct,setCartProduct]=useState([])


function getProductQuantity(id){
    const quantity = cartProduct.find((product)=> product.id === id )?.quantity;

    if(quantity === undefined){
        return 0
    }
    return quantity
}

function addItemToCart(id){
    const quantity = getProductQuantity(id)
    console.log('jdsb')
    if(quantity === 0){
        setCartProduct([...cartProduct,{id : id , quantity : 1}])
    }else{
        setCartProduct(
            cartProduct.map((product)=>
            product.id === id ? {...product, quantity : product.quantity + 1}: product
            )
        )
    }
}

function deleteFromCart(id){
    setCartProduct((cartProduct)=>
    cartProduct.filter((product)=>{
        return product.id != id
    })
    )
}

function removeItemFromCart(id){
    const quantity = getProductQuantity(id)

    if(quantity === 1){
        deleteFromCart(id)
    }else{
        setCartProduct(
            cartProduct.map((product)=>
            product.id === id ? {...product, quantity : product.quantity - 1}:product
            )
        )
    }
}
function getTotalAmount(){
    let totalAmount = 0;

    cartProduct.map((item)=>{
        const productData = getProductData(item.id)

        totalAmount += productData.price * item.quantity
    })
    return totalAmount;

}



    const ContextValue ={
items:cartProduct,
getProductQuantity,
addItemToCart,
removeItemFromCart,
deleteFromCart,
getTotalAmount,
    }
    return(
        <CartContex.Provider value={ContextValue}>{children}</CartContex.Provider>
    )
}