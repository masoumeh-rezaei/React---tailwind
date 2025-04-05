import BannerImg from '../assets/pngtree-grilled--round.png'
export default function Banner(){
    return(
        <div>
            <div className="container m-auto min-h-[620px] py-12 sm:py-0 flex justify-center items-center" id='about'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/*Image section*/}
                    <div className='flex justify-center items-center '
                     data-aos='zoom-in'>
                    <img src={BannerImg} className='max-w-[450px] w-full mx-auto shadow-1' />
                    </div>
                    {/*Text content Section*/}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 sm:justify-center px-4'>
                        <p className='uppercase text-3xl font-semibold text-dark1'
                        data-aos='fade-up'
                        >About</p>
                        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-violet-800 allura-regular text-7xl  font-bold '
                        data-aos='fade-up' data-aos-delay='200'
                        >Fresh bowl</h1>
                        <p 
                         data-aos='fade-up' data-aos-delay='300'
                        className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora inventore officiis soluta aspernatur. Quibusdam at ducimus itaque, nesciunt saepe a nostrum amet incidunt rem quidem ex est obcaecati odit aliquid consequatur maxime molestias! Distinctio iusto dolore aspernatur aliquam aperiam, ipsam consequatur veritatis maiores quam minima nulla dignissimos minus ducimus est hic, maxime molestias sunt voluptatum! Facilis corporis dolores optio?</p>
                        <div  data-aos='fade-up' data-aos-delay='400'>
                            <button className='primary-btn'>Viw More</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}