//rafce
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useEcomStore from "../store/ecom-store"

const MainNav = () => {
    const carts = useEcomStore((s) => s.carts)
    console.log(carts.length)

    return (
        <nav className='bg-white shadow-md'>
            <div className='mx=auto px-4'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center gap-4'>


                        <Link to={'/'} 
                        className= 'text-2xl font-bold'>
                            Logo
                        </Link>
                        
                        
                        
                        <NavLink to={'/'} 
                        className= {({isActive})=>
                            isActive
                        ?'bg-gray-200 rounded-md px-3 py-2 text-sm font-medium'
                        :'hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium '
                        }>
                        Home
                        </NavLink>
                        
                        
                        
                        <NavLink 
                        to={'/shop'}
                        className= {({isActive})=>
                            isActive
                        ?'bg-gray-200 rounded-md px-3 py-2 text-sm font-medium'
                        :'hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium '
                        }
                        >Shop</NavLink>

                        {/* Badge */}


                        <NavLink to={'/cart'} 
                        className= {({isActive})=>
                            isActive
                        ?'bg-gray-200 rounded-md px-3 py-2 text-sm font-medium'
                        :'hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium '
                        }>
                            Cart
                            {carts.length > 0
                                && (<span
                                    className='absolute top-0
                                 bg-red-500 rounded-full px-2'>
                                    {carts.length}
                                </span>)
                            }
                        </NavLink>



                    </div>

                    <div className='flex items-center gap-4'>
                        <NavLink to={'/register'}
                        className= {({isActive})=>
                            isActive
                        ?'bg-gray-200 rounded-md px-3 py-2 text-sm font-medium'
                        :'hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium '
                        }
                        >
                        Register
                        </NavLink>

                        <NavLink to={'/login'}
                        className= {({isActive})=>
                            isActive
                        ?'bg-gray-200 rounded-md px-3 py-2 text-sm font-medium'
                        :'hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium '
                        }
                        >
                        Login
                        </NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default MainNav