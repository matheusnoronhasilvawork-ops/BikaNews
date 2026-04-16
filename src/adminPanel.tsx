import Footer from "./components/footer";
import Header from "./components/header";
import { TriangleAlert, Search } from "lucide-react";

export default function AdminPanel() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="flex flex-col flex-1 w-full bg-gray-100 px-10 py-5 gap-4">
                <div className="flex flex-row max-sm:flex-col w-full justify-between items-center max-sm:gap-4">
                    <div className="flex flex-col items-start justify-start max-sm:w-full">
                        <h1 className="text-3xl font-medium">Painel administrativo</h1>
                        <h2 className="text-sm">Gerencie as submissões dos colunistas</h2>
                    </div>
                    <button className="max-sm:w-full justify-center flex flex-row bg-yellow-100 text-white px-4 py-2 items-center rounded-lg gap-2">
                        <TriangleAlert className="text-yellow-700" size={18} />
                        <span className="text-yellow-700">2 Pendentes</span>
                    </button>
                </div>
                <div className="flex flex-col bg-white rounded-lg p-5 gap-4 shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-row border border-gray-300 p-2 rounded-lg items-center gap-2">
                        <Search size={25} className="text-gray-400" />
                        <input className="outline-none" placeholder="Buscar" />
                    </div>
                    <div className="flex flex-row gap-4 max-sm:grid max-sm:grid-cols-4 max-sm:grid-rows-2">
                        <button className="flex flex-row bg-[#fa6732] text-white px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Todas</button>
                        <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Pendentes</button>
                        <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Publicadas</button>
                        <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Rejeitadas</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}