import Footer from "./components/footer";
import Header from "./components/header";
import { Clock, User } from "lucide-react";

export function NewScreen() {
    return (
        <div className="min-h-screen flex flex-col gap-4 overflow-y-auto overscroll-none">
            <Header />
            <main className="flex-1 flex flex-row items-center overflow-x-hidden gap-6 pb-44 px-25">
                <div className="flex flex-col flex-3 justify-center gap-3">
                    <h2 className="bg-[#fa6732] py-1.5 px-3 text-white rounded-2xl tracking-wider w-fit">ECONOMIA</h2>
                    <h1 className="text-6xl font-medium">Governo anuncia novo pacote de medidas econômicas para estimular crescimento</h1>
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
                </div>
                <div className="flex flex-col flex-1"></div>
            </main>
            <Footer />
        </div>
    )
}