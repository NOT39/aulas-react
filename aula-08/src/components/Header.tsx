import { Navbar } from "./NavBar";
import { Usuario } from "./Usuario";


export function Header() {
    return (
        <header>
            <Navbar/>
            <Usuario/>
        </header>
    )
}