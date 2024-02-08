import { useContext } from "react"
import { usuarioContext } from "../contexts/UsuarioContext"

export function Usuario() {
    const {nome} = useContext(usuarioContext)

    return (
        <h1>{nome}</h1>
    )
}