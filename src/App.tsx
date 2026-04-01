import './App.css'
import bikanews from './assets/bikanews.png'
import { Search, Bell, User, Clock } from 'lucide-react'
import tajMahal from './assets/tajMahal.png'

//#fa6832
function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="w-full h-16 flex items-center justify-center">
        <div className="flex-1 h-full flex justify-evenly items-center px-20">
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

      <main className='flex-1 bg-red-700 flex flex-col items-center overflow-y-auto'>
        <div className='h-140 w-220 overflow-hidden relative group'>
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
                <Clock className='h-4 w-4'/>
                <h3 className='text-xs'>Há 1 hora</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
