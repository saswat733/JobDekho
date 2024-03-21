import React from 'react'

const SelectInput = ({
    label,
    id,
    value,
    onChange,
    options,
    isRequired,
    optgroup,
    className,
    description,

}) => {
  return (
    <div className={`${className}`}>
        <label className='flex font-medium gap-2' htmlFor={id}>
            {isRequired && <span className='text-green-500'>*</span>}
            {label}
        </label>
        {
            description && (
                <span className='text-gray-500 text-sm ml-1.5'>{description}</span>
            )
        }
        <select
         id={id}
         name={id}
         value={value}
         onChange={onChange}
         className="w-full p-2 rounded-sm border font-normal border-gray-400 bg-white my-2 overflow-auto"
         required={isRequired}
        >
            {optgroup
          ? options.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))
          : options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}

        </select>

    </div>
  )
}

export default SelectInput