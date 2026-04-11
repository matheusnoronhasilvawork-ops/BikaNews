import './App.css'
import bikanews from './assets/bikanews.png'
import { Search, Menu, User, Clock, TrendingUp, Newspaper } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa'
import tajMahal from './assets/tajMahal.png'
import Header  from './components/header'

//w-[clamp(500px,80vw,1400px)]
//#fa6832
function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <Header />
      <main className='flex-1 flex flex-col items-center overflow-y-auto overflow-x-hidden gap-6 pb-44'>
        <div className='h-[clamp(200px,45vw,750px)] w-[clamp(500px,95vw,1400px)] overflow-hidden relative group rounded-2xl'>
          <img src={tajMahal} className='object-cover inset-0 h-full w-full group-hover:scale-110 transition-transform duration-500' />
          <div className='absolute inset-0 bg-linear-to-t from-black to-transparent w-full h-full'></div>
          <div className='h-full w-full inset-0 p-4 absolute z-10'>
            <div className='h-10 w-32 bg-blue-500 rounded-2xl flex justify-evenly items-center'>
              <div className='h-2 w-2 bg-white rounded-4xl'></div>
              <h2 className='font-bold text-white'>Economia</h2>
            </div>
            <div className='text-white absolute bottom-4 left-4 flex flex-col gap-4'>
              <h1 className='font-bold text-2xl group-hover:text-[#fa6832]'>Governo anuncia novo pacote de medidas econômicas para estimular crescimento</h1>
              <h2>Ministério da Economia divulga plano com incentivos fiscais e investimentos em infraestrutura que devem movimentar bilhões na economia.</h2>
              <div className='flex flex-row gap-2'>
                <Clock className='h-4 w-4' />
                <h3 className='text-xs'>Há 1 hora</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[clamp(500px,95vw,1400px)] h-auto flex flex-row max-xl:flex-col gap-12'>
          <div className='flex-2 flex flex-col gap-8'>
            <div className='flex flex-row border-b-2 border-[#fa6832] pb-2 items-center'>
              <div className='self-stretch w-2 bg-[#fa6832] rounded-4xl' />
              <h1 className='font-bold p-2 text-xl text-[#fa6832]'>Últimas notícias</h1>
            </div>
            <div className='grid grid-cols-2 w-full h-auto gap-6 flex-col max-[745px]:flex max-[745px]:flex-col'>
              <div className='flex flex-1 flex-col h-[clamp(200px,34vw,480px)] max-xl:min-h-120 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden group hover:cursor-pointer origin-top hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-y-[0.98] transition duration-500'>
                <div className='h-[45%] w-full max-[745px]:h-70 max-[745px]:mb-3'>
                  <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col flex-1 w-full px-6 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-medium group-hover:text-[#fa6832]'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col h-[clamp(200px,34vw,480px)] max-xl:min-h-120 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden group hover:cursor-pointer origin-top hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-y-[0.98] transition duration-500'>
                <div className='h-[45%] w-full max-[745px]:h-70 max-[745px]:mb-3'>
                  <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col flex-1 w-full px-6 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-medium group-hover:text-[#fa6832]'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col h-[clamp(200px,34vw,480px)] max-xl:min-h-120 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden group hover:cursor-pointer origin-top hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-y-[0.98] transition duration-500'>
                <div className='h-[45%] w-full max-[745px]:h-70 max-[745px]:mb-3'>
                  <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col flex-1 w-full px-6 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-medium group-hover:text-[#fa6832]'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col h-[clamp(200px,34vw,480px)] max-xl:min-h-120 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden group hover:cursor-pointer origin-top hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-y-[0.98] transition duration-500'>
                <div className='h-[45%] w-full max-[745px]:h-70 max-[745px]:mb-3'>
                  <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col flex-1 w-full px-6 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-medium group-hover:text-[#fa6832]'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col h-[clamp(200px,34vw,480px)] max-xl:min-h-120 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden group hover:cursor-pointer origin-top hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-y-[0.98] transition duration-500'>
                <div className='h-[45%] w-full max-[745px]:h-70 max-[745px]:mb-3'>
                  <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col flex-1 w-full px-6 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-medium group-hover:text-[#fa6832]'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col h-[clamp(200px,34vw,480px)] max-xl:min-h-120 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden group hover:cursor-pointer origin-top hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-y-[0.98] transition duration-500'>
                <div className='h-[45%] w-full max-[745px]:h-70 max-[745px]:mb-3'>
                  <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col flex-1 w-full px-6 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-medium group-hover:text-[#fa6832]'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-col h-fit gap-8'>
            <div className='w-full flex flex-col shadow-2xl bg-white pb-4 rounded-2xl px-10'>
              <div className='flex flex-row border-b-2 border-[#fa6832] pb-2 items-center'>
                <TrendingUp className='h-full w-8 text-[#fa6832]' />
                <h1 className='font-bold p-2 text-xl text-[#fa6832]'>Mais lidas</h1>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row group h-32 w-full items-center justify-around gap-5 group'>
                  <div className='flex flex-row gap-5 items-center'>
                    <h1 className='text-4xl font-bold text-[#fa67325d] group-hover:text-[#fa6732]'>01</h1>
                    <div className='flex flex-col gap-2'>
                      <h2 className='font-medium group-hover:text-[#fa6732]'>Pesquisa revela hábitos de bla bla bla bla...</h2>
                      <div className='flex flex-row gap-2 text-gray-600'>
                        <Clock className='h-4 w-4' />
                        <h3 className='text-xs'>Há 1 hora</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-25 min-w-25 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                  </div>
                </div>
                <div className='flex flex-row group h-32 w-full items-center justify-around gap-5 group'>
                  <div className='flex flex-row gap-5 items-center'>
                    <h1 className='text-4xl font-bold text-[#fa67325d] group-hover:text-[#fa6732]'>01</h1>
                    <div className='flex flex-col gap-2'>
                      <h2 className='font-medium group-hover:text-[#fa6732]'>Pesquisa revela hábitos de bla bla bla bla...</h2>
                      <div className='flex flex-row gap-2 text-gray-600'>
                        <Clock className='h-4 w-4' />
                        <h3 className='text-xs'>Há 1 hora</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-25 min-w-25 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                  </div>
                </div>
                <div className='flex flex-row group h-32 w-full items-center justify-around gap-5 group'>
                  <div className='flex flex-row gap-5 items-center'>
                    <h1 className='text-4xl font-bold text-[#fa67325d] group-hover:text-[#fa6732]'>01</h1>
                    <div className='flex flex-col gap-2'>
                      <h2 className='font-medium group-hover:text-[#fa6732]'>Pesquisa revela hábitos de bla bla bla bla...</h2>
                      <div className='flex flex-row gap-2 text-gray-600'>
                        <Clock className='h-4 w-4' />
                        <h3 className='text-xs'>Há 1 hora</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-25 min-w-25 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                  </div>
                </div>
                <div className='flex flex-row group h-32 w-full items-center justify-around gap-5 group'>
                  <div className='flex flex-row gap-5 items-center'>
                    <h1 className='text-4xl font-bold text-[#fa67325d] group-hover:text-[#fa6732]'>01</h1>
                    <div className='flex flex-col gap-2'>
                      <h2 className='font-medium group-hover:text-[#fa6732]'>Pesquisa revela hábitos de bla bla bla bla...</h2>
                      <div className='flex flex-row gap-2 text-gray-600'>
                        <Clock className='h-4 w-4' />
                        <h3 className='text-xs'>Há 1 hora</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-25 min-w-25 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                  </div>
                </div>
                <div className='flex flex-row group h-32 w-full items-center justify-around gap-5 group'>
                  <div className='flex flex-row gap-5 items-center'>
                    <h1 className='text-4xl font-bold text-[#fa67325d] group-hover:text-[#fa6732]'>01</h1>
                    <div className='flex flex-col gap-2'>
                      <h2 className='font-medium group-hover:text-[#fa6732]'>Pesquisa revela hábitos de bla bla bla bla...</h2>
                      <div className='flex flex-row gap-2 text-gray-600'>
                        <Clock className='h-4 w-4' />
                        <h3 className='text-xs'>Há 1 hora</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-25 min-w-25 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={tajMahal} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#fa6732] w-full flex flex-col gap-8 rounded-2xl py-7 px-12 h-fit'>
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex flex-row items-center self-start gap-4 w-fit'>
                  <Newspaper className='text-white h-6 w-6' />
                  <h1 className='text-white font-medium text-2xl'>Receba nossas notícias</h1>
                </div>
                <h2 className='text-white text-lg'>Inscreva-se para receber as principais notícias do dia diretamente no seu e-mail.</h2>
              </div>
              <div className='flex flex-col w-full gap-4'>
                <input type="email" name="" placeholder='seuemail@gmail.com' id="" className='outline-none w-full h-12 bg-white p-4 rounded-md' />
                <button className='w-full h-12 bg-white text-[#fa6732] rounded-md font-medium cursor-pointer text-lg'>Inscrever-se</button>
              </div>
            </div>
          </div>
        </div>
      </main>
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
    </div>
  );
}

export default App
