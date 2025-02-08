import { useContext, useState } from "react"
import { FaBars} from "react-icons/fa"
import { GiShoppingCart } from "react-icons/gi";
import { CartContex } from "./Contex/CartContex";
import Alart from "./Modal";
import CartProduct from "./CartProduct";


export default function Navbar(){
   
    const cart= useContext(CartContex)
    const productsCount = cart.items.reduce((sum,product)=> sum + product.quantity,0)
    const [open,setOpen]=useState(false)
    const openHandler =() =>{
        setOpen(!open)
    }
    const [showModal,setShowModal]=useState(false)
    const handleShow = ()=>{
        setShowModal(true)
    }
    const handleClose = ()=>{
        setShowModal(false)
    }
    const menues=[
        {
            id:1,
            name : 'Home',
            link: '#'
        },
        {
            id:2,
            name : 'Food',
            link: '#'
        },
        {
            id:3,
            name : 'Fast Food',
            link: '#'
        },
        {
            id:4,
            name : 'ContactUs',
            link: '#'
        },
        {
            id:5,
            name : 'Information',
            link: '#'
        },
    ]
    return(
        <div className="bg-light-blue ">
            <div className="container m-auto flex justify-between items-center py-2 px-2">
                {/*logo */}
                <div className="flex " data-aos='fade-down' data-aos-once='true'>
                    <p className="text-3xl">MoonEat</p>
                    <small>Dig In</small>

                    <div className="ml-10 text-2xl text-primary1 mt-2 flex border border-violet-400 border-r-0 relative " onClick={handleShow}>
                        <span className="w-11 h-8 flex justify-start items-center pl-1" ><GiShoppingCart/></span>
                        <span className="border border-violet-400 rounded-full w-8 h-8 flex justify-center items-center absolute left-7 outline-1 text-sm">{productsCount}</span>
                    </div>
                </div>
                
                

              
                 
                 {/*responsive*/}
                <div>
                <div className="lg:hidden ">
                    <button onClick={openHandler}><FaBars className="text-3xl  absolute top-5 right-10"/></button>
                 </div>
                 {open && (
                    <div className="absolute:">
                        <ul className="space-y-3 z-50 rounded-md shadow-md bg-blue-50 absolute right-10 top-25 p-2">
                            {menues.map((menue)=>(
                                <li key={menue.id}>
                                    <a href={menue.link} className="text-xl p-2 inline-block hover:bg-blue-100 hover:text-blue-900 w-full rounded-sm ">{menue.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                 )
                 }
                </div>
                {/*Link Section */}
                <div data-aos='fade-down' data-aos-once='true' data-aos-delay='300'>
                    <ul className="hidden lg:flex justify-between">
                        {menues.map(menue =>(
                            <li key={menue.id} >
                                <a href={menue.link} className="px-4 hover:text-blue-900  hover:transition-all duration-300">
                                    {menue.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            {
                showModal && <Alart message={
                    productsCount > 0 ? (
                        <div className="grid grid-cols-2">
                           {cart.items.map((item)=>(
                            <CartProduct key={item.id} id={item.id} quantity={item.quantity} />
                           ))}

                           <h3 className=" bg-light-blue w-auto h-10 p-2 rounded-md">Total Amount :$ {cart.getTotalAmount()}</h3>
                        </div>
                    ):(
                        <><h3 className="text-black">Your Cart Is Empty</h3> </>
                    )
                } onclick={handleClose}/>
            }
            
        </div>
    )
}