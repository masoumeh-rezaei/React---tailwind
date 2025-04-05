
import { CartContex } from './Contex/CartContex';
import { useContext } from 'react';




export default function OurMenue({product}){
    const cart = useContext(CartContex)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(productQuantity)
    
    
    
    
  
      
    
    
    return(
        <>
        
                {/*slider section*/}
                <div  data-aos='zoom-in' >
                    
                       
                                <div className='my-8  ' id='menue'>
                                    <div className='flex flex-col gap-4 px-6 py-6 mx-4 rounded-xl'>
                                        {/*img section*/}
                                        <div className='mb-1 flex justify-center'>
                                            <img src={product.img}  
                                            className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1'/>
                                        </div>
                                        {/*text content section*/}
                                        <div className='flex flex-col items-center gap-4 space-y-3'>
                                            <div className=' text-center'>
                                                <h1 className='text-xl '>{product.name}</h1>
                                                <p className='text-2xl font-semibold'><span className='text-2xl allura-regular'>Only </span>
                                                ${product.price}
                                                </p>
                                               { productQuantity > 0 ? (
                                                    <>
                                                    <div className='flex justify-between w-50 mt-2'>
                                                        <p>Amount : {productQuantity}</p>
                                                        <span>
                                                            <div>
                                                                <button className='focus:outline-0 px-2 py-1 border rounded-md m-1 mt-0  hover:scale-105 '
                                                                onClick={()=> cart.addItemToCart(product.id)}
                                                                >+</button>
                                                                <button className='focus:outline-0 px-2 py-1 border rounded-md m-1 mt-0 hover:scale-105 '
                                                                onClick={()=> cart.removeItemFromCart(product.id)}
                                                                >-</button>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div>
                                                    <button className='px-3 py-1 border border-violet-400 rounded-md  text-violet-300 cursor-pointer mt-1' 
                                                    onClick={() => cart.deleteFromCart(product.id)}>Delete From Cart</button>
                                                    </div>
                                                    </>
                                                ):(
                                                    <button className='px-3 py-1 border border-violet-400 rounded-md  text-violet-300 cursor-pointer mt-1' 
                                                    onClick={() => cart.addItemToCart(product.id)}>Add To Cart</button>
                                                )
                                               }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                    
                </div>
                </>
    )
}



