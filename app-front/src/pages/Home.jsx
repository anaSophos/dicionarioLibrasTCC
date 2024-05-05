import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import InputMain from '../components/Input/inputMain'
import TitlePrimary from '../components/Text/titlePrimary'
import TitleSecondary from '../components/Text/titleSecondary'
import DescriptionPage from '../components/Text/descriptionPage'
import Button from '../components/Button/button'
import CardCategory from '../components/Cards/cardCategory'

const Home = () => {
  return (
    <>    
    <Header/>
    <InputMain/>
    <div className='w-full h-screen px-6 sm:px-8 py-4 bg-pastel-orange flex flex-col'>
        <TitlePrimary title='Dicionário da Língua Brasileira de Sinais'/>
        <TitleSecondary title='Uma visão regional: Marabá'/>
        <img
            src='/img/icon_clip.png'
            alt="Ícone de clip"
            className="w-[16px] sm:w-[30px] flex mx-auto my-0.5 sm:my-2"
        />
        <DescriptionPage title='sdasd'/>
        <div className='flex flex-wrap flex-row content-center justify-around items-center'>
            <CardCategory/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Home