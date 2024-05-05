import React from 'react'

export default function Header() {
return (
    <header>
        <div className="w-full h-5 sm:h-8 bg-coral justify-center flex justify-center items-center">
            <p className='mx-auto text-xs sm:text-sm text-white font-bold'>
                sda
            </p>
        </div>
        <div className='flex flex-row p-3.5'>
            <button>
                <img
                src='/img/icon_menu.png'
                alt="Ícone de menu"
                className="w-[24px] sm:w-[40px]"
                />
            </button>
            <img
                src='/img/img_banner.png'
                alt="Ícone de menu"
                className="w-[121px] sm:w-[234px] flex mx-auto"
            />
        </div>
    </header>
)
}