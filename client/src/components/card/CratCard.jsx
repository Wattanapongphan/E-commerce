//rafce
import React from 'react'
import { Trash2 } from 'lucide-react';


const CratCard = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>ตะกร้าสินค้า</h1>
            {/* Border */}
            <div className='border p-2'>
                {/* Card */}
                <div className='bg-white round p-2 shadow-md'>
                    {/* Row 1 */}
                    <div className='flex justify-between mb-2'>
                        {/* Left */}
                        <div className='flex gap-2 items-center'>
                            <div src="" className='w-16 h-16 bg-gray-300 rounded-md
                            flex text-center items-center'>
                                No Image
                            </div>
                            <div>
                                <p className='font-bold'>Title</p>
                                <p className='text-sm'>Description</p>
                            </div>
                        </div>
                        {/* Right */}
                        <div className='text-red-600'>
                        <Trash2 />
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className='flex justify-between'>
                        {/* Left */}
                        <div className='border rounded-sm px-2 py-1'>
                            <button className='px-2 py-2 bg-gray-100 rounded-md hover:bg-red-400'>-</button>
                            <span className='px-4'>1</span>
                            <button className='px-2 py-2 bg-gray-100 rounded-md hover:bg-gray-400'>+</button>
                        </div>
                        {/* Right */}
                        <div className='font-bold text-blue-500'>
                            10000
                        </div>
                    </div>
                </div>
                {/* Total */}
                <div className='flex justify-between px-2'>
                    <span>รวม</span>
                    <span>5000</span>   
                </div>
                {/* Button */}
                <button className='mt-4 bg-green-500 text-white w-full py-2 rounded-md shadow-md hover:bg-green-600'>ดำเนินการชำระเงิน</button>
            </div>
        </div>
    )
}

export default CratCard