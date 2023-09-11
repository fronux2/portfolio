import { ContacGoogle, ContacIcon, CssIcon, DiscordIcon, GitHubIcon, HtmlIcon, JsIcon, LinkedinIcon, NextIcon, ReactIcon, TailwindIcon, WhatsappIcon} from "./icons"
import pdf from '../pdf/Marcos-Muñoz-CV2023.pdf'
import marcos from '../img/marcos.jpg'
import marcosAvif from '../img/marcos.avif'
import marcosWebp from '../img/marcos.webp'
import marcosWebp2 from '../img/marcos2.webp'
import calculadora from '../img/calculadora.png'
import Card from "./Card"

export default function Main () {
    return(
        <main id='home' className="mr-10 ml-10  lg:ml-40 lg:mr-40">            
            <section className="pt-20">
                <h2  className="font-extrabold text-4xl  md:text-6xl lg:text-7xl dark:text-teal-100 sm:text-fuchsia-700">Marcos Muñoz</h2>
                <h1 className="font-bold text-2xl sm:text-3xl dark:text-teal-600">Desarrollador web</h1>
                
                <section className="flex items-center gap-2 sm:mt-12 mt-10">
                    <a href={pdf}>                    
                        <button href='../pdf/Marcos-Muñoz-CV2023.pdf' className="border rounded lg:text-2xl text-lg transform hover:scale-110 hover:bg-teal-700 bg-teal-500 pr-2 pl-2 pt-1 pb-1 transition-colors">Descargar CV</button>
                    </a>                    
                    <a href="https://github.com/fronux2"><GitHubIcon className={'w-10 h-10 lg:w-12 lg:h-12 mr-2 hover:text-lime-500 transform hover:scale-125 transition-colors'}/></a> 
                    <a href="https://www.linkedin.com/in/marcos-mu%C3%B1oz-gonzalez-a32888270/"><LinkedinIcon className='w-10 h-10 lg:w-12 lg:h-12 mr-2 hover:text-violet-500 transform hover:scale-125 transition-colors'/></a>                    
                </section>
            </section>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-7xl mt-20 dark:text-teal-100" id='about'>Sobre mí</h2>
            <section className="flex mt-6 h-72 sm:gap-8 sm:h-96 lg:w-max lg:gap-16 lg:h-96 items-center gap-2">
                <picture className="w-52 h-56 lg:h-80 lg:w-64 flex justify-center items-center">
                    <source srcSet={marcosAvif}  type="image/avif" alt="imagen perfil"></source> 
                    <img src={marcosWebp2} alt="imagen perfil"/>
                </picture>                
                
                <section className="flex flex-col gap-1 sm:gap-2 lg:gap-4 w-96 justify-center">
                    <p className="text-xs dark:text-slate-300 font-medium sm:text-sm lg:text-lg">
                        Desarrollador con enfoque en JavaScript para la creación de aplicaciones web completas.
                    </p>
                    <p className="text-xs dark:text-slate-300 font-medium sm:text-sm lg:text-lg">
                        Resido en Santiago de Chile, en la Comuna de San Bernardo.
                    </p>
                    <p className="text-xs dark:text-slate-300 font-medium sm:text-sm lg:text-lg">
                        Soy egresado del Instituto Duoc UC como Técnico Analista Programador Computacional.
                    </p>                     
                </section>                 
            </section>
            <h2 className="font-extrabold text-4xl mt-20 dark:text-teal-100 sm:text-5xl lg:text-7xl">Proyectos</h2>
            <section className="flex gap-4 mt-10 sm:mt-20">                
                <Card calculadora={calculadora} titulo={'Calculadora'} detalle={'Calculadora básica con un estilo minimalista.'}>
                    <ReactIcon className="max-h-8 w-12 mt-1 mb-1 sm:mt-2"/>                             
                    <HtmlIcon className="max-h-12"/>
                    <CssIcon className="max-h-12"/>
                    <JsIcon className="max-h-12"/>
                            
                </Card>
                <Card calculadora={calculadora} titulo={'Calculadora'} detalle={'Calculadora básica con un estilo minimalista.'}>
                    <ReactIcon className="max-h-8 w-12 mt-1 mb-1 sm:mt-2"/>                             
                    <HtmlIcon className="max-h-12"/>
                    <CssIcon className="max-h-12"/>
                    <JsIcon className="max-h-12"/> 
                </Card>
            </section>   
            <h2 className="font-extrabold text-4xl mt-24 dark:text-teal-100 sm:text-5xl lg:text-7xl mb-20">Tecnologías</h2>  
            <sectiont className="grid grid-cols-3  sm:mt-20 justify-center items-center">
                <CssIcon className="w-16 h-16 sm:h-28 sm:w-28 sm:m-16 m-5" />
                <GitHubIcon className="w-16 h-16 sm:m-16 m-5 sm:h-28 sm:w-28"/>
                <HtmlIcon className="w-16 h-16 sm:m-16 m-5 sm:h-28 sm:w-28"/>
                <ReactIcon className="w-16 h-16 sm:m-16 m-5 sm:h-28 sm:w-28 text-sky-500"/>    
                <JsIcon className="w-16 h-16 sm:m-16 m-5 sm:h-28 sm:w-28"/>      
                <NextIcon className="w-16 h-16 sm:m-16 m-5 sm:h-28 sm:w-28"/>  
            </sectiont>
            <h2 className="font-extrabold text-4xl mt-24 dark:text-teal-100 sm:text-5xl lg:text-7xl" id='contacto'>Contacto</h2>
            <section className="flex flex-col mt-10 mb-32 sm:mt-20">
                <a href="mailto:marcosantonio.munozg@gmail.com">
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <ContacIcon/>Contáctame vía correo
                    </button>
                </a>
                   
            </section>
            
        </main>
    )
}