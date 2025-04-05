import HeroImg from '../assets/rounded-black-.png'
export default function Hero(){
    return(
        <div className="bg-light-blue flex justify-center items-center min-h-[550px] sm:min-h-[600px]" id='home'>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/*Text contenct section */}
                    <div className="flex justify-center items-center text-center flex-col gap-4 pt-12 sm:pt-0 sm:text-left">
                        <h1 className="text-9xl allura-regular lg:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-violet-600"
                        data-aos='zoom-out'
                         data-aos-delay='200'
                        >
                            Rice
                            <span className="font-sans text-dark1 text-xl ">Bowl</span>
                        </h1>
                        <p className="text-sm text-dark1 font-sans lg:px-20 sm:p-0 "
                        data-aos='fade' data-aos-delay='300'
                        >Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Adipisci ipsa amet error
                             quaerat voluptatem maxime assumenda fugiat 
                            liquid quis aut nihil veritatis excepturi repudiandae qui vel possimus 
                               unde vero ducimus voluptatem saepe quidem officiis odio! Optio voluptates saepe porro cumque earum.

                        </p>
                        <div data-aos='fade' data-aos-delay='400' data-aos-offset='0'>
                            <button className={'primary-btn'}>View More</button>
                        </div>
                    </div>
                    {/*picture section */}
                    <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 '
                    data-aos='zoom-in' data-aos-delay='500'
                    >
                        <img src={HeroImg} 
                        className='max-h-[450px] rounded-full mx-auto sm:scale-125 shadow-1'/>
                        <div className='bg-violet-500 text-white p-2 rounded-xl absolute top-20 left-10 hidden md:block'>
                            <h1>Fresh Food</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}