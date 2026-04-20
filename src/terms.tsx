import { Bug, Check, CheckCircle, FilePen, FileText, Gavel, GitPullRequestArrow, Handshake, LandPlot, MonitorX, Scale, Toolbox, TriangleAlert, UserRoundCog, X, XCircle } from "lucide-react";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Terms() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col w-full bg-gray-50 items-center justify-start py-5 gap-6">
                <div className="bg-white w-200 h-full items-start shadow-md p-10 rounded-2xl flex flex-col gap-4">
                    <h1 className="text-5xl font-medium">Termos de uso</h1>
                    <span className="text-gray-600">Última atualização: 10 de Abril de 2026</span>
                    <div className="flex flex-row bg-yellow-50 border-l-8 border-yellow-300 px-3 py-5">
                        <TriangleAlert size={35} className="text-yellow-700 mx-4" />
                        <span className="text-yellow-700"><span className="font-bold">Importante:</span> Ao usar o Bika News, você concorda com estes Termos de Uso. Leia-os cuidadosamente antes de utilizar nossos serviços.</span>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Handshake size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">1. Aceitação dos termos</h2>
                        </div>
                        <div className="flex flex-col text-gray-600">
                            <span>Ao acessar e usar o Bika News, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Toolbox size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">2. Descrição do Serviço</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>O Bika News é uma plataforma de notícias open-source que permite:</span>
                            <div className="w-full flex flex-row gap-4">
                                <div className="flex flex-col gap-2 bg-green-50 flex-1 py-5 px-5 border border-green-300 rounded-lg">
                                    <span className="text-green-700 font-medium text-lg">Leitores</span>
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Ler notícias gratuitamente</span>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Acessar conteúdo diversificado</span>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Compartilhar artigos</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 bg-purple-50 flex-1 py-5 px-5 border border-purple-300 rounded-lg">
                                    <span className="text-purple-700 font-medium text-lg">Colunistas</span>
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Publicar artigos</span>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Criação dinâmica</span>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Alcançar audiência</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <UserRoundCog size={30} className="text-[#fa6732]"/>
                            <h2 className="text-3xl font-medium">3. Registro e Conta de Usuário</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Para se tornar um colunista, você deve criar uma conta. Ao criar uma conta, você concorda em:</span>
                            <ul className="list-disc flex flex-col gap-2 ml-5">
                                <li className="">Fornecer informações precisas, completas e atualizadas</li>
                                <li className="">Manter a segurança de sua senha e conta</li>
                                <li className="">Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                                <li className="">Ser responsável por todas as atividades em sua conta</li>
                                <li className="">Ter pelo menos 18 anos de idade</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Scale size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">4. Diretrizes de Conteúdo</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Como colunista, você deve seguir nossas diretrizes de conteúdo:</span>
                            <div className="flex flex-col bg-green-50 border-l-8 w-full gap-4 p-5 border-green-700">
                                <div className="flex flex-row items-center gap-0">
                                    <CheckCircle size={20} className="text-green-700 mr-2" />
                                    <span>Conteúdo Permitido</span>
                                </div>
                                <ul className="gap-2 flex flex-col ml-6">
                                    <li className="flex flex-row">
                                        <Check size={20} className="text-green-700 mr-2" />
                                        <span>Notícias verificadas</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <Check size={20} className="text-green-700 mr-2" />
                                        <span>Análises e opiniões baseadas em fatos</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <Check size={20} className="text-green-700 mr-2" />
                                        <span>Conteúdo original ou devidamente creditado</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col bg-red-50 border-l-8 w-full gap-4 p-5 border-red-700">
                                <div className="flex flex-row items-center gap-0">
                                    <XCircle size={20} className="text-red-700 mr-2" />
                                    <span>Conteúdo Proibido</span>
                                </div>
                                <ul className="gap-2 flex flex-col ml-6">
                                    <li className="flex flex-row">
                                        <X size={20} className="text-red-700 mr-2" />
                                        <span>Fake news ou desinformação</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <X size={20} className="text-red-700 mr-2" />
                                        <span>Discurso de ódio, discriminação ou preconceito</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <X size={20} className="text-red-700 mr-2" />
                                        <span>Conteúdo violento, pornográfico ou inapropriado</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <X size={20} className="text-red-700 mr-2" />
                                        <span>Plágio ou violação de direitos autorais</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <X size={20} className="text-red-700 mr-2" />
                                        <span>Spam ou conteúdo comercial não autorizado</span>
                                    </li>
                                    <li className="flex flex-row">
                                        <X size={20} className="text-red-700 mr-2" />
                                        <span>Informações pessoais de terceiros sem consentimento</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <LandPlot size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">5. Propriedade Intelectual</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 bg-blue-50 p-5 border border-blue-200 rounded-md gap-2">
                            <span className="font-medium text-black">Licença de Conteúdo</span>
                            <span>Ao publicar conteúdo no Bika News, você:</span>
                            <ul className="list-disc flex flex-col gap-2 bg-purple-50 flex-1 rounded-lg ml-5">
                                <li className="items-center gap-2">Mantém todos os direitos autorais de seu conteúdo</li>
                                <li className="items-center gap-2">Concede ao Bika News uma licença mundial, não exclusiva, para usar, reproduzir e distribuir seu conteúdo na plataforma</li>
                                <li className="items-center gap-2">Garante que possui os direitos necessários para publicar o conteúdo</li>
                                <li className="items-center gap-2">Permite que seu conteúdo seja compartilhado por leitores</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                        <GitPullRequestArrow size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">6. Processo de Moderação</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-4">
                            <span>Todo conteúdo submetido passa por revisão antes da publicação. Nossa equipe de moderação pode:</span>
                            <ul className="list-disc flex flex-col gap-2 flex-1 rounded-lg">
                                <li className="flex flex-row items-center gap-2">
                                    <span className="text-white bg-[#fa6732] px-2 rounded-full">1</span>
                                    <span>Aprovar artigos que atendam às diretrizes</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <span className="text-white bg-[#fa6732] px-2 rounded-full">2</span>
                                    <span>Sugerir edições para melhorar a qualidade</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <span className="text-white bg-[#fa6732] px-2 rounded-full">3</span>
                                    <span>Rejeitar conteúdo que viole nossas diretrizes</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <span className="text-white bg-[#fa6732] px-2 rounded-full">4</span>
                                    <span>Remover conteúdo já publicado se necessário</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <MonitorX size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">7. Suspensão e Encerramento</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Reservamo-nos o direito de suspender ou encerrar sua conta se você violar estes termos. Violações graves podem resultar em banimento permanente e remoção de todo conteúdo associado.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Bug size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">8. Isenção de Responsabilidade</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 bg-blue-50 p-5 border border-blue-200 rounded-md gap-4">
                            <span>O Bika News é fornecido "como está". Não garantimos que:</span>
                            <ul className="list-disc flex flex-col gap-2 bg-purple-50 flex-1 rounded-lg ml-10">
                                <li className="items-center gap-2">O serviço será ininterrupto ou livre de erros</li>
                                <li className="items-center gap-2">Todo conteúdo publicado seja 100% preciso</li>
                                <li className="items-center gap-2">Defeitos serão corrigidos imediatamente</li>
                            </ul>
                            <span>Não nos responsabilizamos por danos decorrentes do uso ou incapacidade de usar nossos serviços.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <FilePen size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">9. Modificações dos Termos</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Podemos modificar estes termos a qualquer momento. Alterações significativas serão notificadas através de email ou aviso na plataforma. O uso continuado após as alterações constitui aceitação dos novos termos.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Gavel size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">10. Lei Aplicável</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Estes termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão resolvidas nos tribunais de São Paulo, SP.</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col bg-[#fa6732] text-white p-5 gap-4 rounded-lg mt-6">
                        <h3 className="text-2xl font-medium">Dúvidas sobre os Termos?</h3>
                        <span>Se você tiver perguntas sobre estes Termos de Uso, entre em contato:</span>
                        <ul className="flex flex-col gap-2">
                            <li>📧 Email: privacidade@bikanews.com</li>
                            <li>📱 Telefone: +55 (11) 1234-5678</li>
                            <li>📍 Endereço: São Paulo, SP - Brasil</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}