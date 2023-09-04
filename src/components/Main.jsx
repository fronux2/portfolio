import { ContacGoogle, ContacIcon, CssIcon, DiscordIcon, GitHubIcon, HtmlIcon, JsIcon, LinkedinIcon, NextIcon, ReactIcon, TailwindIcon, WhatsappIcon} from "./icons"
import pdf from '../pdf/Marcos-Muñoz-CV2023.pdf'
import marcos from '../img/Marcos-Munoz.jpg'
import calculadora from '../img/calculadora.png'
import Card from "./Card"

export default function Main () {
    return(
        <main id='home' className="mr-10 ml-10">            
            <section className="pt-20">
                <h2  className="font-extrabold text-4xl dark:text-teal-100">Marcos Muñoz</h2>
                <h3 className="font-bold text-2xl dark:text-teal-600">Desarrollador web</h3>
                <br/>
                <section className="flex items-center gap-2">
                <a href={pdf}><button href='../pdf/Marcos-Muñoz-CV2023.pdf' className="border rounded hover:bg-teal-700 bg-teal-500 pr-2 pl-2 pt-1 pb-1" >Descargar CV</button></a>
                    
                    <a href="https://github.com/fronux2"><GitHubIcon/></a> 
                    <a href="https://www.linkedin.com/in/marcos-mu%C3%B1oz-gonzalez-a32888270/"><LinkedinIcon/></a>                    
                </section>
            </section>
            <h2 className="font-extrabold text-4xl mt-20 dark:text-teal-100" id='about'>Sobre mí</h2>
            <section className="flex items-center mt-6 gap-1 w-full h-60">                
                <img src={marcos} className="w-1/3 h-auto" alt="Imagen Perfil Marcos Munoz"/>      
                <section className="flex flex-col font-bold justify-center h-full">
                <p className="pb-1 text-xs text-center dark:text-teal-100">
                    Desarrollador con enfoque en JavaScript para la creación de aplicaciones web completas.
                </p>  
                <p className="pb-1 text-xs text-center dark:text-teal-100">
                    Resido en Santiago de Chile, en la Comuna de San Bernardo.
                </p>  
                <p className="pb-1 text-xs text-center dark:text-teal-100">
                    Soy egresado del Instituto Duoc UC como Técnico Analista Programador Computacional.
                </p>                     
            </section>                 
            </section>
            <h2 className="font-extrabold text-4xl mt-20 dark:text-teal-100 ">Proyectos</h2>
            <section className="flex gap-4 mt-10 ">                
                <Card calculadora={calculadora} titulo={'Calculadora'} detalle={'Calculadora básica con un estilo minimalista.'}>
                            <JsIcon/>
                            <HtmlIcon/>
                            <CssIcon/>
                            <ReactIcon/> 
                </Card>
                <Card calculadora={calculadora} titulo={'Calculadora'} detalle={'Calculadora básica con un estilo minimalista.'}>
                            <JsIcon/>
                            <HtmlIcon/>
                            <CssIcon/>
                            <ReactIcon/> 
                </Card>
            </section>   
            <h2 className="font-extrabold text-4xl mt-24 dark:text-teal-100">Tecnologías</h2>  
            <sectiont className="grid grid-cols-3 mt-10 ">
                <CssIcon className="w-16 h-16 mb-7" />
                <GitHubIcon className="w-16 h-16 mb-7"/>
                <HtmlIcon className="w-16 h-16 mb-7"/>
                <ReactIcon className="w-16 h-16 mb-7 text-sky-500"/>    
                <JsIcon className="w-16 h-16 mb-7"/>      
                <NextIcon className="w-16 h-16 mb-7 border"/>  
            </sectiont>
            <h2 className="font-extrabold text-4xl mt-24 dark:text-teal-100" id='contacto'>Contacto</h2>
            <section className="flex flex-col mt-10 mb-32">
                <a href="mailto:marcosantonio.munozg@gmail.com">
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <ContacIcon/>Contáctame vía correo
                    </button>
                </a>
                   
            </section>
            
        </main>
    )
}