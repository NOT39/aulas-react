import { createContext, useState } from "react";

type UsuarioContextType = {
    nome: string
    avatarUrl: string
    alterarNome: (nome: string) => void
}

export const usuarioContext = createContext<UsuarioContextType>({} as UsuarioContextType)

type UsuarioContextProviderProps = {
    children: React.ReactNode
}

export function UsuarioContextProvider({children}: UsuarioContextProviderProps) {
    const [nome, setNome] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')

    function alterarNome(nome: string) {
        setNome(nome)
    }
    
    return (
        <usuarioContext.Provider value={{nome, avatarUrl, alterarNome}}>
            {children}
        </usuarioContext.Provider>
    )
}