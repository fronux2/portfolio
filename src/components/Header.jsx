export default function Header ({darkMode,bgWeb}) {
    return (
    <header className=" flex gap-6 h-24 justify-center items-center fixed inset-x-0 top-0">
        <nav className="bg-slate-900 rounded-2xl opacity-95"> 
            <ul className="flex gap-2 text-white ">
                <li className="flex-1 rounded-2xl hover:bg-slate-600 p-1" onClick={darkMode}><a>DarkMode</a></li>
                <li className="flex-1 rounded-2xl hover:bg-slate-600 p-1"><a href="#home">Inicio</a></li>
                <li className="bg-slate-900 rounded-2xl hover:bg-slate-600 p-1"><a href="#about">Acerca de</a></li>
                <li className="bg-slate-900 hover:bg-slate-600 p-1 rounded-2xl"><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    )
}