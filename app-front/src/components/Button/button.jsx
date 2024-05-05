import React from 'react'

export default function Button({type, colorButton, colorBorder, children}) {
return (
    <button type={type} className={`sm:w-56 w-32 sm:h-12 h-8 ${colorButton} rounded-[15px] text-black font-bold text-xs sm:text-base border border-solid ${colorBorder}`}>
        {children}
    </button>
)
}