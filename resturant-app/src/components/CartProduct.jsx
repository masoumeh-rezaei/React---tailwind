import { useContext } from "react";
import { getProductData } from "./data";
import { CartContex } from "./Contex/CartContex";
export default function CartProduct ({id,quantity}){
    const productData = getProductData(id)
    const cart = useContext(CartContex)
    return(
       <div className="">
         <div className="w-auto h-auto  border rounded-md border-violet-400 bg-light-blue m-1 ">
            <img src={productData.img} alt="" className="w-auto h-auto scale-80 bg-violet-200 rounded-md" />
            <p>{productData.name}</p>
            <p>Amount : {quantity}</p>
            <p>Price :$ {quantity * productData.price}</p>
            <button className=" px-2 border rounded-md border-violet-400 mb-1" onClick={()=> cart.deleteFromCart(id)}>Delete</button>
        </div>
       </div>
    )
}