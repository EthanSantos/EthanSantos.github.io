import React from 'react'

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
            <div className="relative m-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 aspect-w-20 aspect-h-10 md:aspect-w-40 md:aspect-h-10 md:w-1/2">
                <img
                    src={imageSrc}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-start w-full md:w-1/2 relative">
                <h6 className="mb-2 md:mb-4 block text-base md:text-lg font-semibold uppercase leading-relaxed tracking-normal text-black antialiased text-left">
                    {title}
                </h6>
                <p className="mb-2 block text-sm md:text-base font-normal leading-relaxed text-gray-500 antialiased text-left">
                    {description}
                </p>
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all"
                        type="button"
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
