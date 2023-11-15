import React, { useState } from 'react'
import { ObjetoMusoshi } from '../../blockchain/ObjectMusoshi'

export default function ForSale({ForSale,id}) {

    const [forSale, setforSale] = useState(ForSale)
    let objeto=new ObjetoMusoshi()
    
    const ChangeMarketState=async()=>{
		await objeto.load()
		let res=await objeto.toggleForSale(id)
		if(res)setforSale(!forSale)
	}
  return (
    <div className="mt-8 flex items-center justify-between">
    <button
        style={{color:forSale?'green':'red'}}
        className="font-display text-sm font-semibold"
        onClick={ChangeMarketState}>
        {forSale?'Disponible':'No disponible'}
    </button>

</div>
  )
}
