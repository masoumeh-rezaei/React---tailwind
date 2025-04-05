import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer(){
    const FooterLinks=[
        {
            id:1,
            title:'Home',
            link:'/#'
        },
        {
            id:2,
            title:'About',
            link:'/#'
        },
        {
            id:3,
            title:'Contact',
            link:'/#'
        },
        {
            id:4,
            title:'Blog',
            link:'/#'
        },

    ]
    return(
        <>
            <div>
                <div className="container grid md:grid-cols-3 pb-20 pt-5 " id="information">
                    <div className="py-8 px-4">
                        <div className="flex">
                            <p className="text-3xl">MoonEat</p>
                            <small>Dig In</small>
                        </div>
                        <div className="space-y-5">
                            <p className="pt-4 opacity-60">
                                Cozy Vibes , Unforgettable Moments your perfect Espresso Escape 
                            </p>
                            <div>
                                <button className="primary-btn">
                                    Visit Youtube channel
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*footer Links*/}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-5">Important Links</h1>
                            <ul className="space-y-5">
                                {FooterLinks.map((link)=>(
                                    <li key={link.id}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/*second cols link*/}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-5">Quik Links</h1>
                            <ul className="space-y-5">
                                {FooterLinks.map((link)=>(
                                    <li key={link.id}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/*company address*/}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-semibold sm:text-left mb-5">Address</h1>
                        <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaFacebook className="text-3xl  hover:text-violet-800 duration-300"/>
                                </a>
                                <a href="#">
                                    <FaInstagram className="text-3xl  hover:text-violet-800 duration-300"/>
                                </a>
                                <a href="#">
                                    <FaWhatsapp className="text-3xl  hover:text-violet-800 duration-300"/>
                                </a>
                        </div>
                        </div>
                    </div>
                </div>
                {/*copyright section*/}
                <div className="bg-gray-200">
                    <div className="text-xs md:text-sm container m-auto p-4 flex justify-between">
                        <p>@2024 All rights done by Masoumeh</p>
                        <div  className="flex justify-center items-center gap-3">
                            <a href="#">privacy</a>
                            <a href="#">Accessibility</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}