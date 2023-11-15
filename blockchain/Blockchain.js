import Web3 from "web3"

function initWeb3(){
  try {
    
  var web3
  if (typeof window !== undefined) {
    // browser code
    web3=new Web3(window.ethereum)
  }
  return web3
} catch (error) {
    return {}
}
}

export const dameCurrentChain=async()=>{
  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId  
  } catch (error) {
    return 0
  }


}

// export const userBalance=async(_acc)=>{

//   let web3=initWeb3()

//   try {
//     let _bal=await web3.eth.getBalance(_acc)
//     let final_balance=TransformWei(_bal)
//     // return final_balance.slice(0,5)
//     return final_balance

//   } catch (error) {
//     console.log('error Blockchain.js userBalance()',error)
//     return 0
//   }

// }

export const TransformWei=(_num)=>{
  let web3=initWeb3()
  try {
  return web3.utils.fromWei(_num)
} catch (error) {
    console.log('error TransformWei=>',error.message)
    return 0
}
}

export const TransformarToWei=(_num)=>{
  let web3=initWeb3()
  return web3.utils.toWei(_num)
}


export const prenderCambioCuenta=(setAccount=()=>{})=>{
    try {

      window.ethereum.on('accountsChanged',(acc)=>{
        console.log("cuenta cambiada: ",acc[0])
        setAccount(acc[0])
        window.location.reload(false);
      });
    } catch (error) {
      
    }
    
  }

export const colocarBotonConnect=()=>{
    window.ethereum.on('accountsChanged',(acc)=>{
      console.log("cuenta cambiada: ",acc[0])
      // window.location.reload(false);

    });
  
}


export const CancelarListener=async()=>{
    window.ethereum.removeListener('accountsChanged',()=>{
      console.log("oidos de cambio de cuenta desactivados")
    });
}


export const prenderCambioCadena=(setChain)=>{
  var chain=''
  try {

  window.ethereum.on('chainChanged', (_chainId) =>{
      chain= _chainId
      
      window.location.reload(false)

  });
} catch (error) {
    
}
  return chain
}


export const CheckConexion=async()=>{
  var isConnected=false
  var isInstall=true

  if (window.ethereum !== undefined) {
    // console.log('window.ethereum: ',window.ethereum)

    try {
        
      await window.ethereum
      .request({ method: 'eth_accounts' })
      .then(accounts=>{
        if (accounts.length != 0) {
          // MetaMask is locked or the user has not connected any accounts
          isConnected=true           
          
        }
      })

    } catch (error) {
      console.log('error CheckConexion: ',error.message)
    }

  }else{
      //The user doesnt have install a web3Wallet
      isInstall=false
      
  }
  return {connect:isConnected,install:isInstall}
}


export const ChangeChain=async()=>{

  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x38'}]});

}

export const RequestConexion=async(isConnected=()=>{},web3Installed=false)=>{

  let widhtScreen=window.screen.width
  //Si la ventana es menor a 820, el usuario esta en un dispositivo movil


  if(widhtScreen<821){
    //Es menor a la dimension de un Ipad air, debe ser portatil
    if(web3Installed){
      let res=await window.ethereum.request({ method: 'eth_requestAccounts' })
      if(res.length>0)isConnected(true)
      
    }else{
      window.open("https://metamask.app.link/dapp/www.music5.io/")

    }

  }else{
    let res=await window.ethereum.request({ method: 'eth_requestAccounts' })
    if(res.length>0)isConnected(true)
  }
  

  
}


let currentAccount = null;



export const actulizarCuenta=async()=>{
  let web3=initWeb3()
  try {
    
    await window.ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts=>{
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
        // window.ethereum.request({ method: 'eth_requestAccounts' })

      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        // console.log("accounts: ",accounts)
      }
  
    })
    .catch((err) => {
      console.error("Error en actualizarCuenta: Pago.js",err);
    })

    } catch (error) {
      console.log('error en Pago.js: ',error)
      return 0
      
    }

    if(currentAccount==null) return 0
    return web3.utils.toChecksumAddress(currentAccount)
    
}
