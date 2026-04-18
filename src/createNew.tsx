import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { ArrowLeft, Save, Info, Pilcrow, Heading2, Image, FileText, X } from "lucide-react";

type content = {
    type: "paragraph" | "subTitle" | "image";
    text: string;
}[];

export default function CreateNew() {

    const [contents, setContents] = useState<content>([]);

    return (
        <div className="h-screen flex flex-col items-center">
            <Header />
            <main className="w-full flex flex-col flex-1 bg-gray-50 items-center justify-center">
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
                        <div className="flex flex-col gap-2">
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
                    <div className="flex flex-col w-full h-full bg-white rounded-2xl px-6 py-5 gap-4 shadow-md">
                        <div className="flex flex-row w-full justify-between items-center">
                            <h2 className="text-2xl font-bold">Conteúdo</h2>
                            <div className="flex flex-row gap-2">
                                <button onClick={() => setContents([...contents, { type: 'paragraph', text: '' }])} className="flex flex-row border gap-2 border-gray-300 rounded-lg px-3 py-1.5 items-center cursor-pointer hover:bg-gray-100 transition duration-300">
                                    <Pilcrow size={18} />
                                    <span>Parágrafo</span>
                                </button>
                                <button onClick={() => setContents([...contents, { type: "subTitle", text: "" }])} className="flex flex-row border gap-2 border-gray-300 rounded-lg px-3 py-1.5 items-center cursor-pointer hover:bg-gray-100 transition duration-300">
                                    <Heading2 size={18} />
                                    <span>Subtítulo</span>
                                </button>
                                <button onClick={() => setContents([...contents, { type: "image", text: "" }])} className="flex flex-row border gap-2 border-gray-300 rounded-lg px-3 py-1.5 items-center cursor-pointer hover:bg-gray-100 transition duration-300">
                                    <Image size={18} />
                                    <span>Imagem</span>
                                </button>
                            </div>
                        </div>
                        <div className={`w-full min-h-50 h-fit flex flex-col text-gray-400 items-center ${contents.length === 0 ? 'justify-center' : 'justify-start'}  gap-2`}>
                            {contents.length === 0 ? (
                                <>
                                    <FileText size={60} className="" />
                                    <h3 className="text-md">Adicione blocos de conteúdo usando os botões acima</h3>
                                </>
                            ) : (
                                contents.map((content, index) => {
                                    if (content.type === 'paragraph') {
                                        return (
                                            <div className="flex flex-col group relative hover:border-[#fa6732] w-full border border-gray-300 h-30 items-start justify-start rounded-lg p-3" key={index}>
                                                <textarea onChange={(e) => setContents(prev => { const newContents = [...prev]; newContents[index].text = e.target.value; return newContents })} key={index} value={content.text} placeholder="Escreva o parágrafo aqui" className="w-full block outline-none resize-none h-full" />
                                                <button onClick={() => setContents(prev => prev.filter((_, i) => i !== index))} className="bg-red-500 items-center justify-center absolute hidden group-hover:flex -right-2 -top-2 w-6 h-6 rounded-full cursor-pointer hover:bg-red-600 transition duration-300">
                                                    <X size={12} className="text-white" />
                                                </button>
                                            </div>
                                        )
                                    } else if (content.type === 'subTitle') {
                                        return (
                                            <div className="flex flex-col group relative hover:border-[#fa6732] w-full border border-gray-300 h-15 items-start justify-start rounded-lg p-3" key={index}>
                                                <input onChange={(e) => setContents(prev => { const newContents = [...prev]; newContents[index].text = e.target.value; return newContents })} key={index} value={content.text} placeholder="Escreva o subtítulo aqui" className="w-full h-full outline-none text-xl font-bold" type="text" />
                                                <button onClick={() => setContents(prev => prev.filter((_, i) => i !== index))} className="bg-red-500 items-center justify-center absolute hidden group-hover:flex -right-2 -top-2 w-6 h-6 rounded-full cursor-pointer hover:bg-red-600 transition duration-300">
                                                    <X size={12} className="text-white" />
                                                </button>
                                            </div>
                                        )
                                    } else if (content.type === 'image') {
                                        return (
                                            <div className="flex flex-col group relative hover:border-[#fa6732] w-full border border-gray-300 h-10 items-start justify-start rounded-lg p-3" key={index}>
                                                <input onChange={(e) => setContents(prev => { const newContents = [...prev]; newContents[index].text = e.target.value; return newContents })} key={index} value={content.text} placeholder="Cole a URL da imagem aqui" className="w-full outline-none" type="text" />
                                                <button onClick={() => setContents(prev => prev.filter((_, i) => i !== index))} className="bg-red-500 items-center justify-center absolute hidden group-hover:flex -right-2 -top-2 w-6 h-6 rounded-full cursor-pointer hover:bg-red-600 transition duration-300">
                                                    <X size={12} className="text-white" />
                                                </button>
                                            </div>
                                        )
                                    }
                                })
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-end items-center gap-4">
                        <span className="px-3 py-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">Cancelar</span>
                        <div className="items-center flex flex-row bg-[#fa6732] gap-2 hover:bg-[#c64f24] transition duration-300 text-white py-1.5 px-3 rounded-lg cursor-pointer">
                            <Save size={18} />
                            <span>Submeter para revisão</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}