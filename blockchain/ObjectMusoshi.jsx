// import md5 from "md5"
import Web3 from "web3"
import Json from '../build/Music5.json'
import { determinarChain } from "./utils/FiltroChains"
import { actulizarCuenta } from "./Blockchain"

var web3

try {
    
    if (typeof window !== undefined) {
        // browser code
        web3=new Web3(window.ethereum)
    }

} catch (error) {
    
}

export class ObjetoMusoshi{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        try {
        const id=await web3.eth.net.getId()
        const deployedNetwork=Json.networks[id]
        this.account=await actulizarCuenta()
        
        let winner=await determinarChain(deployedNetwork,0)

          const contrato=new web3.eth.Contract(
            Json.abi,
            winner
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion con Music5.jsx: load: ",error)
          return {}
        }
      
      
    }

    async mint(uri,_price){
        try {
            var _resultado=await this.contrato.methods.mint(uri).send({
                from:this.account,
                value:_price
            })
            return _resultado.status
        } catch (error) {
            console.log('mint error: ',error)
            return false
        }
    }

    async get(_index){
        try {
            var _hashi=await this.contrato.methods.get(_index).call()
            return _hashi        
        } catch (error) {
            console.log('error en Music5.jsx ,get: ',
            error)
            return {}       
        }
    
    
    }
    
    async buy(_index,price){
        try {
            var _res=await this.contrato.methods.buyToken(_index).send({from:this.account,value:price})
            

            return _res.status
        } catch (error) {
            return false
        }
    
    
    }

    async aprovar(_address,_index){
        try {
            var _res=await this.contrato.methods.approve(_address,_index).send({from:this.account})
            return _res.status
        } catch (error) {
            return false
        }
    
    
    }

    async balanceOf(_account){
        try {
            var _bal=await this.contrato.methods.balanceOf(_account).call()
            return _bal
        } catch (error) {
            console.log('error en ObjectMusoshi.jsx: balanceOf: ',error)
            return {}
    
        }
    
    
    }
 
    async getTotal(){
        try {
            var _res=await this.contrato.methods.getTotal().call()
            return _res        
        } catch (error) {
            console.log('error en ObjectMusic5.jsx getTotal:',error.message)
            return 0
        }
    
    }
 
    async getPrice(){
        try {
            var _res=await this.contrato.methods.getPrice().call()
            return _res        
        } catch (error) {
            console.log('error en ObjectMusic5.jsx getPrice:',error.message)
            return 0
        }
    
    }

    async EsOriginal(_tokenId){
        try {
            var _resultado=await this.contrato.methods.original(_tokenId).call()
            return _resultado   
        } catch (error) {
            return false
        }
    
     
    }

    async getURI(_tokenId){
        try {
            var _resultado=await this.contrato.methods.tokenURI(_tokenId).call()
            return _resultado   
        } catch (error) {
            console.log('error getURI Music5.jsx',error)
            return false
        }
    }

    async fillData(){
        const _account=await actulizarCuenta()
        var _total=await this.getTotal()

        var _mycollection=[]
        
        for (let index = 0; index < _total+1; index++) {
            
            try {      
                var obtein_data=await this.get(index)
                if(obtein_data['currentOwner']!='0x0000000000000000000000000000000000000000'){
                    
                    if(obtein_data['currentOwner']==_account){
                        _mycollection.push(obtein_data)
                    }
                }
    
            } catch (error) {
                break;
            }
    
        }
        return _mycollection
       
    
        
    }

    async toggleForSale(_index){
        try {
            var _res=await this.contrato.methods.toggleForSale(_index)
            .send({from:this.account})
            return _res.status       
        } catch (error) {
            console.log('error toggleForSale(): ',error)
            return false     
        }
    
    }

    async changePrice(_index,_currentPrice){
        // El input ya viene en wei, no es necesario convertirlo
        try {
            var _res=await this.contrato.methods.changePrice(_index,_currentPrice)
            .send({from:this.account})

            return _res.status       
        } catch (error) {
            console.log('error changePrice() in Music5: ',error.message)
            return false     
        }
    
    
    }

    async transfer(account,_to,_tokenId){
        try {
            var _res=await this.contrato.methods.safeTransferFrom(this.account,_to,_tokenId)
            .send({from:account})
            return _res        
        } catch (error) {
            console.log('error en Hashima Contract: ',error)
            return {}
        }
    
    }
    
    
}


