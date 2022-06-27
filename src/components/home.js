import React from 'react'
import Header from './header'
import Table from './table'
import Filter from './filter'
import Cart from "./card";

const Home = () => {
  return (
    <div>
        <Header/>
        <Table/>
        <Filter/>
        <Cart/>
    </div>
  )
}

export default Home