import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {

    const [doubts, setDoubts] = useState<string[]>(["Selecione um assunto", "Dúvida geral", "Quero ser colunista", "Quero anunciar", "Suporte técnico", "Outros"]);

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col w-full bg-gray-50 items-center justify-start py-5 gap-6">
                <div className="flex flex-col w-250 h-full items-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                        <h1 className="text-4xl font-medium text-gray-800">Entre em contato</h1>
                        <p className="text-gray-600">Estamos aqui para ajudar. Envie sua mensagem e responderemos em breve.</p>
                    </div>
                    <div className="flex flex-row w-full gap-4">
                        <div className="flex flex-col bg-white shadow-md rounded-2xl py-4 flex-1 h-fit items-center justify-center">
                            <div className="flex bg-[#fa6732] text-white rounded-full w-fit p-3 items-center gap-3">
                                <Mail size={20} />
                            </div>
                            <h2 className="my-4 font-medium text-xl">Email</h2>
                            <span className="text-gray-600">contato@exemplo.com</span>
                            <span className="text-gray-600">suporte@exemplo.com</span>
                        </div>
                        <div className="flex flex-col bg-white shadow-md rounded-2xl py-4 flex-1 h-fit items-center justify-center">
                            <div className="flex bg-blue-500 text-white rounded-full w-fit p-3 items-center gap-3">
                                <Phone size={20} />
                            </div>
                            <h2 className="my-4 font-medium text-xl">Telefone</h2>
                            <span className="text-gray-600">+55 (11) 1234-5678</span>
                            <span className="text-gray-600">Seg-Sex: 9h às 18h</span>
                        </div>
                        <div className="flex flex-col bg-white shadow-md rounded-2xl py-4 flex-1 h-fit items-center justify-center">
                            <div className="flex bg-green-500 text-white rounded-full w-fit p-3 items-center gap-3">
                                <MapPin size={20} />
                            </div>
                            <h2 className="my-4 font-medium text-xl">Endereço</h2>
                            <span className="text-gray-600">Itapevi, SP</span>
                            <span className="text-gray-600">Brasil</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl w-full h-fit flex flex-col py-4 px-8 gap-4">
                        <h2 className="text-3xl font-medium">Envie uma mensagem</h2>
                        <div className="flex flex-row w-full gap-8">
                            <div className="flex flex-col gap-2 flex-1">
                                <span className="text-sm font-medium">Nome completo</span>
                                <input className="outline-none p-2 border border-gray-300 rounded-md focus:border-[#fa6732]" placeholder="Seu nome" type="text" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <span className="text-sm font-medium">Email</span>
                                <input className="outline-none p-2 border border-gray-300 rounded-md focus:border-[#fa6732]" placeholder="Seu@email.com" type="email" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-medium">Assunto</span>
                            <select className="outline-none border p-2 w-full border-gray-300 rounded-md focus:border-[#fa6732]" name="" id="">
                                {doubts.map((doubt, index) => (
                                    <option key={index} value={doubt}>{doubt}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-medium">Mensagem</span>
                            <textarea className="outline-none resize-none p-2 border border-gray-300 rounded-md focus:border-[#fa6732]" placeholder="Sua mensagem aqui" rows={4}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-row bg-[#fa6732] hover:bg-[#c64f24] transition duration-300 rounded-lg text-white px-6 py-2 w-fit items-center justify-center gap-2 cursor-pointer">
                                <Send size={20} />
                                <button className="text-sm font-medium">Enviar mensagem</button>
                            </div>
                            <button className="font-medium text-sm border border-gray-300 px-6 py-2 hover:bg-gray-100 rounded-lg">Limpar</button>
                        </div>
                        <span className="text-blue-700 bg-blue-50 border border-blue-200 rounded-md p-2"><span className="font-bold">Nota: </span>Respondemos todas as mensagens em até 24 horas úteis. Para questões urgentes, entre em contato por telefone.</span>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}