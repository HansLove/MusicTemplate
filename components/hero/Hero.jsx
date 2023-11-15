import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sound from "../sound/Sound";
import { ObjetoMusoshi } from "../../blockchain/ObjectMusoshi";
import Loading from "../loading/Loading";
import ButtonAddToken from "../../blockchain/ButtonAddToken";
import { CheckConexion } from "../../blockchain/Blockchain";
import ButtonConnect from "../ButtonConnect/ButtonConnect";


export default function Hero ({
  balance,setBalance,
  loading,setLoading}){

  let CONTRACT_MUSIC=new ObjetoMusoshi()

  const [url, seturl] = useState('')
  const [isConnected, setIsConnected] = useState(true)
  const [web3Installed, setWeb3Install] = useState(true)  
  
  useEffect(() => {
    async function Init(){

      const respuesta=await CheckConexion()
      
      setIsConnected(respuesta.connect)
      setWeb3Install(respuesta.install)
  }   
  Init()

  
    return () => {
    }
  }, [])


  const Mint=async()=>{
    setLoading(true)
    let generated_uri=GenerarURI()
    await CONTRACT_MUSIC.load()
    let _price=await CONTRACT_MUSIC.getPrice()
    
    let res=await CONTRACT_MUSIC.mint(
      generated_uri,
      _price)

    if(res){
      seturl(generated_uri)
      setBalance(balance+1)
    }
    setLoading(false)

  }

  const list_images=[
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F1.png?alt=media&token=f3cee46e-ee3a-4c53-a035-6821a5318ebf",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F2.png?alt=media&token=84d28c4e-bdb5-474d-b523-8312f8e7c6f4",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F3.png?alt=media&token=aec19c5b-9573-473b-b5a9-800e15e0cf31",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F4.png?alt=media&token=5eafaa4e-da13-43bb-b45e-3e11a5c0abf4",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F5.png?alt=media&token=05cf6575-8d50-4137-bb60-6ceb78eb8a1f",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F6.png?alt=media&token=0ac6c8e7-8441-4ce1-a672-6404e3863492",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F7.png?alt=media&token=a4b8180a-bf5f-42c6-bf32-52b475906433",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F8.png?alt=media&token=9254ac60-1a97-442e-bc21-53f49d5b991d",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F9.png?alt=media&token=4a613c4d-d209-4535-bb4a-ca297e7b1e1f",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F10.png?alt=media&token=5378ded6-f544-4b05-b904-c13a7cc5feeb",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F11.png?alt=media&token=9b34890a-bc92-4bd6-8fab-fb904fa3169b",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F12.png?alt=media&token=5644b1d3-f295-43ef-b1fc-18ba7d3c1757",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F13.png?alt=media&token=be221b80-5b25-4954-b42e-a668bf944dfc",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F14.png?alt=media&token=f72fbadf-d533-47f0-9bff-2b5a164e165d",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F15.png?alt=media&token=1202f176-906e-4473-bb97-ae16d84c9b41",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F16.png?alt=media&token=39a01a2c-37f9-4f82-888d-d380a4c5f691",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F17.png?alt=media&token=4093ac85-dea5-4b66-89a4-d962647edc81",
    "https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F19.png?alt=media&token=f3b0a25e-5ceb-4efc-b7a1-2099437d79c6"

  ]

  const GenerarURI=()=>{
    let number=Math.random() * (list_images.length - 1) + 1;
    return list_images[Math.floor(number)]

  }


  return (
    <section 
    className="relative pb-10 pt-20 md:pt-32 h-1527">
      <picture 
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full">
        <img
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      
      <picture 
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture>

      <div className="container h-full mx-auto">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
            <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-4xl dark:text-white md:text-left lg:text-6xl xl:text-6xl">
              El NFT que te conecta con tus artistas favoritos.
            </h1>

            
            <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
              Disfruta de contenido exclusivo, lives, platicas y mucho más, todo usando tu NFT como llave de acceso.
            </p>
            <div className="flex space-x-4">
                {isConnected?
                <a
                onClick={Mint} 
                className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                 Mint
                </a>
                :
                <ButtonConnect/>
                }

              <Link href="/collection/explore_collection">
                <a className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white">
                  Categorías
                </a>
              </Link>
            </div>

          </div>

          {/* <!-- Hero image --> */}
          <div className="col-span-6 xl:col-span-8">

            {loading
            // ||balance==undefined
            ?
            <Loading/>
              :
            balance==0?
             <div className="relative text-center md:pl-8 md:text-right">
              <img
                src="/images/hero/hero.png"
                alt="velaz"
                className=" mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              />
              
              <img
                src="/images/hero/3D_elements.png"
                alt=""
                className="animate-fly absolute top-0 md:-right-[10%]"
              />
            </div>
              :

              <div>
                <img
                style={{zIndex:'-1'}}
                  src="/images/hero/3D_elements2.png"
                  alt=""
                  className="animate-fly absolute top-0 md:-right-[10%]"
                />     

                <img
                style={{zIndex:'-1'}}
                  src={url}
                  alt=""
                  className="animate-fly relative top-0 md:-right-[10%]"
                />                
                
                {url==''&&
                <Sound 
                left={'50%'}
                size={200}
                sizeRestart={40}/>}

              </div>
            }

            
          </div>
        </div>
      </div>
    </section>
  );
};



