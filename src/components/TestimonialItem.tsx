export const TestimonialItem = () => {
    return(
        <div className="bg-purple-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
            <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src="/mypic.jpeg" alt="" />
            <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="tex-gray-700 text-lg font-semibold">
            "Conheci o Web development aos 52, me apaixonei pelo Front End e iniciei uma nova carreira. Por que? 
            Porque não?"
        </div>
        
        <div className="font-medium ">
        <div className="text-purple-700 font-bold">Me Myself e Euzinha</div>
        <div className="text-gray-500">Front End Dev 2023</div>
        </div>
        </div>
        </div>
    )
}