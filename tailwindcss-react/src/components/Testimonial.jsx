import Slider from 'react-slick'
export default function Testimonial(){
    const testimonialData=[
      
        {
            id:1,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/101',
        },
        {
            id:2,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/102',
        },
        {
            id:3,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/103',
        },
        {
            id:4,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/104',
        },
        {
            id:5,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/105',
        },
    ]

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
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
        <div className="py-10 mb-10">
            <div className="container m-auto">
                {/*Header section*/}
                <div>
                    <h1 className="text-6xl font-bold allura-regular text-center">Testimonial</h1>
                </div>
                
                {/*slider section*/}
                <div  data-aos='zoom-in' >
                    <Slider {...settings}>
                        {
                            testimonialData.map((item,id)=>(
                                <div className='my-6' key={id}>
                                    <div className='flex flex-col gap-4 shadow-lg py-8 mx-4 rounded-xl bg-gray-200/80 relative'>
                                        <div className='mb-4 px-3'>
                                            <img src={item.img} className='rounded-full w-20 h-20 ' />
                                        </div>
                                        {/*content section*/}
                                        <div>
                                            <div className='flex flex-col px-4'>
                                                <p className='text-xs font-bold text-gray-500'>{item.text}</p>
                                                <h1 className='text-xl font-bold text-black/80 allura-regular'>{item.name}</h1>
                                            </div>
                                        </div>
                                        <p className='absolute top-0 right-0 font-bold text-black/20 text-9xl font-serif'>
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </div>
    )
}