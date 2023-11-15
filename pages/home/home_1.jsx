import React,{useEffect,useState} from 'react';
import {
	Bids,
	Top_collection,
	Tranding_category,
	NewseLatter,
	Hero
} from '../../components/component';
import Meta from '../../components/Meta';
import { actulizarCuenta } from "../../blockchain/Blockchain";
import { ObjetoMusoshi } from "../../blockchain/ObjectMusoshi";
import ButtonAddToken from '../../blockchain/ButtonAddToken';



const Home_1 = () => {

	const [BALANCE, setBALANCE] = useState(undefined)
	const [loading, setLoading] = useState(false)

    let CONTRACT_MUSIC=new ObjetoMusoshi()

	useEffect(() => {
  
	  async function init(){
		let _account=await actulizarCuenta()
  
		await CONTRACT_MUSIC.load()
		let _balance=await CONTRACT_MUSIC.balanceOf(_account)
		setBALANCE(_balance)
	  }
	  init()
	 
	}, [])
	
	
	return (
		<main>
			<Meta title="5.0 Music" />
			<Hero 
			balance={BALANCE} 
			loading={loading}
			setLoading={setLoading}
			setBalance={setBALANCE}/>
			<Bids />
			<Top_collection />
			<Tranding_category />

			<div style={{
				display:'block'}}>
              <p style={{
				  marginBottom:'2%',
				  width:'fit-content',
				  display:'block',
				  margin:'auto',
				  fontFamily:'monospace',
				  fontSize:'2.2rem'}}>Importar NFT a Wallet</p>
              <ButtonAddToken color1='transparent' text='Click para import'/>
            </div>
			<NewseLatter />
		</main>
	);
};

export default Home_1;
