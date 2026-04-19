import { Shield, Lock, Eye, UserCheck, Check, Database, Cookie, BrickWallShield, Baby, Siren } from "lucide-react";
import Footer from "./components/footer";
import Header from "./components/header";

export default function PrivacyPolicies() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col w-full bg-gray-50 items-center justify-start py-5 gap-6">
                <div className="bg-white w-200 h-full items-start shadow-md p-10 rounded-2xl flex flex-col gap-4">
                    <h1 className="text-5xl font-medium">Política de Privacidade</h1>
                    <span className="text-gray-600">Última atualização: 10 de Abril de 2026</span>
                    <div className="flex flex-row w-full gap-4">
                        <div className="flex flex-col flex-1 text-white bg-[#fa6732] rounded-lg py-4 px-6 items-start justify-center gap-2">
                            <Shield size={40} className="" />
                            <span>Seus dados estão protegidos</span>
                        </div>
                        <div className="flex flex-col flex-1 text-white bg-blue-500 rounded-lg py-4 px-6 items-start justify-center gap-2">
                            <Lock size={40} className="" />
                            <span>Criptografia de ponta</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Eye size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">1. Informações que Coletamos</h2>
                        </div>
                        <div className="flex flex-col text-gray-600">
                            <span>Coletamos diferentes tipos de informações para fornecer e melhorar nosso serviço:</span>
                            <ul className="list-disc gap-2 flex flex-col ml-5">
                                <li className="">
                                    <span><span className="font-bold">Informações de Registro: </span>Nome, email, senha (criptografada)</span>
                                </li>
                                <li className="">
                                    <span><span className="font-bold">Conteúdo Criado: </span>Artigos, comentários e interações na plataforma</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <UserCheck size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">2. Como Usamos suas Informações</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Utilizamos suas informações pessoais para:</span>
                            <ul className="gap-2 flex flex-col bg-blue-50 border-l-8 w-full py-5 px-5 border-blue-700">
                                <li className="flex flex-row">
                                    <Check size={20} className="text-blue-700 mr-2" />
                                    <span>Fornecer e manter nosso serviço</span>
                                </li>
                                <li className="flex flex-row">
                                    <Check size={20} className="text-blue-700 mr-2" />
                                    <span>Notificá-lo sobre mudanças em seu conteúdo</span>
                                </li>
                                <li className="flex flex-row">
                                    <Check size={20} className="text-blue-700 mr-2" />
                                    <span>Fornecer suporte ao cliente</span>
                                </li>
                                <li className="flex flex-row">
                                    <Check size={20} className="text-blue-700 mr-2" />
                                    <span>Monitorar o uso da plataforma</span>
                                </li>
                                <li className="flex flex-row">
                                    <Check size={20} className="text-blue-700 mr-2" />
                                    <span>Análise de dados para melhorar nossos serviços</span>
                                </li>
                                <li className="flex flex-row">
                                    <Check size={20} className="text-blue-700 mr-2" />
                                    <span>Detectar, prevenir e resolver problemas técnicos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Database size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">3. Compartilhamento de Dados</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Nós <span className="font-bold">NÃO </span>vendemos, trocamos ou transferimos suas informações pessoais para terceiros. Seus dados podem ser compartilhados apenas nas seguintes situações:</span>
                            <ul className="list-disc flex flex-col gap-2 ml-5">
                                <li className="">Com seu consentimento explícito</li>
                                <li className="">Para cumprir obrigações legais</li>
                                <li className="">Para proteger nossos direitos e segurança</li>
                                <li className="">Com provedores de serviço que nos ajudam a operar a plataforma (sob acordo de confidencialidade)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <BrickWallShield size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">4. Segurança dos Dados</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>A segurança de suas informações é importante para nós. Implementamos medidas de segurança apropriadas:</span>
                            <div className="w-full flex flex-row gap-4">
                                <div className="flex flex-col gap-2 bg-green-50 flex-1 py-5 px-5 border border-green-300 rounded-lg">
                                    <span className="text-green-700 font-medium text-lg">Proteção técnica</span>
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Criptografia</span>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Senhas com hash</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 bg-purple-50 flex-1 py-5 px-5 border border-purple-300 rounded-lg">
                                    <span className="text-purple-700 font-medium text-lg">Proteção Organizacional</span>
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Acesso restrito</span>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <Check />
                                            <span>Treinamento de equipe</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <BrickWallShield size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">5. Seus Direitos</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os seguintes direitos:</span>
                            <ul className="list-disc flex flex-col gap-2 bg-purple-50 flex-1 py-5 px-5 rounded-lg">
                                <li className="flex flex-row items-center gap-2">
                                    <Check size={30} className="text-white bg-[#fa6732] p-1.5 rounded-full" />
                                    <span><span className="font-bold">Acesso: </span>Solicitar uma cópia de seus dados pessoais</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <Check size={30} className="text-white bg-[#fa6732] p-1.5 rounded-full" />
                                    <span><span className="font-bold">Correção: </span>Atualizar ou corrigir informações incorretas</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <Check size={30} className="text-white bg-[#fa6732] p-1.5 rounded-full" />
                                    <span><span className="font-bold">Exclusão: </span>Solicitar a remoção de seus dados</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <Check size={30} className="text-white bg-[#fa6732] p-1.5 rounded-full" />
                                    <span><span className="font-bold">Revogação: </span>Retirar consentimento a qualquer momento</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Baby size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">6. Menores de idade</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Nossos serviços não são direcionados a menores de 12 anos. Não coletamos intencionalmente informações de menores. Se descobrirmos que coletamos dados de um menor, tomaremos medidas para excluí-los imediatamente.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-row items-center gap-4">
                            <Siren size={30} className="text-[#fa6732]" />
                            <h2 className="text-3xl font-medium">7. Alterações nesta Política</h2>
                        </div>
                        <div className="flex flex-col text-gray-600 gap-2">
                            <span>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e atualizando a data de "Última atualização".</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col bg-[#fa6732] text-white p-5 gap-4 rounded-lg mt-6">
                        <h3 className="text-2xl font-medium">Entre em contato</h3>
                        <span>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</span>
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