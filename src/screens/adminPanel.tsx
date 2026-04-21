import Footer from "./components/footer";
import Header from "./components/header";
import { TriangleAlert, Search, CheckCircle, Clock, Eye, User, CircleX, SquarePen, Trash2 } from "lucide-react";
import TajMahal from "./assets/tajMahal.png";

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
                    <div className="flex flex-row gap-4 max-sm:grid max-sm:grid-cols-3 max-sm:grid-rows-2">
                        <button className="max-sm:col-span-3 justify-center flex flex-row bg-[#fa6732] text-white px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Todas</button>
                        <button className="flex flex-row justify-center bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Pendentes</button>
                        <button className="flex flex-row justify-center bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Publicadas</button>
                        <button className="flex flex-row justify-center bg-gray-100 text-gray-700 px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer">Rejeitadas</button>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4 max-md:flex-col">
                    <div className="h-full flex min-w-85 max-w-85 max-md:max-w-0 max-md:min-w-full rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <CheckCircle size={18} className="text-yellow-500" />
                            <span className="py-0.5 px-2 bg-yellow-100 text-yellow-700 rounded-lg text-sm">Pendente</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Tecnologia</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">Novas tecnologias transformam o mercado brasileiro</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <User className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">Maria Santos</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">5 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <div className="max-lg:gap-x-8 flex flex-row gap-2 items-center max-lg:grid max-lg:grid-cols-2 max-lg:gap-2 max-lg:justify-items-start">
                                <button className="max-lg:w-full justify-center flex items-center border-2 border-gray-200 py-1 px-3 rounded-lg max-lg:order-1">
                                    <SquarePen size={18} />
                                    <span className="text-sm ml-1 line-clamp-1">Editar • Visualizar</span>
                                </button>
                                <button className="max-lg:w-full justify-center flex items-center bg-green-500 text-white py-1 px-3 rounded-lg max-lg:order-3">
                                    <CheckCircle size={18} />
                                    <span className="text-sm ml-1">Aprovar</span>
                                </button>
                                <button className="max-lg:w-full justify-center flex items-center bg-red-500 text-white py-1 px-3 rounded-lg max-lg:order-4">
                                    <CircleX size={18} />
                                    <span className="text-sm ml-1">Rejeitar</span>
                                </button>
                                <button className="max-lg:w-full justify-center ml-auto max-lg:ml-0 flex items-center border-2 border-red-200 text-red-700 py-1 px-3 rounded-lg max-lg:order-2">
                                    <Trash2 size={18} />
                                    <span className="text-sm ml-1">Excluir</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4 max-md:flex-col">
                    <div className="h-full flex min-w-85 max-w-85 max-md:max-w-0 max-md:min-w-full rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <CheckCircle size={18} className="text-yellow-500" />
                            <span className="py-0.5 px-2 bg-yellow-100 text-yellow-700 rounded-lg text-sm">Pendente</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Tecnologia</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">Novas tecnologias transformam o mercado brasileiro</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <User className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">Maria Santos</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">5 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <div className="max-lg:gap-x-8 flex flex-row gap-2 items-center max-lg:grid max-lg:grid-cols-2 max-lg:gap-2 max-lg:justify-items-start">
                                <button className="max-lg:w-full justify-center flex items-center border-2 border-gray-200 py-1 px-3 rounded-lg max-lg:order-1">
                                    <SquarePen size={18} />
                                    <span className="text-sm ml-1 line-clamp-1">Editar • Visualizar</span>
                                </button>
                                <button className="max-lg:w-full justify-center flex items-center bg-green-500 text-white py-1 px-3 rounded-lg max-lg:order-3">
                                    <CheckCircle size={18} />
                                    <span className="text-sm ml-1">Aprovar</span>
                                </button>
                                <button className="max-lg:w-full justify-center flex items-center bg-red-500 text-white py-1 px-3 rounded-lg max-lg:order-4">
                                    <CircleX size={18} />
                                    <span className="text-sm ml-1">Rejeitar</span>
                                </button>
                                <button className="max-lg:w-full justify-center ml-auto max-lg:ml-0 flex items-center border-2 border-red-200 text-red-700 py-1 px-3 rounded-lg max-lg:order-2">
                                    <Trash2 size={18} />
                                    <span className="text-sm ml-1">Excluir</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4 max-md:flex-col">
                    <div className="h-full min-w-85 max-w-85 max-md:max-w-0 max-md:min-w-full flex flex-1 rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="py-0.5 px-2 bg-green-100 text-green-700 rounded-lg text-sm">Publicada</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Esportes</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">A evolução da inteligência artificial no Brasil</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <User className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">Maria Santos</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">5 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-2 items-center">
                                    <button className="flex flex-row text-black items-center border-2 border-gray-200 w-fit py-1 px-3 rounded-lg">
                                        <SquarePen size={18} className="" />
                                        <span className=" text-sm ml-1 line-clamp-1">Editar • Visualizar</span>
                                    </button>
                                </div>
                                <button className="flex flex-row text-red-700 items-center border-2 border-red-200 w-fit py-1 px-3 rounded-lg">
                                    <Trash2 size={18} className="" />
                                    <span className=" text-sm ml-1">Excluir</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row rounded-lg p-5 bg-white w-full gap-4 max-md:flex-col">
                    <div className="h-full flex min-w-85 max-w-85 max-md:max-w-0 max-md:min-w-full rounded-lg overflow-hidden">
                        <img className="h-full w-full object-cover" src={TajMahal} alt="" />
                    </div>
                    <div className="flex flex-col flex-3 justify-evenly">
                        <div className="flex flex-row gap-2 items-center">
                            <CheckCircle size={18} className="text-red-500" />
                            <span className="py-0.5 px-2 bg-red-100 text-red-700 rounded-lg text-sm">Rejeitada</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-700 rounded-lg">Tecnologia</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">Novas tecnologias transformam o mercado brasileiro</h3>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row items-center">
                                    <User className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">Maria Santos</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400 text-[0.7rem] ml-1">5 de Abril de 2026</span>
                                </div>
                            </div>
                            <div className="h-0.5 w-full bg-gray-100"></div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-2 items-center">
                                    <button className="flex flex-row text-black items-center border-2 border-gray-200 w-fit py-1 px-3 rounded-lg">
                                        <SquarePen size={18} className="" />
                                        <span className=" text-sm ml-1 line-clamp-1">Editar • Visualizar</span>
                                    </button>
                                </div>
                                <button className="flex flex-row text-red-700 items-center border-2 border-red-200 w-fit py-1 px-3 rounded-lg">
                                    <Trash2 size={18} className="" />
                                    <span className=" text-sm ml-1">Excluir</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}