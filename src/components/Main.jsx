import { CssIcon, GitHubIcon, HtmlIcon, JsIcon, LinkedinIcon, ReactIcon} from "./icons"
import pdf from '../pdf/Marcos-Muñoz-CV2023.pdf'
import marcos from '../img/anonimo.webp'
import calculadora from '../img/calculadora.png'

export default function Main () {
    return(
        <main className="mr-10 ml-10">
            <section className="mt-10">
                <h2 className="font-extrabold text-3xl">Marcos Muñoz</h2>
                <h3 className="font-bold text-xl">web developer</h3>
                <br/>
                <section className="flex items-center gap-2">
                    <button href='../pdf/Marcos-Muñoz-CV2023.pdf' className="border rounded hover:bg-sky-700 bg-sky-500 pr-2 pl-2 pt-1 pb-1" > <a href={pdf}>Descargar CV</a> </button>
                    <a href="https://github.com/fronux2"><GitHubIcon/></a> 
                    <a href="https://www.linkedin.com/in/marcos-mu%C3%B1oz-gonzalez-a32888270/"><LinkedinIcon/></a>
                    
                </section>
            </section>

            <h2 className="font-extrabold text-2xl mt-10">Acerca de mi</h2>

            <section className="flex items-center mt-6 gap-6">                
                <img src={marcos} className="w-52 h-20" alt="Marcos Munoz"/>      
                <p className="text-xs max-w-xl">Egresado del Instituto Duoc UC como Técnico Analista Programador.<br/>
                    Mi perfil profesional se centra en el desarrollo tanto front-end como back-end, y mi lenguaje principal es JavaScript.<br/>
                    Esta combinación de habilidades me permite abordar una amplia gama de aspectos en el desarrollo web.</p>          
            </section>

            <h2 className="font-extrabold text-2xl mt-10">Proyectos</h2>
            <section className="flex gap-4 mt-10">                
                <section className="flex flex-row  border-4 w-36 h-52 overflow-hidden">
                    <article className="divide-y">
                        <section className="flex h-16 w-full justify-center items-center">
                            <img src={calculadora} className="w-full h-full object-cover object-center" alt="calculadora"/>
                        </section>
                        
                        <h3 className="mt-1 font-bold">Calculadora</h3>
                        <p className="text-xs max-w-xl mt-1">Calculadora basica con un estilo minimalista.</p>
                        <section className="flex mt-1">
                            <JsIcon/>
                            <HtmlIcon/>
                            <CssIcon/>
                            <ReactIcon/>                            
                        </section>
                        <section className="flex justify-center items-center gap-2 pt-1 pb-1 text-xs">
                            <button className="border-2 p-0 border-fuchsia-600"><a href="http://fronux2.github.io/calculadora-react/">DEMO</a></button>
                            <button className="border-2 p-0 border-fuchsia-600"><a href="https://github.com/fronux2/calculadora-react">GITHUB</a></button>
                        </section>
                    </article>
                </section>
                <section className="flex flex-row  border-4 w-36 h-52 overflow-hidden">
                    <article className="divide-y">
                        <section className="flex h-16 w-full justify-center items-center">
                            <img src={calculadora} className="w-full h-full object-cover object-center" alt="calculadora"/>
                        </section>
                        
                        <h3 className="mt-1 font-bold">Calculadora</h3>
                        <p className="text-xs max-w-xl mt-1">Calculadora basica con un estilo minimalista.</p>
                        <section className="flex mt-1">
                            <JsIcon/>
                            <HtmlIcon/>
                            <CssIcon/>
                            <ReactIcon/>                            
                        </section>
                        <section className="flex justify-center items-center gap-2 pt-1 pb-1 text-xs">
                            <button className="border-2 p-0 border-fuchsia-600"><a href="http://fronux2.github.io/calculadora-react/">DEMO</a></button>
                            <button className="border-2 p-0 border-fuchsia-600"><a href="https://github.com/fronux2/calculadora-react">GITHUB</a></button>
                        </section>
                    </article>
                </section>
            </section>   
            <h2 className="font-extrabold text-2xl mt-10">Tecnologias</h2>  
        </main>
    )
}