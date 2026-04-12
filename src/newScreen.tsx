import Footer from "./components/footer";
import Header from "./components/header";
import { Clock, User, Bookmark } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export function NewScreen() {
    return (
        <div className="min-h-screen flex flex-col gap-4">
            <Header />
            <main className="flex-1 flex flex-row items-center overflow-x-hidden gap-6 pb-44 px-25 pt-5">
                <div className="flex flex-col flex-3 justify-center gap-4">
                    <h2 className="bg-[#fa6732] py-1.5 px-3 text-white rounded-2xl tracking-wider w-fit">ECONOMIA</h2>
                    <h1 className="text-6xl font-medium mt-5">Governo anuncia novo pacote de medidas econômicas para estimular crescimento</h1>
                    <div className="flex flex-row items-center gap-10">
                        <div className="flex flex-row items-center gap-3">
                            <div className="w-12 h-12 p-2 rounded-4xl bg-[#fa6732] flex items-center justify-center">
                                <User className="w-full h-full text-white" /> 
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-400 text-md">Por</h3>
                                <h4 className="font-medium text-lg">Matheus Noronha</h4>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <Clock className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-400 ml-1">20 de junho de 2024 • 5 minutos de leitura</span>
                        </div>
                    </div>
                    <div className="bg-gray-300 w-full h-0.5"/>
                    <div className="flex flex-row w-full items-center justify-between">
                        <div className="flex flex-row items-center">
                            <span className="text-gray-400">Compartilhar:</span>
                            <div className="flex flex-row gap-2 ml-2">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                    <FaFacebook className="w-4 h-4 text-white" />
                                </div>
                                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                                    <FaTwitter className="w-4 h-4 text-white" />
                                </div>
                                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                                    <FaInstagram className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-gray-300 rounded-2xl px-4 py-1.5 flex flex-row items-center gap-2">
                            <Bookmark className="w-5 h-5" />
                            <span>Salvar</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1"></div>
            </main>
            <Footer />
        </div>
    )
}