import React from 'react'
import Card from './card'

const Categories = ({header}) => {


  
  return (
    <div className='max-w-[100%] my-10 p-4'>
      <h1 className='text-[1.6rem] grid p-2 my-5 font-bold'>{header}</h1>
      <div className='flex overflow-x-scroll'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Categories
