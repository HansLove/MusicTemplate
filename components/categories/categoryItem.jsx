import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Likes from '../likes';
import Auctions_dropdown from '../dropdown/Auctions_dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { buyModalShow } from '../../redux/counterSlice';
import { ObjetoMusoshi } from '../../blockchain/ObjectMusoshi';
import { TransformWei } from '../../blockchain/Blockchain';
import InputPrice from '../InputPrice/InputPrice';
import ForSale from '../ForSale/ForSale';


const ImageNFT=({id})=>{

	const [file, setfile] = useState('https://firebasestorage.googleapis.com/v0/b/mushima-1d735.appspot.com/o/Veloz%2F19.png?alt=media&token=f3b0a25e-5ceb-4efc-b7a1-2099437d79c6')
	let objeto=new ObjetoMusoshi()

	useEffect(() => {
	  
		async function init(){
			await objeto.load()
			let _uri=await objeto.getURI(id)
			setfile(_uri)
		}
		init()
	}, [])
	
	return(
		<img
		src={file}
		alt="image nft"
		className="w-full h-[285px] rounded-[0.625rem] object-cover">
		</img>
	)
}


const CategoryItem = () => {
	const { sortedtrendingCategoryItemData } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	let objeto=new ObjetoMusoshi()
	const [DATA_LIST, setDATA_LIST] = useState([])

	useEffect(() => {
		async function init(){
			await objeto.load()
			let lista=await objeto.fillData()
			// console.log('lista:',lista[0])
			setDATA_LIST(lista)

		}
		init()
	}, [])



	return (
		<div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
			{DATA_LIST.map((item) => {
				const { 
					id, 
					tokenId, 
					price, 
					currentOwner, 
					forSale } = item;
				return (
					
					<article key={id}>
						<div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
							<figure className="relative">
									<a>
									{tokenId}
										<ImageNFT id={tokenId}/>
									</a>

								{/* <Likes like={likes} /> */}
								
							</figure>

							<div className="mt-7 flex items-center justify-between">
								
								<span 
								style={{overflow:'auto',width:'80%'}}
								className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
									{currentOwner}
								</span>

							</div>

							{/* Precio NFT */}
							<div className="mt-2 text-sm">

							<InputPrice 
							price={price}
							id={tokenId}/>

							</div>

						{/* Estado de mercado NFT (Disponible/No disponible)*/}
						<ForSale
						ForSale={forSale}
						id={tokenId}/>

						</div>
					</article>
				);
			})}
		</div>
	);
};

export default CategoryItem;
