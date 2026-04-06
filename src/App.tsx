import './App.css'
import bikanews from './assets/bikanews.png'
import { Search, Bell, User, Clock } from 'lucide-react'
import tajMahal from './assets/tajMahal.png'

//#fa6832
function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4">

      <header className="w-full h-20 flex items-center justify-center border-b-3 border-gray-300">
        <div className="flex-1 h-full flex gap-8 items-center pl-40">
          <img src={bikanews} alt="logo" className="w-32 h-24" />
          <nav className="font-bold text-lg cursor-pointer">Inicio</nav>
          <nav className="font-bold text-lg cursor-pointer">Política</nav>
          <nav className="font-bold text-lg cursor-pointer">Economia</nav>
          <nav className="font-bold text-lg cursor-pointer">Esporte</nav>
          <nav className="font-bold text-lg cursor-pointer">Tecnologia</nav>
        </div>

        <div className="w-[25%] h-full flex justify-center items-center gap-12">
          <Search className="w-8 h-8 cursor-pointer" />
          <Bell className="w-8 h-8 cursor-pointer" />
          <User className="w-8 h-8 cursor-pointer" />
        </div>
      </header>

      <main className='flex-1 flex flex-col items-center overflow-y-auto overflow-x-hidden gap-6 pb-44'>
        <div className='h-[clamp(200px,45vw,750px)] w-[clamp(500px,80vw,1400px)] overflow-hidden relative group rounded-2xl'>
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
        <div className='w-350 h-auto flex flex-row'>
          <div className='flex-2 flex flex-col'>
            <div className='flex flex-row border-b-2 border-[#fa6832] pb-2'>
              <div className='h-auto w-1 bg-[#fa6832] rounded-4xl' />
              <h1 className='font-bold p-2 text-xl text-[#fa6832]'>Últimas notícias</h1>
            </div>
            <div className='grid grid-cols-2 w-full h-auto gap-6'>
              <div className='flex flex-1 flex-col h-120 shadow-2xl rounded-2xl overflow-hidden'>
                <div className='h-1/2 w-full'>
                  <img className='h-full w-full object-cover' src={tajMahal} alt="" />
                </div>
                <div className='flex flex-col h-full w-full px-8 justify-evenly'>
                  <div className='bg-purple-500 rounded-2xl w-fit'>
                    <h2 className='px-4 py-1 text-white'>TECNOLOGIA</h2>
                  </div>
                  <h1 className='text-xl font-bold'>Inovação tecnológica revoluciona setor de saúde com IA</h1>
                  <p className='text-gray-600'>Novas ferramentas de inteligência artificial estão sendo implementadas em hospitais para...</p>
                  <div className='flex flex-row gap-2 text-gray-600'>
                    <Clock className='h-4 w-4' />
                    <h3 className='text-xs'>Há 1 hora</h3>
                  </div>
                </div>
              </div>
              <div className='flex-1 h-120 shadow-2xl rounded-2xl'></div>
            </div>
          </div>
          <div className='flex-1 bg-amber-900 h-6'></div>
        </div>
      </main>
    </div>
  );
}

export default App
