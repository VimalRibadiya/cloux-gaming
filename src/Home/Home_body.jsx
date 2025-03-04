import React from 'react'
import Cloux_info from './Cloux_info'
import Hero_section from './Hero_section'
import Categories from './Categories'
import Fifa_soccer from './Fifa_soccer'
import About_cloux from './About_cloux'
import Feature_game from './Feature_game'
import Game_search from './Game_search'
import Blog_news from './Blog_news'
import Game_shop from './Game_shop'

const Home_body = () => {
  return (
    <>
        <Hero_section/>
        <Cloux_info/>
        <Categories/>
        <Game_search/>
        <Fifa_soccer/>
        <Feature_game/>
        <Blog_news/>
        <About_cloux/>
        <Game_shop/>
    </>
  )
}

export default Home_body