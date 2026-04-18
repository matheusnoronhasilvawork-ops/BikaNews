import Footer from "./components/footer";
import Header from "./components/header";
import { Heart, Medal, Target, Users } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col w-full bg-gray-50 items-center justify-start py-5 gap-6">
                <div className="flex flex-col w-200 h-full items-start bg-white shadow-md p-10 rounded-2xl gap-4">
                    <h1 className="text-5xl font-medium">Sobre nós</h1>
                    <p className="text-md text-gray-600">O Bika News é uma plataforma de notícias open-source, construída para democratizar a informação e dar voz a diversos colunistas ao redor do mundo.</p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 text-white my-6">
                        <div className="flex flex-col bg-[#fa6732] rounded-lg py-4 px-6 items-start justify-center gap-2">
                            <Users size={40} />
                            <h2 className="text-2xl font-medium">Comunidade</h2>
                            <span className="text-sm">Mais de 500 colunistas contribuindo com conteúdo de qualidade diariamente</span>
                        </div>
                        <div className="flex flex-col bg-blue-500 rounded-lg py-4 px-6 items-start justify-center gap-2">
                            <Target size={40} />
                            <h2 className="text-2xl font-medium">Missão</h2>
                            <span className="text-sm">Promover jornalismo livre, acessível e de qualidade para todos</span>
                        </div>
                        <div className="flex flex-col bg-green-500 rounded-lg py-4 px-6 items-start justify-center gap-2">
                            <Medal size={40} />
                            <h2 className="text-2xl font-medium">Excelência</h2>
                            <span className="text-sm">Compromisso com a verdade, precisão e imparcialidade em cada notícia</span>
                        </div>
                        <div className="flex flex-col bg-purple-500 rounded-lg py-4 px-6 items-start justify-center gap-2">
                            <Heart size={40} />
                            <h2 className="text-2xl font-medium">Valores</h2>
                            <span className="text-sm">Transparência, ética e respeito à diversidade de opiniões</span>
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium">Nossa História</h3>
                    <p className="text-md text-gray-600">Fundado em 2024, o Bika News nasceu da necessidade de criar uma plataforma onde qualquer pessoa com conhecimento e paixão pela escrita pudesse compartilhar suas perspectivas sobre os acontecimentos do mundo.</p>
                    <p className="text-md text-gray-600">Inspirados no modelo colaborativo da Wikipedia, decidimos aplicar os mesmos princípios ao jornalismo: open-source, transparente e alimentado pela comunidade. Cada artigo passa por uma revisão cuidadosa antes da publicação, garantindo qualidade e credibilidade.</p>
                    <h3 className="text-3xl font-medium mt-6">Como funciona</h3>
                    <div className="flex flex-col bg-blue-50 border-l-8 mb-6 gap-4 w-full py-5 px-5 h-fit border-blue-700">
                        <div className="flex flex-row w-full gap-2 items-center">
                            <span className="bg-blue-700 text-white flex items-center justify-center px-2 rounded-full">1</span>
                            <span className="text-black"><span className="font-bold">Cadastro: </span>Qualquer pessoa pode se registrar como colunista gratuitamente</span>
                        </div>
                        <div className="flex flex-row w-full gap-2 items-center">
                            <span className="bg-blue-700 text-white flex items-center justify-center px-2 rounded-full">2</span>
                            <span className="text-black"><span className="font-bold">Escrita: </span>Os colunistas criam seus artigos usando nossa interface intuitiva</span>
                        </div>
                        <div className="flex flex-row w-full gap-2 items-center">
                            <span className="bg-blue-700 text-white flex items-center justify-center px-2 rounded-full">3</span>
                            <span className="text-black"><span className="font-bold">Revisão: </span>Nossa equipe de moderadores analisa o conteúdo antes da publicação</span>
                        </div>
                        <div className="flex flex-row w-full gap-2 items-center">
                            <span className="bg-blue-700 text-white flex items-center justify-center px-2 rounded-full">4</span>
                            <span className="text-black"><span className="font-bold">Publicação: </span>Artigos aprovados são publicados na plataforma</span>
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium">Junte-se a nós</h3>
                    <p className="text-md text-gray-600 ">Se você tem paixão por escrever e quer compartilhar suas ideias com o mundo, o Bika News é o lugar certo. Cadastre-se hoje mesmo e faça parte da nossa comunidade de jornalistas cidadãos.</p>
                    <div className="flex flex-row items-start">
                        <span className="bg-[#fa6732] px-5 py-3 text-white rounded-md">Torne-se um colunista</span>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}