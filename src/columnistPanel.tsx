import Footer from "./components/footer";
import Header from "./components/header";
import { Pencil, FileText, CircleCheckBig, Clock, CircleX, TrendingUp, CheckCircle, Eye, MessageSquare } from "lucide-react"
import TajMahal from "./assets/tajMahal.png"

export default function ColumnistPanel() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="flex flex-1 w-full flex-col bg-gray-100 px-10 py-5 gap-4">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-medium">Meu painel de colunista</h1>
                        <h2 className="text-sm">Acompanhe suas notícias e submissões</h2>
                    </div>
                    <button className="flex flex-row bg-[#fa6732] text-white px-4 py-2 items-center rounded-lg gap-2">
                        <Pencil size={18} />
                        <span>Nova notícia</span>
                    </button>
                </div>
                <div className="flex flex-row w-full gap-6">
                    <div className=" p-5 flex flex-1 flex-col border-gray-300 border-2 bg-white rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                        <FileText size={25} className="text-gray-500" />
                        <h2 className="text-2xl font-medium">6</h2>
                        <span className="text-[0.8rem]">Total de notícias</span>
                    </div>
                    <div className=" p-5 flex flex-1 flex-col border-green-300 border-2 bg-white rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                        <CircleCheckBig size={25} className="text-green-500" />
                        <h2 className="text-2xl font-medium text-green-500">3</h2>
                        <span className="text-[0.8rem]">Publicadas</span>
                    </div>
                    <div className=" p-5 flex flex-1 flex-col border-yellow-300 border-2 bg-white rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                        <Clock size={25} className="text-yellow-600" />
                        <h2 className="text-2xl font-medium text-yellow-600">2</h2>
                        <span className="text-[0.8rem]">Em revisão</span>
                    </div>
                    <div className=" p-5 flex flex-1 flex-col border-red-300 border-2 bg-white rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                        <CircleX size={25} className="text-red-500" />
                        <h2 className="text-2xl font-medium text-red-500">1</h2>
                        <span className="text-[0.8rem]">Rejeitadas</span>
                    </div>
                    <div className=" p-5 flex flex-1 flex-col border-blue-300 border-2 bg-white rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                        <TrendingUp size={25} className="text-blue-500" />
                        <h2 className="text-2xl font-medium text-blue-500">4.775</h2>
                        <span className="text-[0.8rem]">Visualizações</span>
                    </div>
                </div>
                <div className="flex flex-row bg-white shadow-[0_2px_2px_rgba(0,0,0,0.1)] rounded-lg p-4 gap-4">
                    <button className="flex flex-row bg-[#fa6732] text-white px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Todas (6)</button>
                    <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Publicadas (3)</button>
                    <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Em revisão (2)</button>
                    <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Rejeitadas (1)</button>
                    <button className="flex flex-row bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Editadas</button>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4">
                    <div className="h-full flex flex-1 rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="py-0.5 px-2 bg-green-100 text-green-700 rounded-lg text-sm">Publicada</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Tecnologia</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800">A evolução da inteligência artificial no Brasil</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.625rem] ml-1">5 de Abril de 2026</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Eye className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.625rem] ml-1">1.542</span>
                                </div>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <button className="flex flex-row text-black items-center border-2 border-gray-200 w-fit py-1 px-3 rounded-lg">
                                <Eye size={18} className="" />
                                <span className=" text-sm ml-1">Ver publicação</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4">
                    <div className="h-full flex flex-1 rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <Clock size={18} className="text-yellow-500" />
                            <span className="py-0.5 px-2 bg-yellow-100 text-yellow-700 rounded-lg text-sm">Em revisão</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Economia</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800">Mercado financeiro apresenta crescimento no primeiro trimestre</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.625rem] ml-1">7 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <button className="flex flex-row text-black items-center border-2 border-gray-200 w-fit py-1 px-3 rounded-lg">
                                <Eye size={18} className="" />
                                <span className=" text-sm ml-1">Visualizar</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4">
                    <div className="h-full flex flex-1 rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <CircleX size={18} className="text-red-500" />
                            <span className="py-0.5 px-2 bg-red-100 text-red-700 rounded-lg text-sm">Rejeitada</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Educação</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800">Educação digital: desafios e oportunidades</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.625rem] ml-1">3 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="flex flex-col bg-red-100 border-red-300 border p-3 rounded-lg gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <MessageSquare size={18} className="text-red-500" />
                                    <h4 className="text-red-700 font-medium text-sm">Feedback do administrador</h4>
                                </div>
                                <span className="text-[0.8rem] text-red-700">A notícia precisa de mais fontes confiáveis e dados atualizados. Por favor, revise e adicione referências.</span>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <button className="flex flex-row items-center bg-[#fa6732] text-white w-fit py-2 px-3 rounded-lg">
                                <Pencil size={18} className="" />
                                <span className=" text-sm ml-1">Revisar e Reenviar</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4">
                    <div className="h-full flex flex-1 rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <Pencil size={18} className="text-blue-500" />
                            <span className="py-0.5 px-2 bg-blue-100 text-blue-700 rounded-lg text-sm">Editada pelo Admin</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Tecnologia</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800">A evolução da inteligência artificial no Brasil</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.625rem] ml-1">5 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="flex flex-col bg-blue-100 border-blue-300 border p-3 rounded-lg gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <MessageSquare size={18} className="text-blue-500" />
                                    <h4 className="text-blue-700 font-medium text-sm">Feedback do administrador</h4>
                                </div>
                                <span className="text-[0.8rem] text-blue-700">A notícia precisa de mais fontes confiáveis e dados atualizados. Por favor, revise e adicione referências.</span>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <button className="flex flex-row text-black items-center border-2 border-gray-200 w-fit py-1 px-3 rounded-lg">
                                <Eye size={18} className="" />
                                <span className=" text-sm ml-1">Ver publicação</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}