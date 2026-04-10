import './App.css'
import bikanews from './assets/bikanews.png'
import { Search, User, Menu } from 'lucide-react'
//#fa6832
function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="w-full h-16 flex items-center">
        <div className="flex-1 h-full flex gap-7 items-center pl-4">
          <Menu className="min-w-8 min-h-8 cursor-pointer xl:hidden" />
          <img src={bikanews} alt="logo" className="w-32 h-24" />
          <nav className="font-bold text-lg cursor-pointer max-xl:hidden">Inicio</nav>
          <nav className="font-bold text-lg cursor-pointer max-xl:hidden">Política</nav>
          <nav className="font-bold text-lg cursor-pointer max-xl:hidden">Economia</nav>
          <nav className="font-bold text-lg cursor-pointer max-xl:hidden">Esporte</nav>
          <nav className="font-bold text-lg cursor-pointer max-xl:hidden">Tecnologia</nav>
        </div>

        <div className="w-[25%] h-full flex justify-center items-center gap-12">
          <Search className="min-w-8 min-h-8 cursor-pointer" />
          <User className="min-w-8 min-h-8 cursor-pointer" />
        </div>
      </header>
    </div>
  );
}

export default App
