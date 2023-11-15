import React, { useEffect, useState } from 'react'
import Eth from './image/ethereum_1.png'
import Polygon from './image/polygon_1.png'
import Binance from './image/binance_1.png'
import { CheckConexion, dameCurrentChain, RequestConexion } from '../../blockchain/Blockchain'
import {AiFillAlert} from 'react-icons/ai'
import styled from 'styled-components'
import Image from 'next/image'


export default function ButtonConnect({
    width='7vh',
    imageWidth='100%'
}) {

    const [chainId, setChainId] = useState('')
    const [isConnected, setIsConnected] = useState(true)
    const [web3Installed, setWeb3Install] = useState(true)
    const [windowWidth, setWindowWidth] = useState('')


    useEffect(() => {

        async function Init(){

            const _chainId = await dameCurrentChain()
            const respuesta=await CheckConexion()
            let widhtScreen=window.screen.width

            setChainId(_chainId)
            setWindowWidth(widhtScreen)
            setIsConnected(respuesta.connect)
            setWeb3Install(respuesta.install)
        }
        Init()

        return ()=>{

        }
    }, [])
    

    var array=[
        {name:'Ethereum', id:'0x1',image:Eth},
        {name:'Binance Smart Chain', id:'0x38',image:Binance},
        {name:'Polygon', id:'0x89',image:Polygon},
        {name:'Polygon Mumbai', id:'0x13881',image:Polygon,warning:true},
        {name:'ETH', id:'0x539',image:Eth,warning:true},
        {name:'Ropsten', id:'0x3',image:Eth,warning:true},
        {name:'Kovan', id:'0x2a',image:Eth,warning:true},
        {name:'Binance Testnet', id:'0x61',image:Binance,warning:true},

    ]

    const Div=styled.div`   
        visibility: ${props=>props.chainId==chainId?'visible':'collapse'};
        padding:1% 3%;
        width: ${width};
        z-index: 1;
        border-radius: 10%;
        display:${props=>props.chainId==chainId?'block':'none'};
        color: whitesmoke;
        position: relative;

        img{
            width: 70%;

        }

        p{
            position: absolute;
            opacity: 0;
            transition: all 0.5 ease-in-out;
          
        }

        &:hover p{
            opacity: 1;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            text-align: center;
            font-size: 0.7rem;
            font-weight: 600;
            width: fit-content;
            margin: auto;
            transition: all 0.5s ease-in-out;
        }

        &:hover img{
            visibility: hidden;


        }

        .icon_alert{
            position: absolute;
            top: 0;
            right: 0;
            left: 40px;
            transition: all 0.3s ease-in;

        }
        &:hover .icon_alert{
            opacity: 0;
            transition: all 0.3s ease-in;
        }

    `

    const Button=styled.button`
        background: black;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        padding: 1% 2%;
        transition: all 0.5s ease-in-out;
        border-radius: 15%;

        &:hover{
            transition: all 0.5s ease-in-out;
            border-radius: 50% 40% 50% 40%;
            background: white;
            color: black;
            padding: 2.5% 2.2%;
            
        }
    `
    return (isConnected?
            <>
            {array.map((item,index)=>
            <Div 
            key={index}
            chainId={item.id}>

                <p>
                    {item.name}
                </p>
                
                <Image
                width={500}
                height={500}
                src={item.image}/>

                {item.warning&&
                <div className='icon_alert'>
                    <AiFillAlert 
                    style={{margin:'auto',display:'block'}}
                    size={20} color='crimson'/>
                </div>
                }

            </Div>
            )}
            </>
            :
            //User is no connected, display button
            //If width is less than 821 is a cellphone
            <Button
            className='button_connect_wallet'
            onClick={windowWidth<821&&!isConnected?
            ()=>RequestConexion(setIsConnected,web3Installed)
            :!web3Installed?()=>window.open('https://metamask.io/download/')
            :()=>RequestConexion(setIsConnected,web3Installed)}>
                
                {web3Installed?'Connect Wallet':
                windowWidth<821&&!isConnected?'Connect':
                'Download Wallet'}
            </Button>
    )
}

