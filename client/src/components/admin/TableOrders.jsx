//rafce
import React, { useState, useEffect } from 'react'
import { getOrdersAdmin, changeOrderStatus } from '../../api/admin'
import useEcomStore from '../../store/ecom-store'
import { toast } from 'react-toastify'

const TableOrders = () => {
  const token = useEcomStore((s) => s.token)
  const [orders, setOrders] = useState([])
  console.log(orders)

  useEffect(() => {
    //code
    handleGetOrder(token)
  }, [])

  const handleGetOrder = (token) => {
    getOrdersAdmin(token)
      .then((res) => {
        setOrders(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChangeStatus = (token, orderId, orderStatus) => {
    //code
    console.log(orderId, orderStatus)
    changeOrderStatus(token, orderId, orderStatus)
      .then((res) => {
        console.log(res)
        toast.success('Update Status Success !!!')
        handleGetOrder(token)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getStatusColor = (status)=>{
    switch (status){
      case 'Not Process':
        return 'bg-gray-200'
      case 'Processing':
        return 'bg-blue-200'
      case 'Completed' :
        return 'bg-green-200'
      case 'Cancelled':
        return 'bg-red-200'
    }
  }


  return (
    <div className='container mx-auto p-4 bg-white shadow-md'>
      <div>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-200 border'>
              <th>ลำดับ</th>
              <th>ผู้ใช้งาน</th>
              <th>สินค้า</th>
              <th>รวม</th>
              <th>สถานะ</th>
              <th>จัดการ</th>
            </tr>
          </thead>

          <tbody>
            {
              orders?.map((item, index) => {
                return (
                  <tr key={index} className='border'>
                    <td className='text-center'>{index + 1}</td>
                    <td>
                      <p>{item.orderedBy.email}</p>
                      <p>{item.orderedBy.address}</p>
                    </td>

                    <td className='px-2 py-4'>

                      {
                        item.products?.map((product, index) =>
                          <li>
                            {product.product.title} {" "}
                            <span className='text-sm'>{product.count} x {product.product.price}</span>
                          </li>
                        )
                      }

                    </td>

                    <td>{item.cartTotal}</td>



                    <td>
                      <span className={`${getStatusColor(item.orderStatus)} px-2 py-1 rounded-full`}>
                        {item.orderStatus}
                      </span>
                    </td>


                    <td>
                      <select
                        value={item.orderStatus}
                        onChange={(e) =>
                          handleChangeStatus(token, item.id, e.target.value)}
                      >
                        <option>Not Process</option>
                        <option>Processing</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                      </select>
                    </td>




                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableOrders