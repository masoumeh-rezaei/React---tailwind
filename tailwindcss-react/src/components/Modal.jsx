import {useState,useEffect} from 'react';
import bgImg from '../assets/pngtree-tea-milk-tea-blue-.jpg'
import img from '../assets/pngtreecart.png'
export default function Alart({
                                  type,
                                  message,
                                  delay=false,
                                  delayTime=4000,
                                    onclick                                
                                }){
    const [showAlart,setShowAlart] = useState(true)
    const closeAlart =(e)=>{
        e.target.parentElement.parentElement.classList.add('fade-in')

        setTimeout(()=>{
            setShowAlart(false)
        },500)
    }
    useEffect(()=>{
        delay &&
        setTimeout(()=>{
            setShowAlart(false)
        },delayTime)
    })
     const backgroundStyle={
                backgroundImage:`url(${bgImg})`,
                backgroundSize:'cover',
                backgroundRepeat:'repeat',
                backgroundPosition:'center',
                height:'100%',
                width:'360px',
                
            }
            

    return(
        showAlart && (
       <div >
         <div  className=' bg-violet-200/95 top-0  w-96 h-[1230px]  absolute z-50 'data-aos='fade-right' data-aos-once='true' >
         <img src={img} alt="" className='w-40 absolute' />
            <h2 className='text-center text-5xl pt-2 pb-0 flex justify-center items-center allura-regular ml-20'>Cart</h2>
            <div className={'h-auto w-auto top-4  border-none   rounded-2xl relative justify-center items-center m-5 mt-20  text-center clear-both '} >
                <span> {message}</span>
                
            </div>
            <button className='absolute top-1 right-2 bg-light-blue w-10 h-10 rounded-full '  onClick={onclick}>X</button>
        </div>
       </div>

        )
    )
}