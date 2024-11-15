//rafce
import React from 'react'

const HistoryCard = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>ประวัติการสั่งซื้อ</h1>
            <div>
                {/* Card  Loop order*/}
                <div className='bg-gray-100 p-4 rounded-md shadow-md'>
                    {/* header */}
                    <div className='flex justify-between'>
                        {/* Left */}
                        <div>
                            <p className='text-sm'>Order date</p>
                            <p className='font-bold'>วันที่ ....</p>
                        </div>
                        {/* Right */}
                        <div>
                            Status
                        </div>
                    </div>
                    {/* table Loop product*/}
                    <div className='p-2'>
                        <table className='border w-full'>
                            <tr className='bg-gray-200'>
                                <th>สินค้า</th>
                                <th>ราคา</th>
                                <th>จำนวน</th>
                                <th>รวม</th>
                            </tr>
                            <tr>
                                <td>GTX 1050</td>
                                <td>13900</td>
                                <td>1</td>
                                <td>2000</td>
                            </tr>
                        </table>
                    </div>
                    {/* total */}
                    <div>
                        <div className='text-right'>
                            <p>ราคาสุทธิ</p>
                            <p>20000</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HistoryCard