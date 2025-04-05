
import OurMenue from "./OurMenue";
import Slider from 'react-slick'
import { MenueData } from "./data";
export default function Shop(){
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide:2,
                },

            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                },  
            }
        ]
      };

   return(
    
       <>
        <div className='bg-primary1 text-white py-8'>
            <div className="container m-auto">
                {/*header section*/}
                <div className='mb-4  space-y-5 sm:mb-0'>
                    <h1 className='text-6xl text-center font-bold allura-regular'
                     data-aos='fade-up' 
                    > Our Menue</h1>
                    <div
                     data-aos='fade-up' data-aos-delay='200'
                    className='text-center sm:max-w-sm mx-auto text-xs opacity-75'>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Enim facere nisi totam minus impedit? Doloremque 
                        dunt pariatur. Dolor quasi sequi doloribus autem laborum incidunt 
                         
                    </div>
                </div>
        
       <div >
        <div >
            <Slider {...settings}>
       {MenueData.map((item)=>(
            <div key={item.id}>
                <OurMenue product={item}/>
            </div>
        ))}
        </Slider>
        </div>
       </div>
        </div>
        </div>
       
        </>
   
   )
}