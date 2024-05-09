import React from 'react'
import TitleCategory from '../Text/titleCategory'
import DescriptionImg from '../Text/descriptionImg'

export default function CardCharacteristicImg({}) {
return (
    <div className='w-[218px] sm:w-[410px] flex flex-col items-center space-y-1.5'>
        <img
            src='/img/signals/image17.png'
            className="w-[204px] sm:w-[397px] h-[229px] sm:h-[414px] border border-coral rounded-[10px]"
        />
        <TitleCategory title='Expressão Regional'/>
        <DescriptionImg text='O termo “Égua” é uma expressão paraense'/>
    </div>
)
}