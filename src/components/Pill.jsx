import React from 'react'

const Pill = ({text}) => {
    return (
        <div className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 transform transition-transform duration-300 hover:bg-gray-300 hover:shadow-lg">
            {text}
        </div>
    )
}

export default Pill
