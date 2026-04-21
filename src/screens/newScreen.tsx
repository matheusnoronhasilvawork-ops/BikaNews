import Footer from "../components/footer";
import Header from "../components/header";
import { Clock, User, Bookmark, Share2, Newspaper } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import TajMahal from "./assets/tajMahal.png";

export function NewScreen() {
    return (
        <div className="min-h-screen flex flex-col gap-4 items-center">
            <Header />
            <main className="flex-1 flex flex-row gap-6 pb-44 pt-5 justify-center w-full px-5 bg-[rgba(0,0,0,0.01)]">
                <div className="w-300 h-full flex flex-row gap-6 max-lg:flex-col">
                    <div className="flex flex-col w-[70%] max-lg:w-full justify-center gap-4 shadow-[0_0_6px_rgba(0,0,0,0.1)] rounded-2xl bg-white p-10">
                        <h2 className="bg-[#fa6732] py-1.5 px-3 text-white rounded-2xl tracking-wider w-fit">ECONOMIA</h2>
                        <h1 className="text-[3.1rem] text-5xl leading-15 font-medium mt-5">Governo anuncia novo pacote de medidas econômicas para estimular crescimento</h1>
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
                        <div className="bg-gray-300 w-full h-0.5" />
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
                        <div className="flex flex-col w-full h-fit gap-10">
                            <div className="overflow-hidden flex flex-col w-full h-fit rounded-t-2xl bg-gray-200">
                                <img className="w-full h-auto" src={TajMahal} alt="Taj Mahal" />
                                <span className="text-gray-600 text-sm mt-2 ml-2 mb-2">Taj Mahal, Índia</span>
                            </div>
                            <p className="text-gray-700 text-xl">O Ministério da Economia apresentou nesta terça-feira um amplo pacote de medidas fiscais e econômicas destinado a impulsionar o crescimento do país nos próximos anos. O anúncio, feito pelo ministro em coletiva de imprensa, detalha investimentos que devem superar R$ 100 bilhões em diversas áreas estratégicas.</p>
                            <p className="text-gray-700 text-xl">As medidas incluem incentivos fiscais para empresas que investirem em pesquisa e desenvolvimento, redução de impostos para setores estratégicos e a criação de linhas de crédito especiais para pequenas e médias empresas. O governo também prometeu simplificar processos burocráticos para facilitar a abertura de novos negócios.</p>
                            <div className="w-full h-30 items-center justify-center flex bg-gray-300 rounded-2xl">
                                <span>Publicidade</span>
                            </div>
                            <h2 className="font-medium text-3xl">Impacto no Mercado Financeiro</h2>
                            <p className="text-gray-700 text-xl">A reação inicial dos mercados foi positiva, com a bolsa de valores registrando alta de 2,3% logo após o anúncio. Analistas econômicos avaliam que as medidas podem trazer resultados significativos no médio prazo, especialmente se acompanhadas de reformas estruturais.</p>
                            <div className="overflow-hidden flex flex-col w-full h-fit rounded-t-2xl bg-gray-200">
                                <img className="w-full h-auto" src={TajMahal} alt="Taj Mahal" />
                                <span className="text-gray-600 text-sm mt-2 ml-2 mb-2">Taj Mahal, Índia</span>
                            </div>
                            <div className="w-full h-30 items-center justify-center flex bg-gray-300 rounded-2xl">
                                <span>Publicidade</span>
                            </div>
                            <h2 className="font-medium text-3xl">Reação dos especialistas</h2>
                            <p className="text-gray-600 text-xl">Economistas ouvidos pela reportagem destacam pontos positivos e desafios do plano. "É um passo importante, mas precisamos ver os detalhes da implementação e como o governo vai financiar essas medidas sem comprometer as contas públicas", afirma Maria Santos, economista-chefe de uma instituição financeira.</p>
                            <p className="text-gray-600 text-xl">O setor empresarial também se manifestou favoravelmente. Entidades representativas divulgaram notas elogiando a iniciativa e se colocando à disposição para colaborar na implementação das medidas.</p>
                            <p className="text-gray-600 text-xl">Já entidades sindicais pedem atenção especial aos trabalhadores, defendendo que os benefícios fiscais sejam condicionados à manutenção de empregos e melhoria das condições de trabalho.</p>
                            <div className="w-full h-30 items-center justify-center flex bg-gray-300 rounded-2xl">
                                <span>Publicidade</span>
                            </div>
                            <h2 className="font-medium text-3xl">Próximos passos</h2>
                            <p className="text-gray-600 text-xl">O pacote agora precisa passar pelo Congresso Nacional para aprovação. O governo já iniciou conversas com líderes partidários e espera aprovar as principais medidas ainda no primeiro semestre. A expectativa é que os primeiros efeitos comecem a ser sentidos na economia no segundo semestre de 2026.</p>
                            <div className="overflow-hidden flex flex-col w-full h-fit rounded-t-2xl bg-gray-200">
                                <img className="w-full h-auto" src={TajMahal} alt="Taj Mahal" />
                                <span className="text-gray-600 text-sm mt-2 ml-2 mb-2">Taj Mahal, Índia</span>
                            </div>
                            <p className="text-gray-600 text-xl">O ministro garantiu que o governo está preparado para ajustar as medidas conforme necessário e destacou que o diálogo com a sociedade civil e o setor produtivo será mantido ao longo de todo o processo de implementação.</p>
                            <div className="w-full h-0.5 bg-gray-300 mt-8" />
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row gap-3">
                                    <span className="bg-gray-200 py-1 px-4 rounded-2xl text-gray-600">Economia</span>
                                    <span className="bg-gray-200 py-1 px-4 rounded-2xl text-gray-600">Política fiscal</span>
                                    <span className="bg-gray-200 py-1 px-4 rounded-2xl text-gray-600">Investimentos</span>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <Share2 className="w-6 h-6 text-[#fa6732]" />
                                    <span className="text-[#fa6732] font-medium">Compartilhar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 h-auto gap-10 sticky top-20 self-start max-lg:w-full">
                        <div className="w-full h-60 items-center justify-center flex bg-gray-300 rounded-2xl">
                            <span>Publicidade</span>
                        </div>
                        <div className="flex flex-col w-full h-auto shadow-[0_0_6px_rgba(0,0,0,0.1)] bg-white rounded-2xl px-5 py-5 gap-2">
                            <h3 className="text-xl font-medium">Leia também</h3>
                            <div className="w-full h-0.5 bg-[#fa6732]" />
                            <div className="flex flex-col">
                                <div className="flex flex-row h-20 w-full gap-4 group cursor-pointer">
                                    <div className="h-full min-w-20 rounded-lg overflow-hidden">
                                        <img className="h-full w-full object-cover group-hover:scale-110 transition duration-500" src={TajMahal} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h4 className="bg-purple-200 text-purple-600 py-0.5 px-2 text-[0.625rem] w-fit">MERCADO</h4>
                                        <span className="text-xs group-hover:text-[#fa6732] font-medium text-gray-800 line-clamp-2">Bolsa de valores atinge novo recorde histórico com pacote econômico</span>
                                        <div className="flex flex-row items-center">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-gray-400 text-[0.625rem] ml-1">Há 20min</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-0.5 w-full bg-gray-100 mt-4 mb-4" />
                                <div className="flex flex-row h-20 w-full gap-4 group cursor-pointer">
                                    <div className="h-full min-w-20 rounded-lg overflow-hidden">
                                        <img className="h-full w-full object-cover group-hover:scale-110 transition duration-500" src={TajMahal} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h4 className="bg-purple-200 text-purple-600 py-0.5 px-2 text-[0.625rem] w-fit">MERCADO</h4>
                                        <span className="text-xs group-hover:text-[#fa6732] font-medium text-gray-800 line-clamp-2">Bolsa de valores atinge novo recorde histórico com pacote econômico</span>
                                        <div className="flex flex-row items-center">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-gray-400 text-[0.625rem] ml-1">Há 20min</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-0.5 w-full bg-gray-100 mt-4 mb-4" />
                                <div className="flex flex-row h-20 w-full gap-4 group cursor-pointer">
                                    <div className="h-full min-w-20 rounded-lg overflow-hidden">
                                        <img className="h-full w-full object-cover group-hover:scale-110 transition duration-500" src={TajMahal} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h4 className="bg-purple-200 text-purple-600 py-0.5 px-2 text-[0.625rem] w-fit">MERCADO</h4>
                                        <span className="text-xs group-hover:text-[#fa6732] font-medium text-gray-800 line-clamp-2">Bolsa de valores atinge novo recorde histórico com pacote econômico</span>
                                        <div className="flex flex-row items-center">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-gray-400 text-[0.625rem] ml-1">Há 20min</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-0.5 w-full bg-gray-100 mt-4 mb-4" />
                                <div className="flex flex-row h-20 w-full gap-4 group cursor-pointer">
                                    <div className="h-full min-w-20 rounded-lg overflow-hidden">
                                        <img className="h-full w-full object-cover group-hover:scale-110 transition duration-500" src={TajMahal} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h4 className="bg-purple-200 text-purple-600 py-0.5 px-2 text-[0.625rem] w-fit">MERCADO</h4>
                                        <span className="text-xs group-hover:text-[#fa6732] font-medium text-gray-800 line-clamp-2">Bolsa de valores atinge novo recorde histórico com pacote econômico</span>
                                        <div className="flex flex-row items-center">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-gray-400 text-[0.625rem] ml-1">Há 20min</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-0.5 w-full bg-gray-100 mt-4 mb-4" />
                                <div className="flex flex-row h-20 w-full gap-4 group cursor-pointer">
                                    <div className="h-full min-w-20 rounded-lg overflow-hidden">
                                        <img className="h-full w-full object-cover group-hover:scale-110 transition duration-500" src={TajMahal} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h4 className="bg-purple-200 text-purple-600 py-0.5 px-2 text-[0.625rem] w-fit">MERCADO</h4>
                                        <span className="text-xs group-hover:text-[#fa6732] font-medium text-gray-800 line-clamp-2">Bolsa de valores atinge novo recorde histórico com pacote econômico</span>
                                        <div className="flex flex-row items-center">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-gray-400 text-[0.625rem] ml-1">20/04/26</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto bg-[#fa6732] rounded-2xl py-7 px-6 flex flex-col gap-6">
                            <div className='flex flex-col gap-2 w-full items-center'>
                                <div className='flex flex-row items-center self-start gap-4 w-fit'>
                                    <Newspaper className='text-white h-6 w-6' />
                                    <h1 className='text-white font-medium text-lg'>Receba nossas notícias</h1>
                                </div>
                                <h2 className='text-white text-xs'>Inscreva-se para receber as principais notícias do dia diretamente no seu e-mail.</h2>
                            </div>
                            <div className='flex flex-col w-full gap-4'>
                                <input type="email" name="" placeholder='seuemail@gmail.com' id="" className='outline-none w-full h-12 bg-white p-4 rounded-md' />
                                <button className='w-full h-12 bg-white text-[#fa6732] rounded-md font-medium cursor-pointer text-lg'>Inscrever-se</button>
                            </div>
                        </div>
                        <div className="w-full h-120 items-center justify-center flex bg-gray-300 rounded-2xl mt-2">
                            <span>Publicidade</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}