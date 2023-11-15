import React, { useEffect } from 'react'
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'


export default function ButtonAddToken({
  text='Add Token',
  color1='black',
  color='lightblue'
}) {

  // const web3=new Web3(window.ethereum)

  const testnet='0x7399AF1B03019F70487cea5BabECa2A99Fdc1fc4'
  const mainnet= '0x0b50a363544180b2b4f8fF97dDe5084b52d20e1d'
  // const tokenAddress = mainnet;
  const tokenAddress = testnet;
  const tokenSymbol = 'MUSIC5';
  const tokenDecimals = 0;


  // useEffect(() => {
  //   async function init(){

  //     async function initWeb3(){
  //       try {
    
  //       const provider = await detectEthereumProvider()
  //       var web3
    
  //       if (provider) {
        
  //         console.log('Ethereum successfully detected!',provider.isMetaMask)
  //         if(provider.isMetaMask)web3=new Web3(provider)
    
  //       }
          
  //       // if (typeof window !== undefined) {
  //       //   // browser code
  //       //   web3=new Web3(window.ethereum)
  //       // }
    
  //       return web3
  //     } catch (error) {
  //         console.log('error init web3: ',error)
  //         return {}
  //     }
  //     }

  //     try {


  //       let web3=await initWeb3()

  //       await web3.currentProvider.request(
  //       {
  //         method:"WatchAssetParams",
  //         params:{
  //         type: 'ERC20', // In the future, other standards will be supported
  //         options: {
  //           address: tokenAddress, // The address of the token contract
  //           symbol: tokenSymbol, // A ticker symbol or shorthand, up to 11 characters
  //           decimals: tokenDecimals,// The number of token decimals
  //           // image: string // A string url of the token logo
  //         }}
          
  //       })


  //       // console.log('ButtonAddToken =>',res)

  //     } catch (error) {
  //       console.log('ButtonAddToken error ',error)

  //     }

  //   }
  //   init()
  
  //   return () => {
      
  //   }
  // }, [])

const Add=async()=>{
    try {

      const provider = await detectEthereumProvider()
      var web3
      if (provider) {
        console.log('Ethereum successfully detected!',provider.isMetaMask)
        if(provider.isMetaMask)web3=new Web3(provider)
  
      }

    const isAdded = await web3.currentProvider.request({
        method: 'wallet_watchAsset',
        params: {
        type: 'ERC20',
        options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: 'https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/logo.png?alt=media&token=34957940-3eac-49e9-8577-6e06e40c77c7', // if you have the image, it goes here
        },
        },
    });
    console.log('is added: ',isAdded)
    } catch (error) {
    
    }
    

}

  return (
    <button 
    style={{
      display: 'block',
      margin:'auto',
      padding:'2%',
      borderRadius:'10%',
      background:color1,
      color:color
    }}
    onClick={Add}>{text}</button>
  )
}
