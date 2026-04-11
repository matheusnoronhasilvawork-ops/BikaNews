import bikanews from "../assets/bikanews.png";
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full px-5 h-fit py-12 bg-[#020617] relative flex items-center justify-center gap-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]"></div>

            <div className="relative w-350 h-full flex flex-col items-center justify-center gap-12">
                <div className='flex flex-row max-xl:flex-col max-xl:gap-8 w-full h-full text-white'>
                    <div className='flex flex-2 flex-col'>
                        <div className='bg-white w-30 h-15'>
                            <img src={bikanews} alt="Logo" className='object-cover w-full h-full' />
                        </div>
                        <h3 className='pr-30'>Seu portal de informação confiável e atualizada 24 horas por dia. Notícias rápidas, ponto a ponto.</h3>
                    </div>
                    <div className='flex flex-2 flex-col gap-2.5'>
                        <div className='flex flex-col w-fit gap-0.5'>
                            <h3 className='text-[#fa6732]'>Seções</h3>
                            <div className='w-full h-0.5 bg-[#fa6732] rounded-2xl' />
                        </div>
                        <ul className=''>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/politica" className=''>Política</a>
                            </li>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/economia" className=''>Economia</a>
                            </li>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/tecnologia" className=''>Tecnologia</a>
                            </li>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/esportes" className=''>Esportes</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-2 flex-col gap-2.5'>
                        <div className='flex flex-col w-fit gap-0.5'>
                            <h3 className='text-[#fa6732]'>Instituição</h3>
                            <div className='w-full h-0.5 bg-[#fa6732] rounded-2xl' />
                        </div>
                        <ul>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/politica" className='hover:text-[#fa6732]'>Sobre nós</a>
                            </li>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2 '>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/economia" className='hover:text-[#fa6732]'>Contato</a>
                            </li>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/tecnologia" className='hover:text-[#fa6732]'>Política de Privacidade</a>
                            </li>
                            <li className='flex flex-row items-center hover:text-[#fa6732] hover:ml-2'>
                                <FaArrowRight className='h-full w-2 mr-2' />
                                <a href="/esportes" className='hover:text-[#fa6732]'>Termos de uso</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-1 flex-col gap-2.5'>
                        <div className='flex flex-col w-fit gap-0.5'>
                            <h3 className='text-[#fa6732]'>Redes sociais</h3>
                            <div className='w-full h-0.5 bg-[#fa6732] rounded-2xl' />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <div className='bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-120 hover:bg-[#fa6732] transition duration-300 cursor-pointer'>
                                <FaFacebook className='w-full h-full' />
                            </div>
                            <div className='bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-120 hover:bg-[#fa6732] transition duration-300 cursor-pointer'>
                                <FaTwitter className='w-full h-full' />
                            </div>
                            <div className='bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-120 hover:bg-[#fa6732] transition duration-300 cursor-pointer'>
                                <FaInstagram className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3.5 w-full items-center justify-center'>
                    <div className='w-[clamp(200px,92vw,1200px)] h-0.5 bg-gray-600'></div>
                    <h4 className='text-gray-500 text-center'>© 2026 Bika News. Todos os direitos reservados. • Notícias Rápidas • Ponto a Ponto</h4>
                </div>
            </div>
        </footer>
    )
}