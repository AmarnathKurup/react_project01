import React from 'react';
import "./App.css"
import Navbar from './navbar';
import Dropdown from './Dropdown';
import Cards from './Cards';
import Sales_chart from './sales_chart';
function app(){
  return (
    <div className='container-fluid '>
       <Navbar/> 
       <p>Sales Dashboard</p>
       <Dropdown/>
       <Cards/>
       <Sales_chart/>
    </div>
  )
}

export default app;