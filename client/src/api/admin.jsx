import axios from 'axios'

export const getOrdersAdmin = async(token)=>{
    //code body
    return axios.get('http://localhost:5000/api/admin/orders',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}