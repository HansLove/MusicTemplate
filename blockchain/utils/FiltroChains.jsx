import { dameCurrentChain } from "../Blockchain"

export async function determinarChain(deployedNetwork,id){

    //Old contract Hashima: "0x66cafdD687b83663512bCfC99e36724d86b11C7e"
    
    let array_binance_mainnet=[
        "0x0b50a363544180b2b4f8fF97dDe5084b52d20e1d"//Music5
    ]

    let array_binance_testnet=[
        "0x11533431370D314B537706990cca9F650C1c0827"//Music5
    ]

    let array_mumbai_matic=[
      "0x1B006d04bFc03e7Ab9ffc842e36d13dea4B229C1"//Hashima
      ,"0xd53a321E41982A7725175E9eA1BaF7Ae9CA7C087"//$HASHI(Staking)
      ,".."//Auction
      ,"0x4092f3e09EB821BFf6eBE11a2c773e275025A835"//Server
  ]    

  let array_ropsten=[
    "0x8C3032f5e868687b17c5cD1DbbEFc68d092c9bB2"//Hashima
    ,"0xd53a321E41982A7725175E9eA1BaF7Ae9CA7C087"//$HASHI(Staking)
    ,".."//Auction
    ,"0x509473bfffd85FF26dF2339e33fd5f9016FCecc0"//Server
]   
    
    var winner=''
    let chainId=await dameCurrentChain()

    if(chainId=='0x539'){
        //Gananche fake blockchain
        winner=deployedNetwork.address
      }else if(chainId=='0x38'){
        //Binance smart chain
        winner=array_binance_mainnet[id]
      }else if(chainId=='0x1'){
        //Ethereum
        winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'

      }else if(chainId=='0x61'){
        //Binance testnet
        winner=array_binance_testnet[id]
        
      }else if(chainId=='0x13881'){
        //Mumbai testnet
        winner=array_mumbai_matic[id]
        
      }else if(chainId=='0x3'){
        //Mumbai testnet
        winner=array_ropsten[id]
        
      }
      return winner

}