export default function Card ({calculadora, children, titulo, detalle}){
    return(
            <section className="flex flex-row  border-4 w-auto h-56 overflow-hidden">
                <article className="">
                    <section className="flex h-16 w-full justify-center items-center">
                        <img src={calculadora} className="w-full h-full object-cover object-center" alt="calculadora"/>
                    </section>
                    
                    <h3 className="mt-1 font-bold">{titulo}</h3>
                    <p className="text-xs max-w-xl mt-1">{detalle}</p>
                    <section className="flex mt-3">
                        {children}                           
                    </section>
                    <section className="flex justify-center items-center gap-2 mt-3 w-full text-xs">
                        <button className="border-2 p-1 border-fuchsia-600"><a href="http://fronux2.github.io/calculadora-react/">DEMO</a></button>
                        <button className="border-2 p-1 border-fuchsia-600"><a href="https://github.com/fronux2/calculadora-react">GITHUB</a></button>
                    </section>
                </article>
            </section>
    )
}