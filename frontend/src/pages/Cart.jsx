import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products, currency , cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([])
  useEffect(()=>{
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id: items,
            size: item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])
  return (
    <div className='border-t border-gray-300 pt-14'>
      
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=> product._id === item._id);
            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4 border-gray-300'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-30' src={productData.image[0]} alt=''/>
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{productData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 border-gray-300'>{item.size}</p>
                    </div>
                    </div>
                </div>
                <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-gray-300' type='number' min={1} defaultValue={item.quantity} onChange={(e)=> e.target.value === '' || e.target.value === '0'? null : updateQuantity(item._id,item.size,Number(e.target.value))}/>
                <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer'/>
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <div className='w-full text-end'>
              <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-600 cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Cart