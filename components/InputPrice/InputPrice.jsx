import React, { useState } from 'react'
import { TransformarToWei, TransformWei } from '../../blockchain/Blockchain'
import { ObjetoMusoshi } from '../../blockchain/ObjectMusoshi'

export default function InputPrice({
    id,price}) {

    const [currentPrice, setCurrentPrice] = useState(price)
    const [newPrice, setnewPrice] = useState('')
	  const [modoEdicion, setmodoEdicion] = useState(false)

	  let objeto=new ObjetoMusoshi()

    const ChangePrice=async()=>{
      await objeto.load()
      //transformar a wei
      let final_price=TransformarToWei(newPrice)
      let res=await objeto.changePrice(id,final_price)
      if(res)setmodoEdicion(false)
      if(res)setnewPrice('')
      if(res)setCurrentPrice(final_price)
	  } 

  return (
    <div>
        {!modoEdicion?
        <span 
        onClick={()=>setmodoEdicion(!modoEdicion)}
        className="dark:text-jacarta-200 text-jacarta-700 mr-1">
          {TransformWei(currentPrice)} ETH
        </span>  
        :
        <>    
        <input 
        style={{color:'black'}}
        value={newPrice}
        onChange={(e)=>setnewPrice(e.target.value)}
        placeholder='new price'
        type="text" />

        {newPrice>0&&
        <button 
        onClick={ChangePrice}
        style={{
        background:'darkgreen',
        color: 'white',
        borderRadius:'15%',
        fontSize:'1rem',
        padding: '1%'
        }}>Actualizar</button>
      }
      </>
      }        
        
    </div>
  )
}
