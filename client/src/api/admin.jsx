import axios from 'axios'

export const getOrdersAdmin = async(token)=>{
    //code body
    return axios.get('http://localhost:5000/api/admin/orders',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}
export const changeOrderStatus = async(token,orderId,orderStatus)=>{
    //code body
    return axios.put('http://localhost:5000/api/admin/order-status',{
        orderId,orderStatus
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}