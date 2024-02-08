import { useContext } from "react"
import { usuarioContext } from "../contexts/UsuarioContext"

export function Avatar() {
    const {avatarUrl, alterarNome} = useContext(usuarioContext)
    
    return (
        <img src={avatarUrl} alt="" />
    )
}