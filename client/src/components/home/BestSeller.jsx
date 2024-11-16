//rafce
import React,{useState,useEffect} from 'react'
import {listProductBy} from '../../api/Product'
import ProductCard from '../card/ProductCard'

const BestSeller = () => {
    const [data,setData] = useState([])

    useEffect(() =>{
        //code
        loadData()
    },[])

    const loadData = () => {
        listProductBy('sold','desc',6)
        .then((res) =>{
            setData(res.data)
        }).catch((error) =>{
            console.log(error)
        })
    }
console.log(data)
  return (
    <div className='flex flex-wrap gap-4 '>
        {
            data?.map((item,index)=>
               <ProductCard key={index} item={item}/> 
            )
        }
    </div>
  )
}

export default BestSeller