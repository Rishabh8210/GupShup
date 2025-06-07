export const NextButton = () => {
    return (
        <button
            className="py-2 flex px-5 h-10 w-32 rounded-full items-center justify-center gap-1.5 bg-orange-500 font-semibold border border-black hover:bg-blue-500 duration-800 cursor-pointer relative group overflow-hidden"
        >
            <span className="absolute top-full left-1/2 -translate-x-1/2 rounded-full w-60 h-60 bg-blue-600 transition-all duration-900 ease-in-out group-hover:-top-10 z-0"></span>
            <p className="font-semibold relative z-10 group-hover:text-white">Next</p>
        </button>
    )
}
