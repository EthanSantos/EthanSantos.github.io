import React from 'react'

const Pill = ({text}) => {
    return (
        <div className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {text}
        </div>
    )
}

export default Pill
