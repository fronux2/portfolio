export default function Header () {
    return (
    <header className=" flex gap-6 h-24 justify-center items-center fixed inset-x-0 bottom-0">
        <nav className="bg-slate-900 rounded-2xl opacity-95 p-2"> 
            <ul className="flex gap-2 text-white ">
                <li className="flex-1"><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    )
}