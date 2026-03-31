import './App.css'
import bikanews from './assets/bikanews.png'
import { Search, Bell, User } from 'lucide-react'
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
    </div>
  );
}

export default App
