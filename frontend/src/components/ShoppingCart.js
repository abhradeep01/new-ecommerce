import React, { useState } from 'react'
import {IconButton} from '@mui/material';
import{Favorite,FavoriteBorder} from '@mui/icons-material'
function ShoppingCart({discount,itemImg,itemName,orgPrice,notPrice,cartEvent,favEvent}) {
    const [fav,setFav] = useState(false);
    const clickEvent = (e) =>{
        setFav(!fav);
        //favEvent(e);
    }
    const cartData={
        itemImg,
        itemName,
        discount,
        orgPrice,
        notPrice
    }
  return (
    <div className="w-44 relative p-1 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg" id='cart' data={cartData}>
            <div className={`absolute z-10 rounded font-semibold text-white shadow-md p-1 capitalize text-sm ${discount==='new'?"bg-green-600":'bg-red-500'}`} 
                style={discount?{display:'block'}:{display:'none'}}>
                {discount}
            </div>
            <div className="z-10 absolute rounded-full bg-transparent top-1 right-1" style={{padding:'0rem'}}>
                <IconButton onClick={()=>setFav(!fav)}>
                    {
                        fav?
                        <Favorite color='error' />:
                        <FavoriteBorder />
                    }
                </IconButton>
            </div>
            <div className="flex flex-col gap-1">
                <div>
                    <img src={itemImg} alt={itemName} />
                </div>
                <button className="w-full bg-black text-white text-base capitalize font-semibold rounded hover:opacity-85" onClick={cartEvent}
                    style={{padding:'0.125rem 0'}}>
                        add to cart
                </button>
            </div>
            <div className="font-semibold capitalize">
                <h4 className='text-sm ' >
                    {itemName}
                </h4>
                <h5 className='text-base text-red-600 font-semibold'>
                    {notPrice}
                    <span className='line-through text-gray-500 text-sm font-medium ml-1'>
                        {orgPrice}
                    </span>
                </h5>
            </div>
        </div>
  )
}

export default ShoppingCart;