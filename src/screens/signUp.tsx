import BikaNews from "../assets/bikaNews.png";
import { Eye, Mail, UserRoundPlus, Lock } from "lucide-react";
import axios from "axios";
import { useState } from "react";



async function createUser(name: string, email: string, password: string, confirmPassword: string, role_id: number) {

    try {

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Preencha todos os campos")
            return
        } else if (name.length < 3 || name.length > 100 || email.length > 100 || password.length < 5 || password.length > 20) {
            alert("Os campos têm tamanho inválido")
            return
        } else if (password !== confirmPassword) {
            alert("As senhas não coincidem")
            return
        } else {
            const response = await axios.post("http://localhost:3000/signup", {
                name: name,
                email: email,
                password: password,
                role_id: role_id
            })

            alert(response.data.message)
        }
    } catch (error) {
        alert(error)
    }

}
export default function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState(3)

    function handleSubmit(e: any) {
        e.preventDefault()
        createUser(name, email, password, confirmPassword, role)
    }

    return (
        <div className="h-screen bg-gray-100 pb-5 pt-2  flex flex-col items-center overflow-hidden justify-center relative">
            <div className="bg-[#fa6732] h-180 -bottom-100 -left-80 w-180 rounded-full absolute" />
            <div className="bg-[#fa6732] h-180 -top-100 -right-80 w-180 rounded-full absolute" />
            <div className="w-100 h-full items-center justify-center flex flex-col">
                <div className="flex flex-col items-center justify-center gap-2 mb-5">
                    <h1 className="text-3xl font-bold">Crie sua conta</h1>
                    <h2 className="text-sm">Cadastre-se e comece a escrever hoje mesmo</h2>
                </div>
                <div className="flex flex-col w-full bg-white px-6 py-4 h-fit rounded-2xl shadow-md">
                    <form onSubmit={handleSubmit} action="createUser" className="flex flex-col h-full w-full gap-2 items-center">
                        <div className="flex flex-col gap-2 w-full h-fit">
                            <span className="text-sm font-medium">Nome completo</span>
                            <div className="flex flex-row border h-full border-gray-300 rounded-lg p-3 gap-3 items-center">
                                <input className="outline-none w-full text-sm" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full h-fit">
                            <span className="text-sm font-medium">Email</span>
                            <div className="flex flex-row border h-full border-gray-300 rounded-lg p-3 gap-3 items-center">
                                <Mail size={15} className="text-gray-400" />
                                <input className="outline-none w-full text-sm" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full h-fit">
                            <span className="text-sm font-medium">Senha</span>
                            <div className="flex flex-row border h-full border-gray-300 rounded-lg p-3 gap-3 items-center">
                                <Lock size={20} className="text-gray-400" />
                                <input className="outline-none w-full text-sm" placeholder="sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Eye size={20} className="text-gray-400 outline-none display-none ml-auto" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full h-fit">
                            <span className="text-sm font-medium">Confirmar senha</span>
                            <div className="flex flex-row border h-full border-gray-300 rounded-lg p-3 gap-3 items-center">
                                <Lock size={20} className="text-gray-400" />
                                <input className="outline-none w-full text-sm" placeholder="sua senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <Eye size={20} className="text-gray-400 outline-none display-none ml-auto" />
                            </div>
                        </div>
                        <button className="text-white bg-[#fa6732] h-10 hover:bg-[#c64f24] hover:scale-103 transition duration-300 rounded-lg px-4 py-2 w-full flex flex-row mt-2 items-center justify-center gap-2 cursor-pointer">
                            <UserRoundPlus size={20} />
                            <span>Criar conta</span>
                        </button>
                        <div className="flex flex-row items-center w-full">
                            <div className="h-0.5 w-full bg-gray-100" />
                            <span className="px-3">ou</span>
                            <div className="h-0.5 w-full bg-gray-100" />
                        </div>
                        <div className="flex flex-row w-full items-center gap-4">
                            <div className="flex flex-row gap-2 border border-gray-300 rounded-lg px-3 py-2 items-center flex-1 justify-center cursor-pointer hover:bg-gray-100 transition duration-300">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                    alt="Google"
                                    className="w-6 h-6"
                                />
                                <span>Google</span>
                            </div>
                            <div className="flex flex-row gap-2 border border-gray-300 rounded-lg px-3 py-2 items-center flex-1 justify-center cursor-pointer hover:bg-gray-100 transition duration-300">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                    className="w-6 h-6 rounded-full"
                                />
                                <span>Facebook</span>
                            </div>
                        </div>
                        <span className="text-sm">Já tem uma conta? <span className="text-[#fa6732] hover:text-[#c64f24] cursor-pointer font-medium">Faça login </span> </span>
                    </form>
                </div>
                <div className="flex flex-row gap-4 text-[0.75rem] text-gray-600 mt-6">
                    <span className="hover:text-[#fa6732] cursor-pointer">Privacidade</span>
                    <span>•</span>
                    <span className="hover:text-[#fa6732] cursor-pointer">Termos</span>
                    <span>•</span>
                    <span className="hover:text-[#fa6732] cursor-pointer">Ajuda</span>
                </div>
            </div>
        </div>
    )
}