import React from 'react'

const CheckBoxLabel = ({text}) => {
    function formatLabel(text) {
        return text
          .replace(/_/g, " ")
          .replace(/\b\w/g, (match) => match.toUpperCase());
      }
      
  return (
    text && (
        <div className={`bg-[#22C55E] my-2 w-fit p-1 rounded-full px-2 flex items-center text-white gap-2`}>
            <i className="fa-solid fa-circle-check text-white"></i>
            <span className='text-sm font-semibold'>{formatLabel(text)}</span>
        </div>
    )
  )
}

export default CheckBoxLabel