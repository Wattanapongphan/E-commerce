//rafce
import React, { useState,useEffect } from 'react'
import useEcomStore from '../../store/ecom-store'


const SearchCard = () => {

    const getProduct = useEcomStore((state)=>state.getProduct)
    const products = useEcomStore((state)=>state.products)
    const actionSearchFilters = useEcomStore((state)=>state.actionSearchFilters)

    const[text,setText] = useState('')
    // Step 1 Search Text
    console.log(text)
    useEffect(()=>{
        //code
        const delay = setTimeout(()=>{
            actionSearchFilters({query:text})
            if(!text){
                getProduct()
            }
        },300)
        return ()=> clearTimeout(delay)
    },[text])
    

    // Step 2 Search by Category


    // Step 3 Search by Price

  return (
    <div>
        <h1 className='text-xl font-bold mb-4'>ค้นหาสินค้า</h1>
        <input onChange={(e)=>setText(e.target.value)} type="text"  className='border rounded-md w-full mb-4 px-4' placeholder='ค้นหาสินค้า....'/>

    </div>
  )
}

export default SearchCard