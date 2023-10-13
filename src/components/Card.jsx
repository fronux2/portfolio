export default function Card ({calculadora, children, titulo, detalle ,hrefDemo, hrefGitHub}){
    return(
            <section className="flex w-56 h-64 sm:h-96 sm:w-56 border-teal-900 border-2 bg-indigo-600 dark:bg-teal-800 shadow-2xl rounded">
                <article className="max-w-xs flex flex-col">
                    <section className="flex h-16 w-full justify-center items-center sm:h-32 ">
                        <img src={calculadora} className="w-full h-full object-cover " alt="calculadora"/>
                    </section>
                    
                    <h3 className="mt-1 font-black dark:text-teal-100 sm:text-3xl sm:p-2">{titulo}</h3>
                    <p className="text-xs max-w-xl mt-1 font-bold dark:text-teal-100 sm:text-base sm:p-2">{detalle}</p>
                    <section className="flex mt-3 m-1 sm:gap-5">
                        {children}                           
                    </section>
                    <section className="flex justify-center m-1 flex-grow items-center gap-4 w-full text-xs md:text-lg sm:text-sm">
                        <button className="border-2 p-1  text-lg lg:text-2xl transform hover:scale-125 ease-in-out border-teal-900 bg-teal-500 hover:bg-teal-400"><a href={hrefDemo}>DEMO</a></button>
                        <button className="border-2 p-1 text-lg lg:text-2xl transform hover:scale-125 border-teal-900 bg-teal-500 hover:bg-teal-400"><a href={hrefGitHub}>GITHUB</a></button>
                    </section>
                </article>
            </section>
    )
}