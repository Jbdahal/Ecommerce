import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../../context/ShopContext'

const PlaceOrder = () => {
  const[method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col border-t border-gray-300 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* -----------left Side---------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>

        <div className='flex gap-3'>
            <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name'/>
            <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name'/>
        </div>
        <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address'/>
        <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street'/>
        <div className='flex gap-3'>
            <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City'/>
            <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State'/>
        </div>
         <div className='flex gap-3'>
            <input type="number"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='ZipCode'/>
            <input type="text"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country'/>
        </div>
        <input type="number"  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone no'/>
      </div>

      {/* Right Side */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
        </div>
        {/* Payment method selection */}
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('esewa')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'esewa'? 'bg-green-400' :''}`}></p>
              <img className='h-8 mx-4' src={assets.esewa} alt="" />
          </div>
          <div onClick={()=>setMethod('khalti')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'khalti'? 'bg-green-400' :''}`}></p>
              <img className='h-8 mx-4 ' src={assets.khalti} alt="" />
          </div>
          <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod'? 'bg-green-400 ':''}`}></p>
              <p className='text-gray-500 text-sm mx-4 font-medium'>CASH ON DELIVERY</p>
          </div>
        </div>
        
        <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm active:bg-gray-800 cursor-pointer'>PLACE ORDER</button>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder