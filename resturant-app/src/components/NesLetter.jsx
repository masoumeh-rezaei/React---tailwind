import bgImg from '../assets/rounded-black-.png'
export default function NewaLetter(){
    const backgroundStyle={
        backgroundImage:`url(${bgImg})`,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',
        height:'100%',
        width:'100%',
    }
    return(
        <div className='bg-primary1 text-white' style={backgroundStyle}>
            <div className='container m-auto bg-black/60 sm:bg-transparent py-10'>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    <div className='space-y-4 text-center sm:text-left'>
                        {/*text section*/}
                        <h1
                         data-aos='fade-up' 
                        className='text-2xl sm:text-3xl font-semibold text-white/90'>Ready To Get Started</h1>
                        <p  data-aos='fade-up' data-aos-delay='200' >Lorem ipsum dolor sit amet  elit. Quaerat, accusamus!</p>
                    </div >
                    {/*input section*/}
                    <div
                     data-aos='fade-up' data-aos-delay='400'
                    className='text-center sm:text-left'>
                    <input type="text" 
                    placeholder='Enter your Email'
                    className='bg-white max-w-[400px] px-4 py-2 rounded-l-md ring-0 focus:outline-0 text-black' />
                    <button className='bg-white text-primary1 px-4 py-2 rounded-r-md cursor-pointer'>
                        <span className='text-sm uppercase font-semibold'>Get Started</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}