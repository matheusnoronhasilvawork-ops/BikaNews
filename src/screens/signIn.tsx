import axios from "axios";
import BikaNews from "../assets/bikaNews.png";
import { Eye, Mail, ArrowRightToLine } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e:any){
        e.preventDefault()
        signIn(email, password)
    }
    async function signIn(email:string, password:string){
        
        try {
            
            if(password.length > 20){
                alert("senha deve ser menor que 20 caracteres")
            } else if(password.length < 5){
                alert("senha deve ter mais que 5 caracters")
            } else {

                const data = {
                    email: email,
                    password: password
                }

                const response = await axios.post("http://localhost:3000/signin", data)
                alert(response.data.message)
                navigate('/home')
            }
        } catch (error:any) {
            console.log(error)

            const errorMessage={
                message: error.response.data.error,
                status: error.response.status
            }

            alert(`Erro: ${errorMessage.status} - ${errorMessage.message}`)
        }
    }
    return (
        <div className="h-screen bg-gray-50 py-10 flex flex-col items-center justify-center">
            <div className="w-100 h-full items-center justify-center flex flex-col">
                <img className="w-40 h-30" src={BikaNews} alt="Bika News" />
                <div className="flex flex-col items-center justify-center gap-2 mb-5">
                    <h1 className="text-3xl font-bold">Bem-vindo de volta!</h1>
                    <h2 className="text-sm">Entre para acessar seu painel de colunista</h2>
                </div>
                <div className="flex flex-col w-full bg-white px-6 py-4 h-full rounded-2xl shadow-md">
                    <form onSubmit={handleSubmit} action="signIn" className="flex flex-col h-full w-full gap-4 items-center">
                        <div className="flex flex-col gap-2 w-full">
                            <span className="text-sm font-medium">Email</span>
                            <div className="flex flex-row border border-gray-300 rounded-lg p-3 gap-3 items-center">
                                <Mail size={20} className="text-gray-400" />
                                <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="outline-none w-full" placeholder="seu@email.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <span className="text-sm font-medium">Senha</span>
                            <div className="flex flex-row border border-gray-300 rounded-lg p-3 gap-3 items-center">
                                <Mail size={20} className="text-gray-400" />
                                <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="outline-none w-full" placeholder="sua senha" type="password" />
                                <Eye size={20} className="text-gray-400 outline-none display-none ml-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row w-full items-center justify-between">
                            <div className="flex flex-row gap-2 items-center">
                                <input type="checkbox" />
                                <span className="text-sm">Lembrar-me</span>
                            </div>
                            <span className="text-sm font-medium text-[#fa6732] hover:text-[#c64f24] cursor-pointer">Esqueceu a senha?</span>
                        </div>
                        <button className="text-white bg-[#fa6732] h-10 hover:bg-[#c64f24] hover:scale-103 transition duration-300 rounded-lg px-4 py-2 w-full flex flex-row items-center justify-center gap-2 cursor-pointer">
                            <ArrowRightToLine size={20} />
                            <span>Entrar</span>
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
                        <span className="text-sm">Não tem uma conta? <Link to={"/signup"} className="text-[#fa6732] hover:text-[#c64f24] cursor-pointer font-medium">Cadastre-se gratuitamente</Link> </span>
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