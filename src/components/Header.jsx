export default function Header () {
    return (
    <header className="bg-slate-500 flex gap-6 h-16 justify-center items-center">
        <h1>{'<Marcos Muñoz/>'}</h1>
        <nav className="">
            <ul className="flex gap-2">
                <li className="flex-1"><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
)
}
