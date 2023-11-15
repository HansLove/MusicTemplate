import React from 'react'


function BotonConectar() {
    return (
        <button className='button_connect_wallet'
        onClick={async()=>await window.ethereum.request({ method: 'eth_requestAccounts' })}
        style={{display:'block',margin:'auto'
        }}>Connect Wallet
        
        </button>
    )
}

export default BotonConectar
