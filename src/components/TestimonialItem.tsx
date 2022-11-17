export const TestimonialItem = () => {
    return(
        <div className="bg-neutral-600 border-2 border-cyan-400 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
            <img className="w-36 h-36 rounded-full mx-auto border-2 border-cyan-200 md:rounded-none md:w-48 md:h-auto" src="/mypic.jpeg" alt="" />
            <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="tex-gray-700 text-lg font-semibold">
            "Conheci o Web development aos 52, me apaixonei pelo Front End e iniciei uma nova carreira. Por que? 
            Por que não?"
        </div>
        
        <div className="font-medium ">
        <div className="text-cyan-400 font-bold">Me Myself e Euzinha</div>
        <div className="text-gray-900">Front End Dev 2023</div>
        </div>
        </div>
        </div>
    )
}