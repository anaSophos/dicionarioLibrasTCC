import React from 'react'

export default function InputMain() {
return (
    <div className='mx-auto mb-2.5 w-4/5 h-9 sm:h-12 bg-pastel-orange rounded-2xl border border-solid border-coral hover:border-2 justify-between flex flex-row'>
      <input 
        className='ml-1 rounded-2xl w-[70%] h-full bg-transparent focus:outline-none lg:text-[16px] text-[.8em] placeholder-[#EFAA93] text-sm sm:text-base'
        type='text'
        placeholder='Pesquisar.'
        onChange=''
      ></input>
      <button>
        <img
          src='/img/icon_search.png'
          alt="Ícone de lupa"
          className="w-[30px] mr-1"
        />
      </button>
    </div>
)
}