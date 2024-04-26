import HomeSlider from '@/components/home/home-slider'
import StoreLeaderBoard from '@/components/home/store-leader-board'
import React from 'react'

function Home() {
  return (
    <div className='container'>
      <HomeSlider/>
      <StoreLeaderBoard/>
    </div>
  )
}

export default Home