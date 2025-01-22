import ChooseUs from '@/components/chooseus'
import Clients from '@/components/clients'
import Clientsay from '@/components/clientsay'
import Creative from '@/components/creative'
import FoodCategory from '@/components/foodcategory'
import Hero from '@/components/hero'
import News from '@/components/news/News'
import OurChefs from '@/components/ourchef'
import OursMenu from '@/components/OurMenu'
import React from 'react'



const Page = () => {
  return (
    <div>
      <Hero/>
      <FoodCategory/>
      <ChooseUs/>
      <Clients/>
      <OursMenu/>
      <OurChefs/>
      <Clientsay/>
      <Creative/>
      <News/>
    </div>
  )
}

export default Page
