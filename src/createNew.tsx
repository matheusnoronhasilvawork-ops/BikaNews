import Footer from "./components/footer";
import Header from "./components/header";
import { ArrowLeft, Save, Info } from "lucide-react";

export default function CreateNew() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Header />
            <main className="w-full flex flex-col flex-1 h-full bg-gray-50 items-center justify-center">
                <div className="flex flex-col w-200 h-full py-5 gap-5">
                    <div className="text-black gap-2 flex flex-row items-center cursor-pointer hover:text-[#fa6732] ">
                        <ArrowLeft size={20} className="" />
                        <span>Voltar</span>
                    </div>
                    <div className="flex flex-col w-full h-full bg-white rounded-2xl px-6 py-5 gap-4 shadow-md">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-3xl font-medium">Nova notícia</h1>
                            <div className="flex flex-row">
                                <span className="border border-gray-200 py-1.5 px-3 rounded-lg">Cancelar</span>
                                <div className="flex flex-row items-center gap-2 bg-[#fa6732] hover:bg-[#c64f24] transition duration-300 text-white py-1.5 px-3 rounded-lg ml-4 cursor-pointer">
                                    <Save size={18} />
                                    <span>Enviar</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-blue-50 border border-blue-200 p-2 rounded-lg">
                            <div className="flex flex-row items-center gap-2">
                                <Info size={18} className="text-blue-700" />
                                <span className="text-blue-700 font-medium">Instruções para Colunistas</span>
                            </div>
                            <p className="ml-6.5 text-sm text-blue-700">Sua notícia será revisada por um administrador antes da publicação. Você será notificado sobre qualquer alteração ou status da sua submissão.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-2">
                                <span>Título da Notícia</span>
                                <div className="flex flex-row border border-gray-300 rounded-lg p-3 gap-3 items-center">
                                    <input className="outline-none w-full" type="text" placeholder="Digite o título da notícia..." />
                                </div>
                            </div>
                            <div className="flex flex-row w-full gap-4">
                                <div className="flex flex-col gap-2 flex-1">
                                    <span>Categoria</span>
                                    <div className="flex flex-row border border-gray-300 rounded-lg p-3 gap-3 items-center">
                                        <input className="outline-none w-full" type="text" placeholder="Digite a categoria da notícia..." />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 flex-1">
                                    <span>Imagem de destaque(Url)</span>
                                    <div className="flex flex-row border border-gray-300 rounded-lg p-3 gap-3 items-center">
                                        <input className="outline-none w-full" type="text" placeholder="Digite o URL da imagem de destaque..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}